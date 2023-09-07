export interface Program {
    slug: string;
    title: string;
    title_en: string;
    title_pt: string;
    description_en: string;
    description_pt: string;
  }
  
  export interface Publication {
    slug: string;
    title: string;
    title_en: string;
    title_pt: string;
    abstract_en: string;
    abstract_pt: string;
    publication_date: string;
    published: boolean;
  }
  
  export interface Page {
    slug: string;
    title: string;
    title_en: string;
    title_pt: string;
    body: string;
    body_en: string;
    body_pt: string;
  }

  export type Post = Program | Publication | Page;