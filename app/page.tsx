import CatalogCard from "@/components/CatalogCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1800px] mx-auto p-6 lg:p-8 gap-12 lg:gap-20">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-[350px] xl:w-[450px] flex flex-col gap-10 lg:gap-16 shrink-0 lg:sticky lg:top-8 self-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-balance">
          An independent design and research laboratory, and publisher.
        </h1>

        <nav className="flex flex-col gap-3 items-start">
          <Link
            href="/about"
            className="px-6 py-3 rounded-full bg-neutral-800 text-white hover:bg-accent hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-widest border border-transparent hover:border-black/10 shadow-sm"
          >
            About
          </Link>
          <Link
            href="/article"
            className="px-6 py-3 rounded-full bg-neutral-800 text-white hover:bg-accent hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-widest border border-transparent hover:border-black/10 shadow-sm"
          >
            Article
          </Link>
        </nav>
      </aside>

      {/* Right Content - Grid */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        <CatalogCard
          title="Distill"
          year="2025"
          description="Great ideas start in quiet places, welcome to your private think space with your own team of agents."
          actionText="Create yours today"
          coverType="image"
          coverUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          color="bg-sky-100 text-sky-900"
        />
        <CatalogCard
          title="Research"
          year="2024"
          description="To ignite curiosity, inspire innovation, and expand horizons through understanding and deeper insights into research."
          badgeText="Loved by researchers"
          coverType="image"
          coverUrl="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2670&auto=format&fit=crop"
          color="bg-[#EBE5D9] text-[#4A4433]"
        />
        <CatalogCard
          title="Pile"
          year="2023"
          description="Kindle self-discovery, nurture growth, and broaden understanding through reflection and insight into one's inner landscape."
          actionText="100K+ Users"
          coverType="image"
          coverUrl="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop"
          color="bg-blue-500 text-white"
        />
        <CatalogCard
          title="Mudbook"
          description="From your first wobbly cylinder to gallery-worthy pieces. Capture every step of your pottery process."
          badgeText="Made for potters"
          coverType="image"
          coverUrl="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2670&auto=format&fit=crop"
          color="bg-[#D97743] text-white"
          darkGradient
        />
        <CatalogCard
          title="Signal"
          year="2025"
          description="An intelligent feedback loop—so your product, marketing, and customer success teams stay ahead of the curve."
          actionText="Early access"
          coverType="image"
          coverUrl="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2629&auto=format&fit=crop"
          color="bg-[#0055FF] text-white"
        />
        {/* Empty Placeholder Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[400px] h-full group hover:bg-white/10 transition-colors">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
          </div>
          <span className="text-neutral-500 text-xs tracking-[0.2em] font-bold uppercase group-hover:text-neutral-300 transition-colors">In Production</span>
        </div>
      </div>
    </div>
  );
}
