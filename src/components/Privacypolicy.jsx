// src/pages/PrivacyPolicy.jsx

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy outlines how we collect, use, and protect your
        information when you use our application.
      </p>

      <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and usage data.
      </p>

      <h2 className="text-xl font-semibold mt-4">2. How We Use Information</h2>
      <p className="mb-4">
        Your information is used to provide and improve our services,
        personalize your experience, and send updates.
      </p>

      <h2 className="text-xl font-semibold mt-4">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share it with trusted
        service providers for operational needs.
      </p>

      <h2 className="text-xl font-semibold mt-4">4. Your Choices</h2>
      <p className="mb-4">
        You can opt out of certain data uses or request deletion of your
        information by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-4">5. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page.
      </p>

      <p className="mt-6">
        If you have any questions, feel free to contact us at{" "}
        <strong>support@yourapp.com</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
