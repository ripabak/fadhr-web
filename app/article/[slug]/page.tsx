import Link from "next/link";
import { notFound } from "next/navigation";

// Dummy data fetching
const getArticle = (slug: string) => {
  const articles: Record<string, any> = {
    "future-of-agentic-design": {
      title: "The Future of Agentic Design in Web Interfaces",
      category: "Design",
      date: "May 1, 2026",
      content: `
        <p>As we move further into the decade, the concept of agentic design is shifting from theoretical framework to practical application. User interfaces are no longer static canvases; they are becoming proactive partners in the user journey.</p>
        
        <h2>The Shift to Proactive Interfaces</h2>
        <p>Traditional web design relies heavily on user initiation. A user clicks a button, a system responds. Agentic design flips this paradigm. By anticipating needs and presenting solutions before they are explicitly requested, we reduce cognitive load and streamline workflows.</p>
        
        <blockquote>"The best interface is no interface, but the second best is an interface that already knows what you want."</blockquote>
        
        <h2>Implementing Agentic Principles</h2>
        <p>To implement these principles effectively, designers must focus on:</p>
        <ul>
          <li><strong>Contextual Awareness:</strong> Understanding not just who the user is, but what they are trying to achieve in this specific moment.</li>
          <li><strong>Subtle Interventions:</strong> Offering assistance without hijacking the user's control.</li>
          <li><strong>Continuous Learning:</strong> Systems that adapt based on interaction patterns over time.</li>
        </ul>
        
        <p>As we continue to build FADHR LABS, these principles form the core of our design philosophy. We believe that technology should empower, not overwhelm.</p>
      `
    }
  };

  return articles[slug] || {
    title: `Exploring ${slug.replace(/-/g, ' ')}`,
    category: "General",
    date: "Current Date",
    content: "<p>This is placeholder content for the requested article. In a real application, this would be fetched from a CMS or database.</p><p>The minimalist design approach ensures that the focus remains entirely on the content, providing an optimal reading experience free from distractions.</p>"
  };
};

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getArticle(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="flex flex-col w-full max-w-[800px] mx-auto p-6 lg:p-12 gap-12 mt-8 min-h-screen">
      {/* Back link */}
      <div>
        <Link href="/article" className="text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-accent transition-colors flex items-center gap-2">
          &larr; Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="flex flex-col gap-6">
        <div className="flex items-center gap-4 text-sm font-mono text-neutral-400">
          <span>{article.date}</span>
          <span>•</span>
          <span className="text-accent uppercase tracking-widest font-bold">{article.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance">
          {article.title}
        </h1>
      </header>

      {/* Article Content */}
      <div 
        className="text-lg leading-relaxed space-y-6 [&>p]:opacity-90 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:my-8 [&>blockquote]:text-neutral-300 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:my-6 [&_strong]:font-bold [&_strong]:text-white [&_a]:text-accent hover:[&_a]:text-white [&_a]:transition-colors"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>

      {/* Footer / Share */}
      <footer className="mt-12 pt-8 border-t border-border flex justify-between items-center">
        <div className="flex gap-4">
          <button className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
            Share on X
          </button>
          <button className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
            Copy Link
          </button>
        </div>
      </footer>
    </article>
  );
}
