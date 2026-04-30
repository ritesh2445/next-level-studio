
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { photographyBlogs } from "@/data/photographyBlogs";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PhotographyBlog = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? photographyBlogs[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0e9]">
        <div className="text-center">
          <h1 className="font-didot text-2xl mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0e9]">
      <Navbar />
      
      {/* ── Intro Section ── */}
      <section className="pt-32 pb-16 px-6 md:pt-48 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-didot text-4xl md:text-7xl mb-8 md:mb-12 text-ink">
            {blog.couple}.
          </h1>
          <p className="font-didot text-lg md:text-2xl leading-relaxed text-ink-soft mb-12 md:mb-16 max-w-2xl mx-auto">
            {blog.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {blog.credits.map((credit) => (
              <div key={credit.label} className="text-center">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-mute mb-1">
                  {credit.label}
                </p>
                <p className="font-didot text-base text-ink">
                  {credit.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Grid ── */}
      <section className="px-4 md:px-[8%] pb-24">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-12">
          {/* We'll loop through the images and render them based on type */}
          {/* For this simplified demo, we'll group split images into rows */}
          {(() => {
            const elements: JSX.Element[] = [];
            let i = 0;
            while (i < blog.images.length) {
              const img = blog.images[i];
              if (img.type === 'full') {
                elements.push(
                  <div key={i} className="w-full overflow-hidden">
                    <img 
                      src={img.url} 
                      alt="" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                );
                i++;
              } else if (img.type === 'split') {
                const nextImg = blog.images[i + 1];
                if (nextImg && nextImg.type === 'split') {
                  elements.push(
                    <div key={i} className="grid grid-cols-2 gap-4 md:gap-12">
                      <div className="overflow-hidden">
                        <img 
                          src={img.url} 
                          alt="" 
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <img 
                          src={nextImg.url} 
                          alt="" 
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                  i += 2;
                } else {
                  // Fallback if only one split image remains
                  elements.push(
                    <div key={i} className="w-1/2 mx-auto overflow-hidden">
                      <img 
                        src={img.url} 
                        alt="" 
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  );
                  i++;
                }
              }
            }
            return elements;
          })()}
        </div>
      </section>

      {/* ── Pagination ── */}
      {blog.nextPost && (
        <section className="border-t border-ink/10 py-16 px-6 bg-white/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-ink-mute hover:text-ink transition-colors">
              <ArrowLeft size={20} strokeWidth={1.5} />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase">Previous</span>
            </Link>
            
            <Link to={`/photography/${blog.nextPost.slug}`} className="group flex flex-col items-end text-right">
              <div className="flex items-center gap-3 text-ink mb-2">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase">Next Post</span>
                <ArrowRight size={20} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-didot text-2xl md:text-5xl text-ink group-hover:italic transition-all">
                {blog.nextPost.name}
              </h4>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default PhotographyBlog;
