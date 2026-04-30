import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import mosaic from "@/assets/mosaic-couple.jpg";
import wedding from "@/assets/wedding-ceremony.jpg";
import fashion from "@/assets/fashion.jpg";
import prewedding from "@/assets/prewedding.jpg";
import heroCouple from "@/assets/hero-couple-arch.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

export interface PhotoBlogData {
  slug: string;
  couple: string;
  date: string;
  location: string;
  description: string;
  credits: { label: string; value: string }[];
  heroImage: string;
  images: { url: string; type: 'full' | 'split' }[];
  nextPost?: { slug: string; name: string };
}

export const photographyBlogs: Record<string, PhotoBlogData> = {
  "reva-zach": {
    slug: "reva-zach",
    couple: "Reva & Zach",
    date: "Oct 7, 2024",
    location: "Udaipur, Rajasthan",
    description: "A celebration of love amidst the regal architecture of Udaipur. Reva and Zach's wedding was a beautiful blend of tradition and modern elegance, captured in the soft morning light of the City Palace.",
    credits: [
      { label: "Planning", value: "The Wedding Co." },
      { label: "Outfits", value: "Sabyasachi" },
      { label: "Makeup", value: "Namrata Soni" }
    ],
    heroImage: b1,
    images: [
      { url: b1, type: 'full' },
      { url: b2, type: 'split' },
      { url: heroCouple, type: 'split' },
      { url: wedding, type: 'full' }
    ],
    nextPost: { slug: "evening-of-love", name: "An Evening of Love" }
  },
  "evening-of-love": {
    slug: "evening-of-love",
    couple: "An Evening of Love",
    date: "Aug 25, 2024",
    location: "Mumbai, Maharashtra",
    description: "An intimate evening ceremony in the heart of Mumbai. The city lights provided a shimmering backdrop for a night filled with laughter, tears, and eternal promises.",
    credits: [
      { label: "Venue", value: "Soho House Mumbai" },
      { label: "Planning", value: "Events by K" },
      { label: "Flowers", value: "Libellule" }
    ],
    heroImage: mosaic,
    images: [
      { url: mosaic, type: 'full' },
      { url: b1, type: 'split' },
      { url: b2, type: 'split' },
      { url: fashion, type: 'full' }
    ],
    nextPost: { slug: "alia-ranbir-mumbai", name: "Alia & Ranbir" }
  },
  "alia-ranbir-mumbai": {
    slug: "alia-ranbir-mumbai",
    couple: "Alia & Ranbir",
    date: "Aug 8, 2024",
    location: "Mumbai, Maharashtra",
    description: "The most anticipated wedding of the year. Minimalist, elegant, and deeply personal. Alia and Ranbir's home wedding was a masterclass in understated luxury.",
    credits: [
      { label: "Location", value: "Vastu, Mumbai" },
      { label: "Outfits", value: "Sabyasachi" },
      { label: "Photography", value: "Next Level Studio" }
    ],
    heroImage: wedding,
    images: [
      { url: wedding, type: 'full' },
      { url: heroWedding, type: 'split' },
      { url: b1, type: 'split' },
      { url: mosaic, type: 'full' }
    ],
    nextPost: { slug: "kiara-siddharth", name: "Kiara & Siddharth" }
  },
  "kiara-siddharth": {
    slug: "kiara-siddharth",
    couple: "Kiara & Siddharth",
    date: "Apr 24, 2024",
    location: "Jaisalmer, Rajasthan",
    description: "A desert dream come true. The golden sands of Jaisalmer witnessed a wedding that was as vibrant and energetic as the couple themselves.",
    credits: [
      { label: "Venue", value: "Suryagarh Jaisalmer" },
      { label: "Planning", value: "Motwane Entertainment" },
      { label: "Outfits", value: "Manish Malhotra" }
    ],
    heroImage: fashion,
    images: [
      { url: fashion, type: 'full' },
      { url: prewedding, type: 'split' },
      { url: b2, type: 'split' },
      { url: heroCouple, type: 'full' }
    ],
    nextPost: { slug: "reva-zach", name: "Reva & Zach" }
  }
};
