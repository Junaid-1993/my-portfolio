import { projects } from "@/data/projects";
import { Layout, PageTransition } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Code2, Layers, Terminal, Github, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const featuredProjects = projects?.filter((p) => p.isFeatured) || [];

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to new opportunities
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Junaid Ali{" "}
              <span className="text-muted-foreground block text-2xl md:text-3xl lg:text-4xl mt-2 font-medium text-balance">
                Frontend Engineer
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Focused on building accessible and performant web applications, with strong attention to clean UI, maintainable code, and
              modern frontend practices.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <TechBadge icon={<Code2 className="w-4 h-4" />} label="React" />
              {/* <TechBadge icon={<div className="font-bold text-xs italic">Next</div>} label="Next.js" /> */}
              <TechBadge icon={<Zap className="w-4 h-4" />} label="Next.js" />
              <TechBadge icon={<Terminal className="w-4 h-4" />} label="TypeScript" />
              <TechBadge icon={<Layers className="w-4 h-4" />} label="Tailwind" />
            </div>
          </div>

          <div className="relative justify-self-center md:justify-self-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-border rotate-3 transition-transform hover:rotate-0 duration-500">
              {/* Placeholder image for personal photo */}
              {/* Photo by ludovic migneault on Unsplash */}
              <img src="/images/profile/junaidali.webp" alt="Junaid Ali's picture" className="w-full h-full object-cover scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>
            {/* <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl bg-secondary/80 border border-border"></div> */}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24 border-t border-border/40">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured Work</h2>
              <p className="text-muted-foreground mt-2">Selected projects that demonstrate my capabilities.</p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 rounded-xl bg-muted animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.length > 0 ? (
                featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
              ) : (
                <p className="text-muted-foreground col-span-full py-12 text-center border border-dashed rounded-xl">
                  Projects loading or none featured yet.
                </p>
              )}
            </div>
          )} */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
            ) : (
              <p className="text-muted-foreground col-span-full py-12 text-center border border-dashed rounded-xl">
                Projects loading or none featured yet.
              </p>
            )}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-16 md:py-24 border-t border-border/40">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Open Source & Community Contributions</h2>
            <div className="prose prose-neutral dark:prose-invert text-lg leading-relaxed text-muted-foreground space-y-6">
              <p>
                I actively contribute to open-source projects and developer communities, with a focus on improving documentation quality and
                web standards. I’ve contributed to <span className="text-foreground font-medium">MDN Web Docs</span> by reporting issues,
                submitting fixes, and participating in discussions that help improve learning resources used by developers worldwide.
              </p>
              <div className="pt-4">
                <a
                  href="https://github.com/mdn/content/issues?q=is%3Aissue%20state%3Aclosed%20author%3AJunaid-1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Contributions
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
}

function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary/50 border border-border text-sm font-medium">
      {icon}
      <span>{label}</span>
    </div>
  );
}
