import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function Navigation() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/resume.pdf", label: "Resume", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/40">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Junaid<span className="text-muted-foreground">Ali</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden sm:flex items-center gap-6">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm font-medium transition-colors text-muted-foreground",
                    link.label === "Resume" ? "hover:text-primary" : "hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    location === link.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav bar (simple version) */}
      <div className="sm:hidden border-t border-border/40 flex justify-around py-3 bg-background/95 backdrop-blur">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors text-muted-foreground"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={cn("text-xs font-medium transition-colors", location === link.href ? "text-foreground" : "text-muted-foreground")}
            >
              {link.label}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
}
