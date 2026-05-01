import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/strapi";
import ReactMarkdown from "react-markdown";

async function getArticle(slug: string) {
  try {
    const res = await fetchAPI('/articles', {
      filters: { slug: { $eq: slug } },
      populate: ['category', 'author', 'blocks', 'cover'],
    });
    return res.data?.[0];
  } catch (error) {
    console.error("Error fetching article", error);
    return null;
  }
}

// Simple block renderer
function BlockRenderer({ blocks }: { blocks: any[] }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => {
        if (block.__component === 'shared.rich-text') {
          return (
            <div
              key={index}
              className="prose prose-invert max-w-none"
            >
              <ReactMarkdown>{block.body}</ReactMarkdown>
            </div>
          );
        }
        if (block.__component === 'shared.quote') {
          return (
            <blockquote key={index}>
              <p>{block.title || block.body}</p>
              {block.author && <cite>- {block.author}</cite>}
            </blockquote>
          );
        }
        if (block.__component === 'shared.media' && block.file) {
          const url = block.file.url.startsWith('http') ? block.file.url : `${process.env.STRAPI_URL || 'http://localhost:1337'}${block.file.url}`;
          return (
            <figure key={index} className="my-8">
              <img src={url} alt={block.file.alternativeText || ''} className="w-full rounded-xl" />
            </figure>
          );
        }
        // Fallback for unknown blocks
        return null;
      })}
    </>
  );
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const { title, publishedAt, createdAt, category, blocks } = article;

  const dateObj = new Date(publishedAt || createdAt);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

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
          <span>{formattedDate}</span>
          <span>•</span>
          <span className="text-accent uppercase tracking-widest font-bold">
            {category?.name || category?.title || 'Uncategorized'}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance">
          {title}
        </h1>
      </header>

      {/* Article Content */}
      <div
        className="text-lg leading-relaxed space-y-6 [&>p]:opacity-90 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:my-8 [&>blockquote]:text-neutral-300 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:my-6 [&_strong]:font-bold [&_strong]:text-white [&_a]:text-accent hover:[&_a]:text-white [&_a]:transition-colors"
      >
        {blocks ? (
          <BlockRenderer blocks={blocks} />
        ) : (
          <p className="opacity-70 italic">Content is missing.</p>
        )}
      </div>

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
