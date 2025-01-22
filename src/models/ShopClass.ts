class ShopClass {
  id: number;
  isFeatured: boolean
  title: string
  img: string
  tagInfo: string
  description: string
  rate: number

  constructor(
    id: number,
    isFeatured: boolean,
    title: string,
    img: string,
    tagInfo: string,
    description: string,
    rate: number

  ) {
    this.id = id;
    this.isFeatured = isFeatured
    this.title = title
    this.img = img
    this.tagInfo = tagInfo
    this.description = description
    this.rate = rate
  }
}

export default ShopClass;
