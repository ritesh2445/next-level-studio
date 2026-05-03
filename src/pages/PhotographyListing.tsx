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

      {/* ── Listing Grid ── */}
      <section className="px-4 md:px-[8%] pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24 md:gap-x-16">
          {blogs.map((blog) => (
            <div key={blog.slug} className="flex flex-col group">
              <Link to={`/photography/${blog.slug}`} className="block overflow-hidden mb-6">
                <img 
                  src={blog.heroImage} 
                  alt={blog.couple} 
                  className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="text-center">
                <h2 className="font-didot text-3xl md:text-4xl text-ink mb-2">
                  <Link to={`/photography/${blog.slug}`} className="hover:text-primary transition-colors">
                    {blog.couple}
                  </Link>
                </h2>
                <p className="font-century text-[0.7rem] md:text-sm tracking-[0.15em] uppercase text-ink-mute mb-6">
                  {blog.location} · {blog.date}
                </p>
                <Link 
                  to={`/photography/${blog.slug}`} 
                  className="inline-block border-b border-ink pb-1 font-sans text-[0.7rem] tracking-[0.2em] uppercase text-ink hover:text-primary hover:border-primary transition-colors"
                >
                  Read More
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
