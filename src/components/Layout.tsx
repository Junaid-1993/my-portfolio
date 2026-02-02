import { Navigation } from "./Navigation";
import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
      <footer className="py-8 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Junaid Ali • Frontend Engineer</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
