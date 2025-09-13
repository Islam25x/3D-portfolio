export interface Projectprops {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}
export interface Tag {
  name: string;
  color: string;
}