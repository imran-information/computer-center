import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-900 text-gray-300 py-10">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 class="text-xl font-bold text-white mb-3">
            Chandrabindu Computer Training Center
            </h2>
            <p class="text-sm">
              Leading the way in IT education. Practical skills, real success.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <ul class="space-y-1 text-sm">
              <li>
                <a href="/" class="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" class="hover:text-blue-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="/admission" class="hover:text-blue-400">
                  Admission
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Contact Us</h3>
            <ul class="text-sm space-y-1">
              <li>📍 Islampur Brahmaputra Bridge. Islampur</li>
              <li>📞 +880 1518380193</li>
              <li>✉️ hazratperfect50@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div class="flex space-x-4 text-xl items-center">
              <a href="#" class="text-blue-400 hover:text-green-500">
                🌐
              </a>
              <a href="#" class="text-blue-400 hover:text-green-500">
              <FaFacebook />
              </a>
              <a href="#" className="text-red-400"><IoLogoYoutube /></a>
              <a href="#" className="text-white"><FaSquareXTwitter /></a>
              <a href="#" className="text-green-500"><TfiLinkedin /> </a>
            </div>
          </div>
        </div>

        <div class="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Chandrabindu Computer Training Center. All rights reserved.
        </div>
      </footer>
    </div>
 

  );
};

export default Footer;
