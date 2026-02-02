export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  imageUrl: string | null;
  isFeatured: boolean;
  category: "highlighted" | "experiment" | "freelance";
};
