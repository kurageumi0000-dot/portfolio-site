"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close menu on resize (optional but good practice)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { href: "/", label: "実績（Original）" },
        { href: "/fanart", label: "ファンアート" },
        { href: "/about", label: "プロフィール" },
        { href: "/commission", label: "ご依頼について" },
        { href: "/contact", label: "お問い合わせ" },
        { href: "/links", label: "リンク集" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 text-slate-800">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-2xl font-black tracking-tighter transition-all group-hover:tracking-normal text-slate-900">
                        海音くらげ
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm font-bold">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="relative py-2 hover:text-accent-blue transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent-blue after:transition-all hover:after:w-full"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors active:scale-95"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Dropdown */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 right-6 w-56 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl overflow-hidden py-2 animate-in fade-in zoom-in duration-200 origin-top-right">
                        <nav>
                            <ul className="flex flex-col">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="block px-6 py-4 text-sm font-bold tracking-widest text-slate-600 hover:text-accent-blue hover:bg-slate-50 transition-all border-b border-slate-100 last:border-0"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
