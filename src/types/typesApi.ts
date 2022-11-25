export interface AboutType {
  id: string;
  title: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
}

export interface ContactsType {
  id: string;
  header: string;
}

export interface Project {
  id: string;
  name: string;
  gitUrl: string;
  deploy: string | null;
  description: string;
  imgUrl: string | null;
  technology: string[];
  is_best_work: boolean;
  type_project_id?: string;
  type?: { id: string; title: string; description: string };
}

export interface News {
  id: string;
  title: string;
  text: string;
  imgUrl: string | null;
  date: string;
}

export interface About {
  id: string;
  text: string;
  type_about_id?: string;
  type?: { id: string; title: string };
}

export interface UserState {
  user: {
    email: string;
    exp: number | null;
    iat: number | null;
    id: string;
    role: string;
  };
  isAdmin: boolean;
  token: string;
  error: string | undefined;
}
