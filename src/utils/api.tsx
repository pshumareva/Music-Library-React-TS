//Keep it exported just so we can use it other files if necessary
export const apiBaseURL = "http://localhost:3030";

async function request(url: string, options: any) {
 try {
  const response = await fetch(url, options);

  if (response.ok == false) {
   const error = await response.json();
   throw new Error(error.message);
  }

  try {
   const data = await response.json();
   return data;
  } catch (err) {
   return response;
  }
 } catch (err) {
  alert(err.message);
  throw err;
 }
}

function getOptions(method = "get", body: any) {
 const options = {
  method,
  headers: {},
 };
 const token = sessionStorage.getItem("authToken");
 if (token != null) {
  options.headers["X-Authorization"] = token;
 }

 if (body) {
  options.headers["Content-Type"] = "application/json";
  options.body = JSON.stringify(body);
 }

 return options;
}

export async function get(url: string) {
 return await request(url, getOptions());
}

export async function post(url: string, data: any) {
 return await request(url, getOptions("post", data));
}

export async function put(url: string, data: any) {
 return await request(url, getOptions("put", data));
}

export async function del(url: string) {
 return await request(url, getOptions("delete"));
}

export async function login(email: string, password: string) {
 const result = await post(apiBaseURL + "/users/login", {
  email,
  password,
 });
 sessionStorage.setItem("email", result.email);
 sessionStorage.setItem("authToken", result.accessToken);
 sessionStorage.setItem("userId", result._id);
 return result;
}

export async function logout() {
 const result = await get(apiBaseURL + "/users/logout");
 sessionStorage.removeItem("email");
 sessionStorage.removeItem("authToken");
 sessionStorage.removeItem("userId");
 return result;
}
