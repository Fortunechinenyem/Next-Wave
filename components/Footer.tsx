import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    explore: [
      { name: "Latest", href: "#" },
      { name: "Popular", href: "#" },
      { name: "Editors' Picks", href: "#" },
    ],
    categories: [
      { name: "AI", href: "#" },
      { name: "Web Dev", href: "#" },
      { name: "Design", href: "#" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "#" },
    ],
    legal: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} NextWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
