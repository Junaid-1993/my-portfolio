import { Layout, PageTransition } from "@/components/Layout";
import { Code, GitBranch, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <PageTransition>
        <div className="py-12 md:py-16 grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">About Me</h1>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground space-y-6">
                <p>
                  I started my web development journey in 2017 through online learning platforms, teaching myself the fundamentals of HTML,
                  CSS, and JavaScript. What began as curiosity gradually turned into a long-term commitment to understanding how the web
                  works and how to build interfaces that are both functional and user-friendly.
                </p>
                <p>
                  Over the years, I followed a self-directed learning path that emphasized depth over shortcuts. I spent extensive time
                  learning from MDN Web Docs, freeCodeCamp, and official React and Next.js documentation, focusing on web standards,
                  accessibility, performance, and maintainable code. The MDN learning modules, in particular, played a major role in shaping
                  how I think about frontend development—not just writing code, but understanding why things work the way they do.
                </p>
                <p>
                  While working through MDN’s documentation and learning materials, I discovered gaps and issues in the content and began
                  contributing back by reporting problems, opening pull requests, and participating in discussions. Several of these
                  contributions were merged, giving me hands-on experience working within real-world open-source workflows and collaborating
                  through GitHub.
                </p>
                <p>
                  Alongside learning, I consistently built real-world projects to apply what I was studying. These include production-ready
                  React and Next.js applications such as a game discovery platform, an issue tracker, a financial dashboard, and other
                  frontend-focused tools. Through these projects, I developed strong experience with component-driven UI architecture, state
                  management, REST API–driven interfaces, authentication flows, and performance optimization.
                </p>
                <p>
                  In parallel, I worked as a freelance frontend developer, delivering over 40 projects for international clients. This
                  experience helped me strengthen practical skills such as translating requirements into clean UI solutions, building
                  responsive and accessible interfaces, managing projects independently, and communicating effectively with clients across
                  different time zones.
                </p>
                <p>
                  Today, I focus on building robust, maintainable frontend applications with a product-first mindset. I care deeply about
                  clean code, accessibility, performance, and thoughtful user experiences, and I’m actively seeking a frontend role where I
                  can contribute to meaningful products while continuing to grow as an engineer within a collaborative team.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h2 className="text-xl font-semibold mb-6">Core Philosophies</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Philosophy
                  icon={<Code className="w-5 h-5" />}
                  title="Clean & Maintainable Code"
                  desc="I write code with readability and long-term maintainability in mind, prioritizing clear structure, naming, and consistency."
                />
                <Philosophy
                  icon={<Lightbulb className="w-5 h-5" />}
                  title="Accessibility by Default"
                  desc="I aim to build interfaces that are usable by everyone, following web standards and accessibility best practices from the start."
                />
                <Philosophy
                  icon={<GitBranch className="w-5 h-5" />}
                  title="Performance & User Experience"
                  desc="I focus on fast, responsive interfaces and thoughtful interactions that improve real user experiences."
                />
              </div>
            </div>
          </div>

          <aside className="space-y-8 lg:border-l lg:border-border lg:pl-10 h-fit">
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "ShadCn",
                  "Framer Motion",
                  "Node.js",
                  "Express.js",
                  "MySQL",
                  "MongoDB",
                  "REST APIs",
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Tools & Workflow</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>VS Code</li>
                <li>Git & GitHub</li>
                <li>Chrome DevTools</li>
                <li>Vite</li>
                <li>Figma</li>
                <li>Postman</li>
                <li>AI Tools</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Elsewhere</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a
                    href="https://github.com/Junaid-1993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/junaidalidev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:junaidali9001@gmail.com
"
                    className="hover:text-foreground transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </PageTransition>
    </Layout>
  );
}

function Philosophy({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">{icon}</div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}
