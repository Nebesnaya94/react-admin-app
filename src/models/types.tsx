export interface IGenericObject {
  [key: string]: any;
}

export interface IAuthProvider {
  login: (params: IGenericObject) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  checkError: (params: IGenericObject) => Promise<void>;
  getPermissions: () => Promise<string>;
}

export interface IPost extends IGenericObject {
  id: number;
  author: { name: string; username: string };
  title: string;
  description: string;
}

export interface IFilterInputProps {
  label: string;
  icon: string;
}

export interface IFilterSelectProps extends IFilterInputProps {
  source: string;
  link: string;
}
