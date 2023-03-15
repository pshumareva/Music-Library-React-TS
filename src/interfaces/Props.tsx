export interface Album {
 imageUrl: string,
 singer: string,
 album: string,
 sales: number,
 _id: string
}
export interface Albums {
 data: Album[];
}