import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
        <div>
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Have a question or want to work together? Drop us a message!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <a
                  href="mailto:xamidullo@example.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  hamidullabaxtiyorov123@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400">Toshkent</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
