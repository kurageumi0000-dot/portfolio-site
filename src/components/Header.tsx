"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "WORKS" },
        { href: "/about", label: "ABOUT" },
        { href: "/contact", label: "CONTACT" },
        { href: "/links", label: "LINKS" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/10 text-white">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tighter transition-all group-hover:tracking-normal">
                        PORTFOLIO
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="relative py-2 hover:text-gray-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-20 bg-gray-950 z-40 transition-all duration-300 ease-in-out">
                    <nav className="container mx-auto px-6 py-12">
                        <ul className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-bold tracking-tighter border-b border-white/5 pb-4 block"
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
        </header>
    );
}
