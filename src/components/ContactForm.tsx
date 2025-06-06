import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/lib/LanguageContext';
import { getText } from '@/lib/translations';

function ContactForm() {
  const { language } = useLanguage();
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
    <>
      <form name="contact" method="POST" data-netlify="true">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <Card className="w-full shadow-xl bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-center">
            {getText("contact_title", language)}
          </CardTitle>
          <CardDescription className="text-center">
            Fill out the form below and we'll get back to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div style={{ display: "none" }}>
              <label>
                Don't fill this out if you're human: 
                <input name="bot-field" />
              </label>
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-semibold text-gold">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gold focus:border-gold focus:ring-2 focus:ring-gold/50 bg-white text-darkText placeholder:text-gray-400 transition"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-semibold text-gold">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gold focus:border-gold focus:ring-2 focus:ring-gold/50 bg-white text-darkText placeholder:text-gray-400 transition"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-semibold text-gold">Message</label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gold focus:border-gold focus:ring-2 focus:ring-gold/50 bg-white text-darkText placeholder:text-gray-400 transition resize-none"
              />
            </div>

            <button
              onClick={handleFormSubmit}
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-gold text-white font-bold text-lg shadow-md hover:bg-gold/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
        </CardContent>
      </Card>
    </>
  );
}

export default ContactForm;
