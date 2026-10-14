import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | KNK Soft Infotech Pvt. Ltd.",
  description:
    "Privacy Policy explaining how KNK Soft Infotech Pvt. Ltd. collects, uses, and protects personal and business information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-28 sm:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="text-xs sm:text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>{" "}
            / <span className="text-gray-900 font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg font-semibold text-blue-600 mt-1">
            KNK Soft Infotech Pvt. Ltd.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: 14 October 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-base">
          <p>
            <strong>KNK Soft Infotech Pvt. Ltd.</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal and business information of everyone who accesses our website, uses our POS software, or interacts with our services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, process, and safeguard your information when you visit our Platform or use our Services. By accessing or using our Services, you acknowledge that you have read and understood this policy.
          </p>

          <hr className="my-6 border-gray-200" />

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              We collect information necessary to provide, improve, and secure our Platform and Services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>
                <strong>Contact &amp; Account Information:</strong> Name, email address, phone number, business name, billing address, and account credentials.
              </li>
              <li>
                <strong>Business &amp; POS Data:</strong> Products, inventory, billing records, shift logs, and operational data entered into the POS system.
              </li>
              <li>
                <strong>Customer Information Entered by Merchants:</strong> Customer names, contact details, or order histories voluntarily inputted by business customers into the POS.
              </li>
              <li>
                <strong>Technical &amp; Usage Information:</strong> IP address, device type, browser version, access times, and diagnostic error logs.
              </li>
              <li>
                <strong>Billing Information:</strong> Payment records and invoice details. Note that card transactions are processed securely through authorized external payment gateways.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">We use the collected information to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>Create and manage user accounts and provide access to POS features.</li>
              <li>Process transactions, billing, subscriptions, and invoices.</li>
              <li>Provide customer onboarding, software training, and technical support.</li>
              <li>Send important service updates, security notifications, and maintenance alerts.</li>
              <li>Monitor system performance, prevent fraud, and enhance platform security.</li>
              <li>Comply with applicable legal, accounting, and regulatory obligations.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              3. Information Sharing &amp; Disclosure
            </h2>
            <p className="mb-2">
              We do not sell your personal information. We may share information only when reasonably necessary:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>
                <strong>Service Providers:</strong> Trusted third-party cloud hosting, communication, and infrastructure partners bound by confidentiality.
              </li>
              <li>
                <strong>Payment Processors:</strong> Authorized payment gateways to facilitate secure billing and payments.
              </li>
              <li>
                <strong>Third-Party Integrations:</strong> External services (such as accounting or delivery platforms) that you explicitly choose to connect.
              </li>
              <li>
                <strong>Legal Requirements:</strong> Regulatory or government authorities when required by law, court order, or legal proceedings.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect your data from unauthorized access, loss, alteration, or disclosure. These include access controls, encrypted transmissions, system logging, and regular security updates. While we take every reasonable precaution, no online system can be guaranteed 100% secure.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              5. Data Retention &amp; Deletion
            </h2>
            <p>
              We retain personal and business information only as long as needed to fulfill the purposes outlined in this policy, provide our Services, and satisfy statutory record-keeping requirements. When no longer required, data is securely deleted or anonymized.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              6. Your Privacy Rights &amp; Choices
            </h2>
            <p className="mb-2">
              Subject to applicable laws, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>Access and receive a copy of your personal data.</li>
              <li>Request corrections to inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information, where legally permissible.</li>
              <li>Opt out of non-essential promotional communications at any time.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              If you are an end customer of a merchant using KNK Soft POS, please contact that business directly regarding your customer profile and orders.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              7. Cookies &amp; Tracking
            </h2>
            <p>
              Our website uses essential cookies to enable secure navigation, maintain user sessions, and analyze site traffic to improve user experience. You can control or disable cookies through your browser settings, though some website features may not function properly without them.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              8. Third-Party Links
            </h2>
            <p>
              Our platform may contain links to external websites or third-party integrations. We are not responsible for the privacy practices or content of third-party websites. We encourage you to review their respective privacy policies before sharing information.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our services, technology, or legal requirements. Updated versions will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. Continued use of our Services after changes become effective constitutes your acceptance.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              10. Governing Law
            </h2>
            <p>
              This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising in connection with this policy shall be subject to the jurisdiction of the competent courts in New Delhi, India.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              11. Contact Us &amp; Grievance Redressal
            </h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
              <li>
                <strong>Company:</strong> KNK:SOFT INFOTECH Pvt. Ltd.
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
            Thank you for trusting KNK Soft Infotech Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
