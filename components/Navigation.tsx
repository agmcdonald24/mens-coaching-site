export default function Navigation() {
  return (
    <nav className="fixed w-full bg-[rgb(20,30,70)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0">
            <img
              src="/images/crown1.png"
              alt="Andrew McDonald"
              className="h-10 w-auto"
            />
          </a>

          <div className="flex items-center gap-6">
            <a
              href="/#story"
              className="text-[rgb(184,144,87)] hover:text-[rgb(200,170,120)] transition-colors text-sm"
            >
              My Story
            </a>
            <a
              href="/breathwork"
              className="text-[rgb(184,144,87)] hover:text-[rgb(200,170,120)] transition-colors text-sm"
            >
              Breathwork
            </a>
            <a
              href="https://mcdonaldgandrew.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(184,144,87)] hover:text-[rgb(200,170,120)] transition-colors text-sm"
            >
              Blog
            </a>
            <a
              href="/#contact"
              className="text-[rgb(184,144,87)] hover:text-[rgb(200,170,120)] transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
