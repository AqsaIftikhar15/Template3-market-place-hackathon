const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-2">
      <div className="container mx-auto px-4">
        {/* Grid for the footer sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h5 className="font-semibold mb-2">FIND A STORE</h5>
            <ul>
              <li><a href="/joinus" className="hover:underline">Become a Member</a></li>
              <li><a href="#" className="hover:underline">Sign Up for Email</a></li>
              <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
              <li><a href="#" className="hover:underline">Student Discounts</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">GET HELP</h5>
            <ul>
              <li><a href="#" className="hover:underline">Order Status</a></li>
              <li><a href="#" className="hover:underline">Delivery</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Payment Options</a></li>
              <li><a href="#" className="hover:underline">Contact Us On Nike.com Inquiries</a></li>
              <li><a href="#" className="hover:underline">Contact Us On All Other Inquiries</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">ABOUT NIKE</h5>
            <ul>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
            </ul>
          </div>
        </div>

        {/* Address and Copyright section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="material-icons">place</span>
            <span className="ml-2">India</span>
          </div>
          <div>
            <span>© 2023 Nike, Inc. All Rights Reserved</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-5 flex flex-col sm:flex-row justify-between text-sm space-y-2 sm:space-y-0">
          <a href="#" className="hover:underline">Guides</a>
          <a href="#" className="hover:underline">Terms of Sale</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Nike Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
