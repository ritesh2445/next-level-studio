import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import mosaic from "@/assets/mosaic-couple.jpg";
import wedding from "@/assets/wedding-ceremony.jpg";
import fashion from "@/assets/fashion.jpg";
import prewedding from "@/assets/prewedding.jpg";
import heroCouple from "@/assets/hero-couple-arch.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

import i01 from "@/assets/01.jpg";
import i02 from "@/assets/02.jpg";
import i03 from "@/assets/03.jpg";
import i04 from "@/assets/04.jpg";
import i05 from "@/assets/05.jpg";
import i06 from "@/assets/06.jpg";
import i07 from "@/assets/07.jpg";
import i08 from "@/assets/08.jpg";
import i09 from "@/assets/09.jpg";
import i10 from "@/assets/10.jpg";

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
      { url: i01, type: 'full' },
      { url: i02, type: 'split' },
      { url: i03, type: 'split' },
      { url: b2, type: 'split' },
      { url: heroCouple, type: 'split' },
      { url: wedding, type: 'full' },
      { url: i04, type: 'split' },
      { url: i05, type: 'split' },
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
      { url: i06, type: 'split' },
      { url: i07, type: 'split' },
      { url: b1, type: 'split' },
      { url: b2, type: 'split' },
      { url: i08, type: 'full' },
      { url: fashion, type: 'split' },
      { url: i09, type: 'split' },
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
      { url: i01, type: 'split' },
      { url: i02, type: 'split' },
      { url: heroWedding, type: 'full' },
      { url: i03, type: 'split' },
      { url: i04, type: 'split' },
      { url: b1, type: 'split' },
      { url: i05, type: 'split' },
      { url: mosaic, type: 'full' },
      { url: i06, type: 'split' },
      { url: i07, type: 'split' },
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
      { url: i08, type: 'split' },
      { url: i09, type: 'split' },
      { url: prewedding, type: 'full' },
      { url: b2, type: 'split' },
      { url: i10, type: 'split' },
      { url: heroCouple, type: 'full' }
    ],
    nextPost: { slug: "reva-zach", name: "Reva & Zach" }
  }
};
