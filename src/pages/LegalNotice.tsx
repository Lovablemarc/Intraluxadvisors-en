import { useLanguage } from "@/lib/LanguageContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalNotice() {
  return (
    <LanguageProvider>
      <LegalNoticeContent />
    </LanguageProvider>
  );
}

function LegalNoticeContent() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <main className="min-h-screen py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 font-playfair">Legal Notice</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Company Information</h2>
              <p>
                <strong>IntraLux Advisors S.à r.l.</strong><br />
                2A Rue des Capucins<br />
                1313 Ville-Haute<br />
                Luxembourg<br />
                RCS Luxembourg: B217149<br />
                VAT: LU12345678
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Contact</h2>
              <p>
                Email: info@intraluxadvisors.com<br />
                Phone: +352 691 486 875
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Regulatory Information</h2>
              <p>
                IntraLux Advisors S.à r.l. is registered with the Luxembourg Trade and Companies Register (RCS)
                under number B217149 and is authorized to provide Intrastat reporting services in Luxembourg.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Website Information</h2>
              <p>
                This website is operated by IntraLux Advisors S.à r.l. The content of this website is for general
                information purposes only and does not constitute legal or professional advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, and
                software, is the property of IntraLux Advisors S.à r.l. and is protected by Luxembourg and
                international copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
              <p>
                While we make every effort to ensure the accuracy of the information on this website, we make
                no warranties or representations about the accuracy or completeness of the website's content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p>
                These legal notices shall be governed by and construed in accordance with Luxembourg law.
                Any disputes shall be subject to the exclusive jurisdiction of the Luxembourg courts.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}