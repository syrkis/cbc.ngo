export interface Project {
    slug: string;
    title: string;
    description_en: string;
    description_pt: string;
    review: string;
    project_images: string[];
  }
  
  export interface Publication {
    slug: string;
    title: string;
    abstract_en: string;
    abstract_pt: string;
    publication_date: string;
    published: boolean;
  }
  
  export interface Page {
    slug: string;
    title: string;
    body_en: string;
    body_pt: string;
  }

  export type Post = Project | Publication | Page;