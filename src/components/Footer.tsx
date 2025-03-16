import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span className="bg-indigo-600 text-white p-2 rounded-full">ES</span>
              <span>Email Scraper</span>
            </h3>
            <p className="mt-4 text-sm">
              Empowering professionals with advanced email scraping and outreach tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-400 transition duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/scraping" className="hover:text-indigo-400 transition duration-200">
                  Scraping
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-indigo-400 transition duration-200">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:support@emailscraper.com" className="hover:text-indigo-400 transition">support@emailscraper.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-indigo-400 transition">+1 234 567 890</a></li>
              <li>Address: 123 Tech Lane, Digital City</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.58 8.04 8.18 8.84v-6.26H7.9v-2.58h2.32V9.92c0-2.3 1.4-3.56 3.44-3.56.98 0 1.82.07 2.06.1v2.38h-1.42c-1.1 0-1.32.52-1.32 1.3v1.7h2.64l-.34 2.58h-2.3v6.26c4.6-.8 8.18-4.44 8.18-8.84 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.94 4.56c-.88.4-1.84.66-2.86.78 1.03-.62 1.82-1.6 2.2-2.76-.96.58-2.02.98-3.16 1.2-.9-.96-2.2-1.56-3.76-1.56-1.56 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.1 0 2.06-.44 2.6-1.2.2-.62.32-1.3.32-2.02 0-.72-.12-1.4-.34-2.06zm-6.4 13.9c-3.16 3.16-8.3 3.16-11.46 0-3.16-3.16-3.16-8.3 0-11.46 3.16-3.16 8.3-3.16 11.46 0 3.16 3.16 3.16 8.3 0 11.46z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.34-1.6.58-2.46.68.88-.52 1.56-1.36 1.88-2.34-.82.5-1.74.86-2.72 1.06-.78-.84-1.9-1.36-3.26-1.36-2.46 0-4.46 2-4.46 4.46 0 .34.04.68.12 1-3.6-.18-6.8-1.9-8.94-4.56-.42.72-.66 1.56-.66 2.46 0 1.7.86 3.2 2.16 4.08-.8-.02-1.56-.24-2.22-.6v.06c0 2.36 1.68 4.34 3.9 4.78-.4.12-.84.18-1.28.18-.32 0-.62-.04-.92-.12.62 1.94 2.42 3.36 4.56 3.4-1.66 1.3-3.76 2.08-6.04 2.08-.4 0-.8-.02-1.18-.08 2.18 1.4 4.78 2.2 7.56 2.2 9.06 0 14-7.5 14-14 0-.22 0-.44-.02-.66.96-.7 1.8-1.58 2.46-2.58z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Email Scraper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}