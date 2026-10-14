import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | KNK Soft Infotech  - KNK Soft Infotech",
  description:
    "Terms and Conditions governing access to and use of KNK Soft Infotech  software, applications, and related services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-28 sm:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="text-xs sm:text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>{" "}
            / <span className="text-gray-900 font-medium">Terms & Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg font-semibold text-blue-600 mt-1">
            KNK Soft Infotech 
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: October 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-base">
          <p>
            Welcome to <strong>KNK Soft Infotech </strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). These Terms and Conditions govern your access to and use of our website, Point of Sale (Infotech ) software, applications, and related business management services.
          </p>
          <p>
            By accessing our website, creating an account, or purchasing a subscription, you agree to comply with and be bound by these Terms. If you do not agree, please discontinue using our services.
          </p>

          <hr className="my-6 border-gray-200" />

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              1. Scope of Services &amp; License
            </h2>
            <p>
              KNK Soft Infotech  provides digital solutions designed to help restaurants, retail businesses, and merchants manage billing, orders, inventory, menus, tables, customer relations, and sales reporting. Subject to your active subscription, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our platform for your internal business operations. You agree not to copy, resell, reverse engineer, or exploit the software without prior written permission.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              2. Account Registration &amp; Security
            </h2>
            <p>
              To access certain features, you may be required to register an account with accurate details. You are responsible for safeguarding your login credentials and for all activities carried out under your account. Please notify us immediately if you suspect any unauthorized access or breach of security.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              3. Subscription Plans, Payments &amp; Cancellations
            </h2>
            <p>
              Access to our platform may require payment of subscription fees as described in your selected plan. All fees must be paid on time through approved payment methods. You may cancel your subscription in accordance with your plan terms. Unless required by law or agreed in writing, fees already paid for an active billing cycle are non-refundable.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              4. Merchant Responsibilities &amp; Data
            </h2>
            <p>
              You retain ownership of the business and customer data you enter into the platform. You are solely responsible for ensuring the accuracy, legality, and tax compliance of your product prices, billing records, and transactions. KNK Soft Infotech  provides operational tools but does not substitute for your obligation to verify financial and regulatory records.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All software, source code, logos, trademarks, interfaces, and documentation associated with KNK Soft Infotech  remain the exclusive property of the Company or its licensors. You may not reproduce, redistribute, or create derivative works from our platform without our prior written consent.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              6. Service Availability &amp; Maintenance
            </h2>
            <p>
              We strive to provide reliable and secure service. However, uninterrupted availability cannot be guaranteed. Scheduled maintenance, technical upgrades, or third-party service disruptions may occasionally affect access. We will make reasonable efforts to provide advance notice of planned maintenance.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              7. Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p>
              The platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the maximum extent permitted by applicable law, KNK Soft Infotech  shall not be liable for indirect, incidental, special, or consequential damages resulting from your use or inability to use the services.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              8. Suspension &amp; Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the platform if you violate these Terms, engage in fraudulent activity, fail to pay fees, or create security risks. You may discontinue use of the platform at any time in accordance with your subscription agreement.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              9. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              10. Contact Information
            </h2>
            <p className="mb-3">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>
                <strong>Company:</strong> KNK:SOFT INFOTECH Pvt. Ltd. (KNK Soft Infotech )
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://knksoftinfotech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://knksoftinfotech.com
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@knksoftinfotech.com"
                  className="text-blue-600 hover:underline"
                >
                  info@knksoftinfotech.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +91 9891-578-609 / +91 6370-782-646
              </li>
              <li>
                <strong>Office:</strong> 734/39-B, Block-E, Molarband-Badarpur, New Delhi, INDIA - 110044
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200" />

          <p className="text-sm text-gray-500">
            Thank you for choosing KNK Soft Infotech .
          </p>
        </div>
      </div>
    </div>
  );
}
