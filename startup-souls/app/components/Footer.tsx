export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-3 gap-8">
          
          {/* Left Section */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Middle Section - Industries */}
          <div>
            <h2 className="text-lg font-semibold">Industries</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/industries/agriculture" className="hover:text-gray-400">Agriculture</a></li>
              <li><a href="/industries/ai" className="hover:text-gray-400">AI</a></li>
              <li><a href="/industries/ecommerce" className="hover:text-gray-400">Online Shopping (E-Commerce)</a></li>
              <li><a href="/industries/education" className="hover:text-gray-400">Education</a></li>
              <li><a href="/industries/fintech" className="hover:text-gray-400">Finance (Fintech)</a></li>
              <li><a href="/industries/healthtech" className="hover:text-gray-400">Health (Health Tech)</a></li>
              <li><a href="/industries/media" className="hover:text-gray-400">Media and Entertainment</a></li>
              <li><a href="/industries/realestate" className="hover:text-gray-400">Real Estate Tech</a></li>
              <li><a href="/industries/traveltech" className="hover:text-gray-400">Travel Tech</a></li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div>
            <h2 className="text-lg font-semibold">Opportunities</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/micro-entrepreneur" className="hover:text-gray-400">For Micro Entrepreneur</a></li>
              <li><a href="/founders" className="hover:text-gray-400">For Founders</a></li>
            </ul>
          </div>
  
        </div>
      </footer>
    );
  }