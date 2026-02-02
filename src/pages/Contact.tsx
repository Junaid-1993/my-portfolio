import { Layout, PageTransition } from "@/components/Layout";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <PageTransition>
        <div className="py-12 md:py-20 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">
            I'm open to frontend opportunities and technical discussions with product-focused teams. Feel free to reach out if you'd like to
            talk about a role or my work.
          </p>

          <div className="grid gap-6 md:gap-8 justify-center">
            <ContactLink
              href="mailto:junaidali9001@gmail.com"
              icon={<Mail className="w-6 h-6" />}
              label="junaidali9001@gmail.com"
              subLabel="Email"
            />

            <ContactLink
              href="https://github.com/Junaid-1993"
              icon={<Github className="w-6 h-6" />}
              label="github.com/Junaid-1993"
              subLabel="GitHub"
            />

            <ContactLink
              href="https://www.linkedin.com/in/junaidalidev"
              icon={<Linkedin className="w-6 h-6" />}
              label="linkedin.com/in/junaidalidev"
              subLabel="LinkedIn"
            />
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
}

function ContactLink({ href, icon, label, subLabel }: { href: string; icon: React.ReactNode; label: string; subLabel: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-6 p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all text-left w-full md:w-96 mx-auto"
    >
      <div className="p-4 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{subLabel}</div>
        <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors break-all">{label}</div>
      </div>
    </a>
  );
}
