"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * ProductStickyBar
 * Slides in from the top once the hero section scrolls out of view.
 *
 * Props:
 *   model       string   e.g. "RC210"
 *   title       string   e.g. "Akıllı POE Kart Okuyucu"
 *   image       string   image src (same as hero)
 *   pdfHref     string   optional — shows Datasheet button when provided
 *   heroRef     ref      ref attached to the hero <section> — bar shows when hero leaves viewport
 */
export default function ProductStickyBar({
  model,
  title,
  image,
  pdfHref,
  heroRef,
}) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hero = heroRef?.current;
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" }, // accounts for sticky header height
    );

    io.observe(hero);
    return () => io.disconnect();
  }, [heroRef]);

  return (
    <div
      className={`psb-bar${visible ? " psb-bar--visible" : ""}`}
      aria-hidden={!visible}
    >
      {image && <img className="psb-img" src={image} alt={model} />}
      <span className="psb-model">{model}</span>
      <div className="psb-sep" />
      <span className="psb-title">{title}</span>
      <div className="psb-actions">
        <button
          className="psb-btn-ghost"
          onClick={() => router.push("/contact")}
        >
          Teklif Al →
        </button>
        {pdfHref && (
          <a
            className="psb-btn-primary"
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Datasheet
          </a>
        )}
      </div>
    </div>
  );
}
