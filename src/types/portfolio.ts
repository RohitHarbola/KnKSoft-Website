export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  logo?: string;
  bgColor?: string;
  platforms: string[];
  country: {
    name: string;
    flag: string;
  };
  downloads?: string;
  appLinks: {
    appStore?: string;
    playStore?: string;
  };
}

export interface Category {
  id: string;
  name: string;
} 