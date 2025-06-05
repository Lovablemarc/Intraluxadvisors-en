
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if we have data to send
    if (!name.trim() || !email.trim() || !message.trim()) {
      console.log('Form validation failed - missing required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Create form data and submit manually
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('Form submitted successfully');
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }).catch((error) => {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <Card className="w-full shadow-xl bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">
          {getText("contact_title", language)}
        </CardTitle>
        <CardDescription className="text-center">
          Fill out the form below and we&apos;ll get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="contactform"
          action="https://formsubmit.io/send/info@intraluxadvisors.com"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <input name="_formsubmit_id" type="text" style={{display:"none"}} />

          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium mb-1">
                {getText("contact_name", language)}
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full"
                placeholder="John Doe"
                disabled={isSubmitting}
                aria-label={getText("contact_name", language)}
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                {getText("contact_email", language)}
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full"
                placeholder="you@example.com"
                disabled={isSubmitting}
                aria-label={getText("contact_email", language)}
              />
            </div>

            <div>
              <Label htmlFor="comment" className="block text-sm font-medium mb-1">
                {getText("contact_message", language)}
              </Label>
              <Textarea
                name="comment"
                id="comment"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full"
                placeholder="Your message..."
                disabled={isSubmitting}
                aria-label={getText("contact_message", language)}
              />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center items-center bg-gold hover:bg-gold/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  getText("contact_submit", language)
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
