import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// IMPORTANT: Replace this with your actual email address where you want to receive submissions.
const FORM_SUBMIT_EMAIL = "info@intraluxadvisors.com";

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [formSubmitEmailPlaceholder, setFormSubmitEmailPlaceholder] = useState(false);

  useEffect(() => {
    // This ensures redirectUrl is set only on the client-side after mount.
    setRedirectUrl(window.location.origin + '/thank-you');
    if (!FORM_SUBMIT_EMAIL.includes('@')) {
      setFormSubmitEmailPlaceholder(true);
    }
  }, []);

  const handleFormSubmit = () => {
    // Set loading state. Actual submission is handled by the browser via form action.
    setIsSubmitting(true);
    // The form will now submit naturally.
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
          {/* FormSubmit.io hidden fields */}
          <input type="text" name="_formsubmit_id" style={{display:"none"}} />
          {redirectUrl && <input type="hidden" name="_redirect" value={redirectUrl} />}
          {/* It's recommended to enable CAPTCHA for production by setting value to "true" or removing this line */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Optional: Define a subject for emails received via FormSubmit.io */}
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
              {formSubmitEmailPlaceholder && (
                 <p className="mt-3 text-xs text-destructive text-center p-2 rounded-md border border-destructive/50 bg-destructive/10">
                   <strong>Action Required:</strong> Please update the <code>FORM_SUBMIT_EMAIL</code> variable in <code>src/components/contact-form.tsx</code> with your actual email address to receive form submissions.
                 </p>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}