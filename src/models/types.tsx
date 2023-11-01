export interface IGenericObject {
  [key: string]: any;
}

export interface IPost extends IGenericObject {
  id: number;
  author: { name: string; username: string };
  title: string;
  description: string;
}

export interface IFilterProps {
  source: string;
  label: string;
  link?: string;
  icon: string;
}
