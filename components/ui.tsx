"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) { const reduce = useReducedMotion(); return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 32 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>; }
export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }
export function TextLink({ href, children, inverse = false }: { href: string; children: ReactNode; inverse?: boolean }) { return <Link href={href} className={`text-link${inverse ? " inverse" : ""}`}>{children}<ArrowUpRight size={16} strokeWidth={1.5} /></Link>; }
export function DemoBadge() { return <span className="demo-badge">Progetto demo</span>; }
