import Link from "next/link";

export default function NewsletterVerified() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Email Verified Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for verifying your email address. You are now subscribed to
          our newsletter.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Top 10 Casinos
        </Link>
      </div>
    </div>
  );
}
