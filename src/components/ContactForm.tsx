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
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="access_key" value="5c688b0b-37fa-42af-b03a-0b5a5f000131" />

          <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

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
                className="mt-1 block w-full"
                placeholder="you@example.com"
                disabled={isSubmitting}
                aria-label={getText("contact_email", language)}
              />
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium mb-1">
                {getText("contact_message", language)}
              </Label>
              <Textarea
                name="message"
                id="message"
                rows={3}
                required
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