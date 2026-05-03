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
      {/* ── Main Content Container (White with rounded top corners) ── */}
      <main className="pt-28 pb-24 px-4 md:px-[4%]">
        <div className="bg-white rounded-t-[30px] md:rounded-t-[50px] min-h-screen pt-12 md:pt-16 px-4 md:px-8 shadow-sm">
          
          {/* ── Filter ── */}
          <div className="text-center mb-16">
            <p className="font-century text-xs md:text-sm text-ink-soft tracking-[0.05em]">
              Select: <span className="text-ink hover:text-primary cursor-pointer transition-colors">All</span> | <span className="hover:text-primary cursor-pointer transition-colors">International</span> | <span className="hover:text-primary cursor-pointer transition-colors">Indian</span>
            </p>
          </div>

          {/* ── 4-Column Grid ── */}
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {blogs.map((blog) => (
              <div key={blog.slug} className="flex flex-col">
                <Link to={`/photography/${blog.slug}`} className="block overflow-hidden mb-6">
                  <img 
                    src={blog.heroImage} 
                    alt={blog.couple} 
                    className="w-full h-auto aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="flex flex-col flex-grow">
                  <h2 className="font-display font-bold text-lg md:text-xl text-ink mb-3 leading-tight">
                    <Link to={`/photography/${blog.slug}`} className="hover:text-primary transition-colors">
                      {blog.couple}
                    </Link>
                  </h2>
                  <p className="font-century text-[0.8rem] leading-[1.6] text-ink-soft mb-6 line-clamp-6">
                    {blog.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/photography/${blog.slug}`} 
                      className="inline-block font-century font-bold text-[0.8rem] text-ink hover:text-primary transition-colors mb-4"
                    >
                      Read More →
                    </Link>
                    <p className="font-century text-[0.7rem] text-ink-mute">
                      {blog.location.includes("International") ? "International" : "Indian"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PhotographyListing;
