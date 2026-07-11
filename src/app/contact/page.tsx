import { generateMetadata } from "@/lib/seo";
import { Mail, MessageSquare } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/custom-icons";

export const metadata = generateMetadata({
  title: "Contact",
  description:
    "Get in touch for engineering collaborations, consulting inquiries, or technical discussions. Connect with Otoabasi Daniel Udo (TiTi / Titiess).",
  canonicalPath: "/contact",
});


const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "odanieludo@gmail.com",
    href: "mailto:odanieludo@gmail.com",
    description: "For professional inquiries and collaboration proposals.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Titiess",
    href: "https://github.com/Titiess",
    description: "Open-source contributions and code discussions.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/otoabasi-udo",
    href: "https://www.linkedin.com/in/otoabasi-udo-910400214/",
    description: "Professional network and career opportunities.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]" />
          <div className="dot-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Let&apos;s talk
            <br />
            <span className="gradient-text">engineering.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Interested in working together, discussing a technical problem, or
            just want to connect? Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-4">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={
                ch.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="glass-card glass-card-hover rounded-xl p-6 flex items-start gap-5 group block"
              id={`contact-${ch.label.toLowerCase()}`}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <ch.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  {ch.label}
                </p>
                <p className="text-sm font-medium text-white mb-1 truncate">
                  {ch.value}
                </p>
                <p className="text-xs text-slate-500">{ch.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
