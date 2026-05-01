import Link from "next/link";

interface CatalogCardProps {
  title: string;
  year?: string;
  description: string;
  link?: string;
  coverType?: 'image' | 'video';
  coverUrl?: string;
  badgeText?: string;
  actionText?: string;
  color?: string;
  darkGradient?: boolean;
}

export default function CatalogCard({
  title,
  year,
  description,
  link = "#",
  coverType = 'image',
  coverUrl,
  badgeText,
  actionText,
  color = "bg-neutral-800 text-white",
  darkGradient = false
}: CatalogCardProps) {
  return (
    <Link 
      href={link} 
      className={`block relative rounded-3xl overflow-hidden group h-[400px] flex flex-col transition-transform hover:-translate-y-2 duration-500 ease-out ${color}`}
    >
      {/* Background Media */}
      {coverUrl && coverType === 'image' && (
        <img 
          src={coverUrl} 
          alt={title} 
          className="object-cover absolute inset-0 w-full h-full z-0 mix-blend-overlay opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      )}
      {coverUrl && coverType === 'video' && (
        <video 
          src={coverUrl} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover absolute inset-0 z-0 w-full h-full mix-blend-overlay opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      )}

      {/* Gradient overlay for readability if needed */}
      {darkGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
      )}

      <div className="relative z-20 flex flex-col h-full p-6 md:p-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-sm">
               {/* Icon placeholder based on title */}
               <div className="w-6 h-6 bg-current rounded-md opacity-90 shadow-inner flex items-center justify-center font-bold text-xs">
                 {title.charAt(0)}
               </div>
             </div>
             <div>
               <h3 className="font-bold text-xl tracking-tight leading-tight">{title}</h3>
               {year && <p className="text-sm opacity-80 font-medium">{year}</p>}
             </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 -translate-y-1">
            <span className="text-base font-bold">↗</span>
          </div>
        </div>

        <div className="mt-auto pt-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          <p className="text-base font-medium leading-relaxed mb-6 text-balance opacity-90 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {actionText && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-semibold shadow-sm hover:bg-white/30 transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-current shadow-sm"></span>
                {actionText}
              </span>
            )}
            {badgeText && (
              <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-current/30 text-sm font-semibold opacity-90 backdrop-blur-sm">
                {badgeText}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
