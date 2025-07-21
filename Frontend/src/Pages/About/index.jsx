import React from "react";  // <-- Important for cloneElement
import { BookOpen, Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";
import Navbar from "../../Components/Navbar";

export default function AboutPage() {
  const socialLinks = [
    { icon: <Facebook />, href: "https://facebook.com/bookstore", label: "Facebook" },
    { icon: <Twitter />, href: "https://twitter.com/bookstore", label: "Twitter" },
    { icon: <Instagram />, href: "https://instagram.com/bookstore", label: "Instagram" },
    { icon: <Github />, href: "https://github.com/bookstore", label: "GitHub" },
    { icon: <Mail />, href: "mailto:hello@bookstore.com", label: "Email" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-extrabold mb-3 leading-tight">About Our Bookstore</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Your digital destination for great books
          </p>
        </header>

        {/* Our Story */}
        <section className="mb-14 p-8 bg-white/10 rounded-2xl shadow-sm border border-white/20">
          <h2 className="text-3xl font-semibold mb-5 border-b border-white/20 pb-2">Our Story</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We're a passionate team of book lovers who believe everyone deserves access to great stories. 
            Our carefully curated collection features everything from timeless classics to the latest bestsellers.
          </p>
          <p className="text-white/80 leading-relaxed">
            Whether you're looking for your next adventure, seeking knowledge, or wanting to escape into 
            a different world, we're here to help you find the perfect book.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-14 p-8 bg-white/10 rounded-2xl shadow-sm border border-white/20">
          <h2 className="text-3xl font-semibold mb-5 border-b border-white/20 pb-2">Our Mission</h2>
          <p className="text-white/80 leading-relaxed">
            To make quality books accessible to everyone and foster a love of reading in our community. 
            We believe books have the power to educate, inspire, and transform lives.
          </p>
        </section>

        {/* Connect */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map(({ icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 flex items-center justify-center rounded-full
                  border border-white text-white
                  transition-colors duration-300
                  hover:bg-white hover:text-black
                  focus:outline-none focus:ring-2 focus:ring-white
                "
              >
                {React.cloneElement(icon, { className: "w-6 h-6" })}
              </a>
            ))}
          </div>
          <p className="text-white/70 text-lg max-w-md mx-auto">
            Follow us for book recommendations and updates!
          </p>
        </section>
      </main>
    </div>
  );
}
