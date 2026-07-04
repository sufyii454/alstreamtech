import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import logoAsset from "../assets/alstream-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-background/60 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 ai-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={logoAsset.url} alt="ALStream Tech" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              We design and build AI-powered software, intelligent automation, and custom digital platforms that help
              businesses scale faster and operate smarter.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-primary/20 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 font-semibold text-foreground">Company</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["about", "ai-solutions", "case-studies", "blog", "contact"].map((p) => (
                <li key={p}>
                  <Link to={`/${p}`} className="transition hover:text-primary capitalize">
                    {p.replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-semibold text-foreground">Solutions</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["/services", "Services"],
                ["/ai-solutions", "AI Solutions"],
                ["/industries", "Industries"],
                ["/technologies", "Technologies"],
                ["/process", "Our Process"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-semibold text-foreground">Get in touch</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" /> info@alstreamtech.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" /> +1 (732) 588-7501
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" /> 409 Joyce Kilmer Avenue, Suite 315, New Brunswick, NJ
                08901
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} ALStream Tech Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
