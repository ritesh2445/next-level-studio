
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-didot text-2xl mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* ── Intro Section ── */}
      <section className="pt-32 pb-16 px-6 md:pt-48 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-didot text-4xl md:text-7xl mb-8 md:mb-12 text-ink">
            {blog.couple}.
          </h1>
          <p className="font-century text-lg md:text-xl leading-relaxed text-ink-soft mb-12 md:mb-16 max-w-2xl mx-auto">
            {blog.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {blog.credits.map((credit) => (
              <div key={credit.label} className="text-center">
                <p className="font-century text-[10px] tracking-[0.2em] uppercase text-ink-mute mb-1">
                  {credit.label}
                </p>
                <p className="font-century text-base text-ink">
                  {credit.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Grid ── */}
      <section className="px-2 md:px-[5%] pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {blog.images.map((img, i) => (
              <div key={i} className="overflow-hidden flex justify-center aspect-[4/5] bg-background">
                <img 
                  src={img.url} 
                  alt="" 
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pagination ── */}
      {blog.nextPost && (
        <section className="border-t border-ink/10 py-16 px-6 bg-white/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/photography" className="flex items-center gap-3 text-ink-mute hover:text-ink transition-colors">
              <ArrowLeft size={20} strokeWidth={1.5} />
              <span className="font-century text-[10px] tracking-[0.2em] uppercase">Return to Portfolio</span>
            </Link>
            
            <Link to={`/photography/${blog.nextPost.slug}`} className="group flex flex-col items-end text-right">
              <div className="flex items-center gap-3 text-ink mb-2">
                <span className="font-century text-[10px] tracking-[0.2em] uppercase">Next Post</span>
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
