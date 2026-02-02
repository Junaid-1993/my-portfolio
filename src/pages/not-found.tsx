import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-24">
        <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link href="/" className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
          Return Home
        </Link>
      </div>
    </Layout>
  );
}
