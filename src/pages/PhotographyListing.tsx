import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { photographyBlogs } from "@/data/photographyBlogs";

const PhotographyListing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = Object.values(photographyBlogs);

  return (
    <div className="min-h-screen bg-[#f5f0e9]">
      <Navbar />
      
      {/* ── Header ── */}
      <section className="pt-32 pb-16 px-6 md:pt-48 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="label-row justify-center mb-6">
            <span className="label-dash" />
            <span className="label-text">Portfolio</span>
            <span className="label-dash" />
          </div>
          <h1 className="font-didot text-4xl md:text-7xl text-ink">
            Photography
          </h1>
        </div>
      </section>

      {/* ── Listing Feed ── */}
      <section className="px-4 md:px-[8%] pb-24">
        <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
          {blogs.map((blog) => (
            <div key={blog.slug} className="flex flex-col">
              <Link to={`/photography/${blog.slug}`} className="block overflow-hidden mb-8">
                <img 
                  src={blog.heroImage} 
                  alt={blog.couple} 
                  className="w-full h-auto max-h-[85vh] object-cover hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="max-w-3xl">
                <div className="flex gap-4 mb-4">
                  <span className="font-century text-[10px] tracking-[0.2em] uppercase text-ink-mute">
                    {blog.location.includes("International") ? "International" : "Indian"}
                  </span>
                  <span className="font-century text-[10px] tracking-[0.2em] uppercase text-ink-mute">
                    Intimate
                  </span>
                </div>
                <h2 className="font-didot text-3xl md:text-5xl text-ink mb-6">
                  <Link to={`/photography/${blog.slug}`} className="hover:text-primary transition-colors">
                    {blog.couple}
                  </Link>
                </h2>
                <p className="font-century text-base md:text-lg leading-relaxed text-ink-soft mb-8">
                  {blog.description}
                </p>
                <Link 
                  to={`/photography/${blog.slug}`} 
                  className="inline-block font-sans text-[0.8rem] tracking-[0.1em] text-ink hover:text-primary transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotographyListing;
