import { projects } from "@/data/projects";
import { Layout, PageTransition } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const highlighted = projects?.filter((p) => p.category === "highlighted") || [];
  const experiments = projects?.filter((p) => p.category === "experiment") || [];
  const freelance = projects?.filter((p) => p.category === "freelance") || [];

  return (
    <Layout>
      <PageTransition>
        <div className="py-12 md:py-16 space-y-24">
          {/* Highlighted Projects */}
          <section>
            <div className="max-w-2xl mb-12">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Highlighted Projects</h1>
              <p className="text-lg text-muted-foreground">
                Production-ready applications demonstrating modern frontend architecture, state management, and user-focused design.
              </p>
            </div>

            {/* {isLoading ? (
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video rounded-xl bg-muted animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {highlighted.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )} */}

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {highlighted.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Experiments & Small Builds */}
          <section>
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Experiments & Small Builds</h2>
              <p className="text-lg text-muted-foreground">
                Smaller frontend experiments, UI components, and interaction demos built while exploring new ideas and refining core skills.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiments.map((project) => (
                <div key={project.id} className="p-6 rounded-xl border border-border bg-card/50 flex flex-col h-full">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      View on CodePen <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Freelance Work */}
          <section>
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Selected Freelance Work</h2>
              <p className="text-lg text-muted-foreground">
                A selection of frontend projects delivered for international clients, focusing on usability, responsiveness, and clean UI
                implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {freelance.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
}
