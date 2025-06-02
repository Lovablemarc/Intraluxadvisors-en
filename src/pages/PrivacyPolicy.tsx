import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <main className="min-h-screen py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 font-playfair">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <p className="text-gray-600 mb-8">
                Last updated: June 2, 2025
              </p>

              <p className="mb-4">
                At IntraLux Advisors, we take your privacy seriously. This privacy policy explains how we collect,
                use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact details</li>
                <li>Company information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business-related information necessary for Intrastat reporting</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Technical Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6">
                <li>To provide and maintain our services</li>
                <li>To process your Intrastat declarations</li>
                <li>To communicate with you about our services</li>
                <li>To comply with legal obligations</li>
                <li>To improve our website and services</li>
                <li>To send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data
                against unauthorized access, modification, disclosure, or destruction. All data is processed
                in accordance with GDPR and Luxembourg data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
              <p>
                For any privacy-related questions or to exercise your rights, please contact us at:<br />
                Email: privacy@intraluxadvisors.com<br />
                Address: 2A Rue des Capucins, 1313 Ville-Haute, Luxembourg
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}