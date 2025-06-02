import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 font-playfair">Frequently Asked Questions (FAQ)</h1>
          
          <div className="prose max-w-none">
            {[...Array(15)].map((_, i) => (
              <section key={i} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{i + 1}. {questions[i].q}</h2>
                <p className="text-gray-700">{questions[i].a}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const questions = [
  {
    q: "What is an Intrastat declaration and what is its purpose?",
    a: "Intrastat is a European statistical system that collects data on the movement of goods between European Union (EU) member countries. Its purpose is to provide reliable statistics on intra-community trade, which are essential for the economic analysis and trade policy of the EU and its member states, including Luxembourg."
  },
  {
    q: "Who is obliged to submit an Intrastat declaration in Luxembourg?",
    a: "Any VAT-registered company in Luxembourg that conducts trade in goods with other EU member states and exceeds certain annual thresholds is obliged to submit an Intrastat declaration. These thresholds are defined separately for \"Arrivals\" (intra-EU imports) and \"Dispatches\" (intra-EU exports)."
  },
  {
    q: "What are the Intrastat thresholds in Luxembourg for 2025?",
    a: "For the year 2025, the thresholds are set at €450,000 for \"Arrivals\" and €450,000 for \"Dispatches\". If the cumulative value of your trade exceeds either of these thresholds during the year, you become liable for declarations. These thresholds are subject to annual review by STATEC."
  },
  {
    q: "If I exceed the Intrastat threshold during the year, when do I need to start declaring?",
    a: "If you cross the threshold during the year, you must submit Intrastat declarations for the month in which the threshold was exceeded, and for all subsequent months until the end of that calendar year. Furthermore, you will automatically be obliged to declare for the entire following calendar year."
  },
  {
    q: "Where can I find Combined Nomenclature (CN) codes, and are they important?",
    a: "Combined Nomenclature (CN) codes are 8-digit codes that classify goods. They are crucial and must be accurate. You can find them on the European Commission's website (TARIC) or through specialized tools. An error in the CN code is one of the most frequent causes of penalties."
  },
  {
    q: "What is the difference between an Intrastat declaration and a VAT declaration?",
    a: "While both relate to intra-EU trade, Intrastat is solely for statistical purposes, whereas VAT declarations (like intra-Community listings) are for fiscal purposes. It is vital that the data in both declarations is consistent to avoid inquiries from authorities."
  },
  {
    q: "What are the main pieces of information to include in an Intrastat declaration?",
    a: "Key information includes: the reference period, flow direction (Arrival/Dispatch), Combined Nomenclature (CN) code, partner Member State, nature of transaction, net mass, quantity in supplementary unit (if applicable), statistical value, mode of transport, and, for arrivals, the country of origin."
  },
  {
    q: "What are the consequences of an incorrect or late Intrastat declaration?",
    a: "Non-compliance with Intrastat obligations in Luxembourg can lead to significant financial penalties imposed by STATEC. These can range from €500 for minor delays to €15,000 or more for systematic errors or repeated omissions. It can also trigger audits."
  },
  {
    q: "What is the deadline for submitting Intrastat declarations in Luxembourg?",
    a: "Intrastat declarations must be submitted to STATEC via the LuxStat platform no later than the 10th working day of the month following the reference period. For example, for June's trade, the declaration must be submitted by mid-July."
  },
  {
    q: "Can I submit a \"nil\" Intrastat declaration if I had no trade for a month?",
    a: "Yes, if you are liable for the declaration (i.e., you have crossed the thresholds) but had no intra-EU trade in goods for a given month, you must submit a \"nil\" or \"zero\" declaration. This confirms your awareness of the obligation but that you have no operations to report for that period."
  },
  {
    q: "How is the \"statistical value\" calculated for Intrastat?",
    a: "The statistical value represents the value of goods at the Luxembourg border. It is based on the invoice value but must include transport and insurance costs up to the border of the declaring country (for arrivals) or the country of destination (for dispatches). Therefore, it differs from the purely commercial value."
  },
  {
    q: "Is the mode of transport truly important for Intrastat?",
    a: "Yes, the mode of transport (road, rail, sea, air, etc.) used at the time of crossing the Luxembourg border is a mandatory field. It contributes to EU transport statistics, and non-compliance can lead to errors in your declaration."
  },
  {
    q: "Can an already submitted Intrastat declaration be corrected?",
    a: "Yes, it is possible and even recommended to correct an Intrastat declaration if you identify errors after submission. Correction procedures are generally available via the submission platform (LuxStat) and should be carried out as soon as possible to avoid potential penalties."
  },
  {
    q: "My company is small; am I still affected by Intrastat?",
    a: "Yes, if your trade in goods with the EU exceeds the thresholds of €450,000 for either arrivals or dispatches, you are affected, regardless of your company's size. Obligations are based on trade volume, not on the number of employees or total revenue."
  },
  {
    q: "How can I simplify my Intrastat management and avoid errors?",
    a: "The best way to simplify Intrastat management and avoid errors is to ensure rigorous internal data collection, use specialized software if the volume is large, or entrust this task to external experts. Professionals like us specialize in navigating Intrastat complexities and can guarantee your compliance, saving you time and avoiding penalties."
  }
];