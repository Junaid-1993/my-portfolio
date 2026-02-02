import type { Project } from "@/types/project";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-primary/20 h-full",
        className,
      )}
    >
      {/* Project Preview Image */}
      <div className="aspect-video w-full overflow-hidden bg-muted border-b border-border">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">No preview available</div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="View Source"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
