export default class ImageDto {
  constructor(image) {
    this.albumId	= Number(image.albumId);
    this.id	= Number(image.id);
    this.title	= image.title ? image.title : '';
    this.url	= image.url ? image.url : '';
    this.thumbnailUrl	= image.thumbnailUrl ? image.thumbnailUrl : '';
  }
}