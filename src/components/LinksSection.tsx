import { Twitter, Mail, ExternalLink, PenTool, ShoppingCart, MessageSquare } from "lucide-react";

const links = [
    {
        title: "X (Twitter)",
        url: "https://x.com",
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
        color: "hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200"
    },
    {
        title: "Pixiv",
        url: "https://pixiv.net",
        icon: <PenTool size={20} />,
        color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
    },
    {
        title: "Portfolio",
        url: "/works",
        icon: <ExternalLink size={20} />,
        color: "hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
    },
    {
        title: "Skeb",
        url: "https://skeb.jp",
        icon: <ShoppingCart size={20} />,
        color: "hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
    },
    {
        title: "Contact",
        url: "/contact",
        icon: <MessageSquare size={20} />,
        color: "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
    }
];

export default function LinksSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4 opacity-30 uppercase">
                        Outer Links
                    </h3>
                    <div className="h-1 w-12 bg-accent-blue mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 animate-fade-in-up">
                    {links.map((link) => (
                        <a
                            key={link.title}
                            href={link.url}
                            target={link.url.startsWith("/") ? "_self" : "_blank"}
                            rel={link.url.startsWith("/") ? "" : "noopener noreferrer"}
                            className={`group flex items-center gap-4 px-6 py-5 rounded-2xl border border-slate-100 bg-slate-50/30 transition-all duration-500 shadow-sm ${link.color} hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]`}
                        >
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                {link.icon}
                            </div>
                            <span className="font-bold text-sm tracking-widest uppercase">
                                {link.title}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
