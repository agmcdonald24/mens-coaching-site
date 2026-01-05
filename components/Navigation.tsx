export default function Navigation() {
  return (
    <nav className="fixed w-full bg-[rgb(20,30,70)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src="/images/crown1.png"
              alt="Andrew McDonald"
              className="h-10 w-auto"
            />
          </div>

          <div>
            <a
              href="#contact"
              className="text-[rgb(184,144,87)] hover:text-[rgb(200,170,120)] transition-colors text-sm"
            >
              Have a question? <span className="underline">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
