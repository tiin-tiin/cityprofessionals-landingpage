const Footer = () => {
  return (
    <footer className="bg-[#3b5998] text-white pt-16 pb-8">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand Info */}
        <div>
          <a href="/" className="inline-block mb-4 cursor-pointer">
            <img src="/logo.png" alt="City Professionals Logo" className="h-12 w-auto" />
          </a>
          <p className="text-white-400 text-sm leading-relaxed">
            City Professionals is a trusted service marketplace that connects skilled home-service vendors with customers across Mumbai.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f6c844] inline-block pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white-400">
            <li><a href="#" className="hover:text-[#f6c844] transition cursor-pointer">Home</a></li>
            <li><a href="#" className="hover:text-[#f6c844] transition cursor-pointer">Services</a></li>
            <li><a href="#" className="hover:text-[#f6c844] transition cursor-pointer">About Us</a></li>
            <li><a href="#" className="hover:text-[#f6c844] transition cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f6c844] inline-block pb-1">Our Services</h3>
          <ul className="space-y-2 text-sm text-white-400">
            <li><a href="#" className="hover:text-[#f6c844] transition cursor-pointer">Packers & Movers</a></li>
            <li><a href="#" className="hover:text-[#f6c844] transition cursor-pointer">Deep Cleaning</a></li>
            <li><a href="#" className="hover:text-[#f6c844] transition cursor-pointer">Pest Control</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-[#f6c844] inline-block pb-1">Contact Us</h3>
          <ul className="space-y-4 text-sm text-white-400">
            
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#f6c844] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>10th Floor Nesco IT Park,<br />W E Highway Goregaon East, <br />Mumbai, India</span>
            </li>
            
            
            <li>
              <a href="tel:+918421437595" className="flex items-center gap-3 hover:text-[#f6c844] transition cursor-pointer group">
                <svg className="w-5 h-5 text-[#f6c844] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>(+91) 8421437595</span>
              </a>
            </li>
            
            
            <li>
              <a href="mailto:info@cityprofessionals.in" className="flex items-center gap-3 hover:text-[#f6c844] transition cursor-pointer group">
                <svg className="w-5 h-5 text-[#f6c844] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@cityprofessionals.in</span>
              </a>
            </li>
            
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white-500 px-6">
        <p>&copy; {new Date().getFullYear()} City Professionals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;