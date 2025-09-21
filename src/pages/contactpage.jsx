import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";

const ContactItems = [
  { type: "Email", value: "raouf.abdelhafid.contact@gmail.com", icon: Mail, href: "mailto:raouf.abdelhafid.contact@gmail.com" },
  { type: "Phone", value: "+212 624 475 295", icon: Phone, href: "tel:+212624475295" },
  { type: "Location", value: "Casablanca, Morocco", icon: MapPin },
  { type: "LinkedIn", value: "Abdelhafid Raouf", icon: Linkedin, href: "https://ma.linkedin.com/in/abdelhafidraouf" },
  { type: "GitHub", value: "AbdelhafidRaoufjr", icon: Github, href: "https://github.com/Abdelhafidraoufjr" },
  { type: "WhatsApp", value: "+212 624 475 295", icon: MessageCircle, href: "https://wa.me/212624475295" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-100 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p className="text-gray-300">
            Abdelhafid Raouf — Professional Developer based in Casablanca. 
            Passionate about creating innovative solutions and contributing to impactful projects.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-3">
            {ContactItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-indigo-500" />
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-gray-200">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <p className="text-gray-300 mb-4">
            Feel free to reach out on my social profiles or WhatsApp for collaboration and inquiries.
          </p>
          <div className="flex gap-4">
            {ContactItems
              .filter(item => item.href && ["LinkedIn", "GitHub", "WhatsApp"].includes(item.type))
              .map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition"
                >
                  <item.icon className="w-5 h-5 text-white" />
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Abdelhafid Raouf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
