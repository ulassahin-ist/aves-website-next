"use client";
export default function PageHero({ eyebrow, title, description, em }) {
  return (
    <div className="page-hero">
      <div className="page-hero-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>
          {title} {em && <div className="gradient-text">{em}</div>}
        </h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
