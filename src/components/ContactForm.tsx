import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/lib/LanguageContext';
import { getText } from '@/lib/translations';

export function ContactForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // Let the form submit naturally to web3forms
  };

  return (
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
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
          <input type="hidden" name="access_key" value="5c688b0b-37fa-42af-b03a-0b5a5f000131" />

          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-semibold text-gold">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
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
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-gold focus:border-gold focus:ring-2 focus:ring-gold/50 bg-white text-darkText placeholder:text-gray-400 transition resize-none"
            ></textarea>
          </div>

          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gold text-white font-bold text-lg shadow-md hover:bg-gold/90 transition"
          >
            Submit Form
          </button>
        </form>
      </CardContent>
    </Card>
  );
}