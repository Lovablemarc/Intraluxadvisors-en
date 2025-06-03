import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const FORM_SUBMIT_EMAIL = "info@intraluxadvisors.com";

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [formSubmitEmailPlaceholder, setFormSubmitEmailPlaceholder] = useState(false);

  useEffect(() => {
    setRedirectUrl(window.location.origin + '/thank-you');
    if (!FORM_SUBMIT_EMAIL.includes('@')) {
      setFormSubmitEmailPlaceholder(true);
    }
  }, []);

  const handleFormSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <Card className="w-full shadow-xl bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-3xl font-headline text-center">Contact Us</CardTitle>
        <CardDescription className="text-center">
          Fill out the form below and we&apos;ll get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={`https://formsubmit.io/${FORM_SUBMIT_EMAIL}`}
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <input type="text" name="_formsubmit_id" style={{display:"none"}} />
          {redirectUrl && <input type="hidden" name="_redirect" value={redirectUrl} />}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value={`New Contact Form Submission: ${name || 'N/A'}`} />

          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
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
                aria-label="Full Name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
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
                aria-label="Email Address"
              />
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </Label>
              <Textarea
                name="message"
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full"
                placeholder="Your message..."
                disabled={isSubmitting}
                aria-label="Message"
              />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center items-center bg-gold hover:bg-gold/90 text-white"
                disabled={isSubmitting || !redirectUrl || formSubmitEmailPlaceholder}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}