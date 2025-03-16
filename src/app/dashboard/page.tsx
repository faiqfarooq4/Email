import ScraperForm from "@/components/ScraperForm";
import StatusDisplay from "@/components/StatusDisplay";
import EmailList from "@/components/EmailList";
import EmailSending from "@/components/EmailSending";
import EmailReplies from "@/components/EmailReplies";

export default function DashboardPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Dashboard
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Manage your email scraping, sending, and replies all in one place.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Scraping and Results */}
          <div>
            <ScraperForm />
            <StatusDisplay />
            <EmailList />
          </div>

          {/* Right Column: Sending and Replies */}
          <div>
            <EmailSending />
            <EmailReplies />
          </div>
        </div>
      </div>
    </div>
  );
}