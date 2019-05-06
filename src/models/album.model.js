export default class AlbumDto {
  constructor(item) {
    this.id	= Number(item.albumId);
    this.title	= item.title ? item.title : '';
    this.thumbnailUrl	= item.thumbnailUrl ? item.thumbnailUrl : '';
    this.images	= [];
  }
}