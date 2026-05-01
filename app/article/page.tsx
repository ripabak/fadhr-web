import Link from "next/link";

// Dummy data for articles
const articles = [
  {
    slug: "future-of-agentic-design",
    title: "The Future of Agentic Design in Web Interfaces",
    category: "Design",
    date: "May 1, 2026",
    excerpt: "Exploring how autonomous agents are reshaping the way we think about user interfaces and interactive experiences on the web."
  },
  {
    slug: "brutalism-and-accessibility",
    title: "Brutalism & Accessibility: Can They Coexist?",
    category: "Research",
    date: "Apr 24, 2026",
    excerpt: "An in-depth look at implementing WCAG standards within raw, minimalist, and brutalist design systems without compromising aesthetic integrity."
  },
  {
    slug: "color-theory-in-dark-mode",
    title: "Color Theory in High-Contrast Dark Modes",
    category: "Design",
    date: "Apr 15, 2026",
    excerpt: "Why specific shades of yellow and orange provide optimal cognitive load reduction when paired with deep black backgrounds."
  },
  {
    slug: "building-fadhr-labs",
    title: "Building FADHR LABS: Our Tech Stack",
    category: "Engineering",
    date: "Mar 30, 2026",
    excerpt: "A deep dive into the technologies powering our new platform, focusing on Next.js, Server Components, and modular architecture."
  },
  {
    slug: "typography-for-readability",
    title: "Typography Choices for Maximum Readability",
    category: "Design",
    date: "Mar 12, 2026",
    excerpt: "How font pairing, line height, and tracking influence reading comprehension in long-form digital content."
  }
];

export default function ArticleListPage() {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto p-6 lg:p-12 gap-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase">Articles</h1>
          <p className="text-lg opacity-70 mt-4 max-w-xl">
            Latest thoughts, research, and technical insights from the FADHR LABS team.
          </p>
        </div>
      </div>

      {/* Main Content: Sidebar (Filters) + List */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-48 shrink-0 flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Categories</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <button className="text-accent font-bold hover:text-white transition-colors">All Categories</button>
              </li>
              <li>
                <button className="text-neutral-400 hover:text-white transition-colors">Design</button>
              </li>
              <li>
                <button className="text-neutral-400 hover:text-white transition-colors">Research</button>
              </li>
              <li>
                <button className="text-neutral-400 hover:text-white transition-colors">Engineering</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Sort By</h3>
            <select className="w-full bg-neutral-900 border border-neutral-800 text-white p-2 rounded-md focus:outline-none focus:border-accent">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </aside>

        {/* Article List */}
        <div className="flex-grow flex flex-col gap-0">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={`/article/${article.slug}`}
              className="group py-8 border-b border-border last:border-0 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-white/[0.02] transition-colors -mx-6 px-6 md:mx-0 md:px-0 rounded-lg"
            >
              <div className="w-full md:w-32 shrink-0 pt-1">
                <p className="text-sm text-neutral-500 font-mono">{article.date}</p>
                <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider text-accent border border-accent/30 rounded-full px-2 py-0.5">
                  {article.category}
                </span>
              </div>
              <div className="flex-grow flex flex-col gap-3">
                <h2 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-lg opacity-80 leading-relaxed text-balance">
                  {article.excerpt}
                </p>
                <span className="text-sm font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-accent">
                  Read Article ↗
                </span>
              </div>
            </Link>
          ))}

          {/* Pagination */}
          <div className="flex justify-center md:justify-start gap-2 mt-12 pt-8 border-t border-border">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-white opacity-50 cursor-not-allowed">
              &larr;
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-black font-bold">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-accent hover:text-black transition-colors">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
