import React from "react";

const TermsOfService = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        These Terms of Service ("Terms") govern your use of TinDev ("the App"),
        a platform for developers to connect, collaborate, and share
        professional interests.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing or using TinDev, you agree to be bound by these Terms. If
        you do not agree, you may not use the App.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Eligibility</h2>
      <p className="mb-4">
        You must be at least 13 years old to use TinDev. If you are under 18,
        you must have parental permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Use of the App</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Only use TinDev for professional networking purposes.</li>
        <li>Do not post misleading, inappropriate, or offensive content.</li>
        <li>Do not attempt to exploit, hack, or disrupt the platform.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Account Responsibility
      </h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity under your account.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Content Ownership</h2>
      <p className="mb-4">
        You retain ownership of the content you post, but you grant TinDev a
        license to use, display, and distribute it within the App.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your account at any time
        for violations of these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Modifications to the Terms
      </h2>
      <p className="mb-4">
        We may modify these Terms at any time. Continued use of the App after
        changes means you accept the new Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-4">
        If you have any questions, please contact us at{" "}
        <strong>support@tindev.site</strong>.
      </p>

      <p className="text-sm text-gray-600 mt-6">Last updated: June 17, 2025</p>
    </div>
  );
};

export default TermsOfService;
