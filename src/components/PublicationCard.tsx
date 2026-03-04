"use client";

import * as React from "react";
import type { Publication } from "@/data/publications";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function PublicationCard({ p }: { p: Publication }) {
    const [showAbstract, setShowAbstract] = React.useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-morphism rounded-2xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
        >
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-[280px]">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                            {p.venue.type}
                        </span>
                        {p.doi && (
                            <span className="text-xs text-zinc-500 font-mono">
                                DOI: {p.doi}
                            </span>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {p.title}
                    </h3>

                    <div className="mt-3 text-base text-zinc-400 flex flex-wrap gap-x-2">
                        {p.authors.map((a, i) => (
                            <span key={a.name} className="flex items-center">
                                <span className={cn(
                                    "transition-colors",
                                    a.isYou ? "text-white font-semibold underline underline-offset-4 decoration-blue-500/50" : "text-zinc-400"
                                )}>
                                    {a.name}
                                </span>
                                {a.affiliation && <span className="text-xs ml-1 opacity-60">({a.affiliation})</span>}
                                {i < p.authors.length - 1 && <span className="ml-2">,</span>}
                            </span>
                        ))}
                    </div>

                    <div className="mt-3 text-base text-zinc-500 flex items-center gap-2 flex-wrap">
                        <BookOpen size={16} className="text-blue-400/60" />
                        <span className="italic">{p.venue.name}</span>
                        {p.venue.volume && <span>• Vol. {p.venue.volume}</span>}
                        {p.venue.issue && <span>• Issue {p.venue.issue}</span>}
                        {p.venue.month && p.venue.year && (
                            <span className="font-medium text-zinc-400">
                                • {p.venue.month} {p.venue.year}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                    {p.links?.doi && (
                        <a
                            href={p.links.doi}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400 transition-all"
                        >
                            <ExternalLink size={14} />
                            DOI
                        </a>
                    )}
                    {p.links?.publisherIssue && (
                        <a
                            href={p.links.publisherIssue}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400 transition-all"
                        >
                            <FileText size={14} />
                            Issue Page
                        </a>
                    )}
                </div>
            </div>

            {(p.keywords?.length || p.tools?.length) && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {p.keywords?.map((k) => (
                        <span key={k} className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-zinc-500 border border-white/5">
                            {k}
                        </span>
                    ))}
                    {p.tools?.map((t) => (
                        <span key={t} className="px-2 py-1 bg-blue-500/5 rounded-md text-[10px] text-blue-400/70 border border-blue-500/10">
                            {t}
                        </span>
                    ))}
                </div>
            )}

            {p.abstract && (
                <div className="mt-6 border-t border-white/5 pt-4">
                    <button
                        type="button"
                        onClick={() => setShowAbstract((v) => !v)}
                        className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
                    >
                        {showAbstract ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        {showAbstract ? "Hide Abstract" : "Show Abstract"}
                    </button>

                    {showAbstract && (
                        <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-4 text-base leading-relaxed text-zinc-400 bg-black/20 p-4 rounded-xl border border-white/5"
                        >
                            {p.abstract}
                        </motion.p>
                    )}
                </div>
            )}

            {(p.citation?.apa || p.citation?.ieee) && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {p.citation.apa && (
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 group/citation">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 group-hover/citation:text-blue-400 transition-colors">APA Citation</div>
                            <div className="text-sm text-zinc-400 italic leading-relaxed">{p.citation.apa}</div>
                        </div>
                    )}
                    {p.citation.ieee && (
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 group/citation">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 group-hover/citation:text-purple-400 transition-colors">IEEE Citation</div>
                            <div className="text-sm text-zinc-400 leading-relaxed font-mono tracking-tighter">{p.citation.ieee}</div>
                        </div>
                    )}
                </div>
            )}
        </motion.article>
    );
}
