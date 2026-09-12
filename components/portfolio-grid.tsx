"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/projects";
import { DemoBadge } from "./ui";
const filters: [string, "all" | ProjectCategory][] = [["Tutti", "all"], ["Matrimoni", "matrimoni"], ["Fotografia", "fotografia"], ["Film", "film"], ["Drone", "drone"], ["Eventi", "eventi"]];
export function PortfolioGrid({ compact = false }: { compact?: boolean }) { const [active, setActive] = useState<"all" | ProjectCategory>("all"); const shown = useMemo(() => (active === "all" ? projects : projects.filter(p => p.category.includes(active))).slice(0, compact ? 4 : undefined), [active, compact]); return <>{!compact && <div className="filters" role="group" aria-label="Filtra progetti">{filters.map(([label, value]) => <button key={value} onClick={() => setActive(value)} className={active === value ? "active" : ""}>{label}</button>)}</div>}<div className={`portfolio-grid ${compact ? "featured" : ""}`}>{shown.map((p, i) => <Link href={`/portfolio/${p.slug}`} className={`project-card card-${i + 1}`} key={p.slug}><Image src={p.cover} alt={`${p.title}, ${p.location} — immagine stock temporanea`} fill unoptimized sizes={i === 0 ? "(max-width: 768px) 100vw, 65vw" : "(max-width: 768px) 100vw, 35vw"} /><div className="project-shade" /><div className="project-meta"><DemoBadge/><h3>{p.title}</h3><p>{p.location} · {p.year}</p><span>View story <ArrowUpRight size={17}/></span></div></Link>)}</div></>; }
