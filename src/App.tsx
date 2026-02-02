import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/theme-provider";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Router />
    </ThemeProvider>
  );
}

export default App;
