// src/components/ContactForm.tsx
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });

      setFormData({ name: '', email: '', message: '' });
      alert('Thank you! Your message has been sent successfully.');
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full shadow-xl bg-white rounded-lg border">
      <div className="p-6 pb-4">
        <h2 className="text-3xl font-bold text-center text-amber-600 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-600">
          Fill out the form below and we'll get back to you.
        </p>
      </div>

      <div className="p-6 pt-2">
        <div className="hidden">
          <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
            <input name="name" />
            <input name="email" />
            <textarea name="message"></textarea>
          </form>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-semibold text-amber-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-amber-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 bg-white text-gray-800 placeholder:text-gray-400 transition outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-semibold text-amber-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-amber-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 bg-white text-gray-800 placeholder:text-gray-400 transition outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-lg font-semibold text-amber-600">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-amber-600 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/50 bg-white text-gray-800 placeholder:text-gray-400 transition resize-none outline-none"
            />
          </div>

          <button
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-amber-600 text-white font-bold text-lg shadow-md hover:bg-amber-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Form'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
