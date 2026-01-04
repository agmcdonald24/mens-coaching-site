export default function Footer() {
  return (
    <footer className="bg-[rgb(20,30,70)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-[rgb(184,144,87)] text-2xl font-bold tracking-wider">
            AM
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
    </footer>
  );
}
