import { BookOpen, Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";
import Navbar from "../../Components/Navbar";

export default function AboutPage() {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/bookstore", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/bookstore", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/bookstore", label: "Instagram" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/bookstore", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@bookstore.com", label: "Email" }
  ];

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-2xl mx-auto py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">About Our Bookstore</h1>
          <p className="text-lg text-base-content/70">
            Your digital destination for great books
          </p>
        </div>

        {/* Story */}
        <div className="card bg-base-200 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Our Story</h2>
            <p className="text-base-content/80 leading-relaxed mb-4">
              We're a passionate team of book lovers who believe everyone deserves access to great stories. 
              Our carefully curated collection features everything from timeless classics to the latest bestsellers.
            </p>
            <p className="text-base-content/80 leading-relaxed">
              Whether you're looking for your next adventure, seeking knowledge, or wanting to escape into 
              a different world, we're here to help you find the perfect book.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="card bg-base-200 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Our Mission</h2>
            <p className="text-base-content/80 leading-relaxed">
              To make quality books accessible to everyone and foster a love of reading in our community. 
              We believe books have the power to educate, inspire, and transform lives.
            </p>
          </div>
        </div>

        {/* Connect */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="btn btn-circle btn-outline hover:btn-primary"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-base-content/70">
            Follow us for book recommendations and updates!
          </p>
        </div>

      </div>
    </div></div>
  );
}