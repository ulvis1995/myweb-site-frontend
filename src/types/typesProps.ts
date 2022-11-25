import { About, News, Project } from './typesApi';

export interface CreateAboutProps {
  aboutId?: string | null;
  chooseAbout?: About;
  children: string;
  handleEdit?: (id: string | null) => void;
}

export interface CreateNewsProps {
  newsId?: string | null;
  chooseNews?: News;
  children: string;
  handleEdit?: (id: string | null) => void;
}

export interface CreatePortfolioProps {
  portfolioId?: string | null;
  chooseProject?: Project;
  children: string;
  handleEdit?: (id: string | null) => void;
}

export interface ControlButtonsProps {
  handleEdit: (id: string) => void;
  id: string;
  type: string;
}

export interface NewsProps {
  title: string;
  text: string;
  imgUrl: string | null;
  date: string;
}

export interface MenuPopupProps {
  clickDrawer: () => void;
  open: boolean;
}

export interface PortfolioBlockProps {
  portfolio?: Project[];
  type?: string;
}

export interface PortfolioCardProps {
  name: string;
  gitUrl: string;
  deploy: string | null;
  description: string;
  imgUrl: string | null;
  technology: string[];
}

export interface AboutItemProps {
  item: About[];
}
