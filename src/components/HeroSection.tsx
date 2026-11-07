import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import GoldButton from "./GoldButton";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center bg-white">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Headline and subheadline */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>
              The finance<br />platform you<br />don't hate.
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-md">
              Runway is the modern and intuitive way to model, plan, and align your business for everyone on your team.
            </p>
            {/* Optional: Add buttons here if needed */}
          </div>
          {/* Right: Rounded image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center bg-gray-100">
              <img src="https://placehold.co/300x300?text=App+Preview" alt="App preview" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
