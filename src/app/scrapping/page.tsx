import ScraperForm from "@/components/ScraperForm";
import StatusDisplay from "@/components/StatusDisplay";
import EmailList from "@/components/EmailList";

export default function ScrapingPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Email Scraping Tool
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Use our advanced scraping tool to extract emails from your desired platforms efficiently.
        </p>
        <div className="max-w-2xl mx-auto">
          <ScraperForm />
          <StatusDisplay />
          <EmailList />
        </div>
      </div>
    </div>
  );
}