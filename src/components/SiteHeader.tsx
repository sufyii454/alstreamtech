import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Github, Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "../assets/alstream-logo.png.asset.json";

const nav: Array<{ to: string; label: string; dropdown?: { to: string; label: string }[] }> = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About Us",
    dropdown: [
      { to: "/why-us", label: "Why Choose Us" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    to: "/services",
    label: "Our Services",
    dropdown: [
      { to: "/services#quick-overview", label: "Quick Overview" },
      { to: "/services#key-benefits", label: "Key Benefits" },
      { to: "/services#technologies", label: "Technologies" },
      { to: "/services#industry-applications", label: "Industry Applications" },
    ],
  },
  { to: "/case-studies", label: "Case Studies" },
  {
    to: "/ai-solutions",
    label: "AI Solutions",
    dropdown: [
      { to: "/ai-solutions#showcase", label: "AI Solution Showcase" },
      { to: "/industries", label: "Industries" },
      { to: "/technologies", label: "Technologies" },
      { to: "/process", label: "Process" },
    ],
  },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top icon bar */}
      <div className="hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+17325887501" className="flex items-center gap-2 transition hover:text-primary">
              <Phone className="h-3.5 w-3.5 text-primary" /> +1 (732) 588-7501
            </a>
            <a href="mailto:info@alstreamtech.com" className="flex items-center gap-2 transition hover:text-primary">
              <Mail className="h-3.5 w-3.5 text-primary" /> info@alstreamtech.com
            </a>
            <span className="hidden items-center gap-2 xl:flex">
              <MapPin className="h-3.5 w-3.5 text-primary" /> 409 Joyce Kilmer Ave, Suite 315, New Brunswick, NJ 08901
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" /> Mon–Fri · 9am – 7pm
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="transition hover:text-primary">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:text-primary">
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="GitHub" className="transition hover:text-primary">
              <Github className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-all duration-300 ease ${scrolled ? "bg-white/12 backdrop-blur-[12px] border-b border-white/15" : "bg-transparent border-b border-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative flex h-10 items-center justify-center !bg-transparent !shadow-none !border-none !p-0">
              <img src={logoAsset.url} alt="ALStream Tech" className="h-9 w-auto" />
            </div>
            <div className="leading-tight sr-only">
              <div className="font-display text-lg font-bold tracking-tight">ALStream Tech</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-foreground/80 transition hover:bg-white/5 hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.dropdown && (
                  <div className="invisible absolute left-0 top-full mt-1 w-64 rounded-xl border border-white/10 bg-popover/95 p-2 opacity-0 shadow-elegant backdrop-blur-xl transition-all group-hover:visible group-hover:opacity-100">
                    {item.dropdown.map((d) => (
                      <a
                        key={d.to}
                        href={d.to}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
                      >
                        {d.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105 md:inline-block"
            >
              Book a Call
            </Link>
            <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/5 bg-background/95 px-6 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm hover:bg-white/5 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-brand px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Book a Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
