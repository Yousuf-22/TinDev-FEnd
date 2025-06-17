import React from "react";

const RefundPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4">
        At <strong>TinDev</strong>, we aim to provide valuable and reliable
        services to developers for professional networking and collaboration. If
        you are not satisfied with a paid feature or service, please review our
        refund policy below.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Eligibility for Refund
      </h2>
      <p className="mb-4">
        Refunds are applicable only to users who have purchased premium features
        or subscriptions through TinDev.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Refund requests must be made within <strong>7 days</strong> of the
          original purchase date.
        </li>
        <li>
          Only users who have not significantly used the service are eligible
          for a full refund.
        </li>
        <li>
          Refunds will not be granted for abuse, misuse, or violation of our
          Terms of Service.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Non-Refundable Items
      </h2>
      <p className="mb-4">The following are not eligible for refunds:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Promotional or discounted plans.</li>
        <li>One-time feature unlocks used during the subscription period.</li>
        <li>Any custom service or partnership agreement.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. How to Request a Refund
      </h2>
      <p className="mb-4">
        To request a refund, please email us at{" "}
        <strong>support@tindev.site</strong> with the following information:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Your registered email address</li>
        <li>Payment receipt or transaction ID</li>
        <li>Reason for the refund request</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Processing Time</h2>
      <p className="mb-4">
        Approved refunds will be processed within{" "}
        <strong>7–10 business days</strong> and credited to the original payment
        method.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Changes to This Policy
      </h2>
      <p className="mb-4">
        TinDev reserves the right to update or modify this Refund Policy at any
        time. Updates will be posted on this page.
      </p>

      <p className="text-sm text-gray-600 mt-6">Last updated: June 17, 2025</p>
    </div>
  );
};

export default RefundPolicy;
