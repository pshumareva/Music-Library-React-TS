export interface Album {
  imageUrl: string;
  singer: string;
  album: string;
  sales: number;
  _id: string;
}
export interface Albums {
  data: Album[];
}

export interface AlbumDetails extends Album {
  release: number;
  label: string;
}
export interface AlbumInfo {
  data: AlbumDetails[];
}

export interface AddEditAlbumState {
  imageUrl: string;
  singer: string;
  album: string;
  sales: string;
  release: string;
  label: string;
}
