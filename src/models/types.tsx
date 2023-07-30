export interface IGenericObject {
  [key: string]: any;
}

export interface IContact extends IGenericObject {
  company: string;
  company_facebook_url: string;
  company_linkedin_url: string;
  company_size: string;
  company_twitter_url: string;
  company_url: string;
  country: string;
  createdAt: string;
  description: string;
  facebook_url: string;
  github_url: string;
  id: string;
  industry: string;
  job_title: string;
  linkedin_url: string;
  twitter_url: string;
  updatedAt: string;
}

export interface IListFieldProps {
  handleItem: (record: IContact | null) => void;
  label?: string;
  source: string;
}

export interface IFilterProps {
  source: string;
  label: string;
  link?: string;
  icon: string;
}
