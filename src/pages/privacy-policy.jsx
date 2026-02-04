import React from "react";
import "./privacy-policy.css";
import { Helmet } from "react-helmet";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HELMET SECTION START */}
      <Helmet>
        <title>Privacy Policy | HumanCare Medical Tourism</title>

        <meta
          name="description"
          content="Read the Privacy Policy of HumanCare Medical Tourism. Learn how we collect, use, and protect your personal information when making payments or using our services."
        />

        <meta
          name="keywords"
          content="privacy policy, human care medical tourism, payment security, data protection, personal information, cookies policy"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/privacy-policy"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="privacy-policy-hero">
        <div>
          <span className="privacy-policy-hero-badge">Privacy Policy</span>
          <h1>Complete Medical Travel Support</h1>
          <p>
            We provide end-to-end medical travel assistance, including treatment
            coordination, hospital support, travel planning, and post-care
            follow-up—making your healthcare journey simple and stress-free.
          </p>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* PRIVACY POLICY SECTION START */}
      <main className="privacy-wrap">
        <div className="privacy-content">
          <div className="privacy-header">
            <h2 className="privacy-main-title">Privacy Policy</h2>
            <p className="privacy-intro">
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and protect your data when you make payments through our
              payment gateway.
            </p>
          </div>

          <h3 className="privacy-numbered">1 Information We Collect</h3>
          <p style={{ fontWeight: "800" }}>
            When you make a payment, we may collect the following information as
            part of the data submitted to the payment provider:
          </p>
          <ul className="privacy-list">
            <li>Name</li>
            <li>Billing address</li>
            <li>Contact information (email, phone number)</li>
            <li>Any identification details and tax number (if required)</li>
            <li>
              Payment details (credit/debit card information, bank account
              information)
            </li>
          </ul>

          <h3 className="privacy-numbered">2 How We Use Your Information</h3>
          <p style={{ fontWeight: "800" }}>
            We use the information we collect for the following purposes:
          </p>
          <ul className="privacy-list">
            <li>To process your payments securely</li>
            <li>To send payment confirmations and receipts</li>
            <li>
              To communicate with you regarding your transactions or account
            </li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>

          <h3 className="privacy-numbered">3 Payment Security</h3>
          <p>
            We use secure payment gateways that comply with industry standards
            (PCI DSS) to protect your payment information. Your payment details
            are processed directly by the payment provider, and we do not store
            sensitive payment data.
          </p>

          <h3 className="privacy-numbered">4 Data Retention</h3>
          <p>
            If required, we may retain your personal and payment information
            only for as long as necessary to complete the transaction and
            fulfill any legal obligations that may require retention.
          </p>

          <h3 className="privacy-numbered">5 Sharing Your Information</h3>
          <p style={{ fontWeight: "800" }}>
            We do not share your personal information with third parties except
            in the following cases:
          </p>
          <ul className="privacy-list">
            <li>With payment processors to complete transactions</li>
            <li>When required by law or legal processes</li>
            <li>
              With third-party service providers who assist in business
              operations, subject to confidentiality agreements
            </li>
          </ul>

          <h3 className="privacy-numbered">6 Your Rights</h3>
          <p style={{ fontWeight: "800" }}>You have the right to:</p>
          <ul className="privacy-list">
            <li>Access and update your personal information</li>
            <li>
              Request the deletion of your data, subject to legal retention
              requirements (if stored by us)
            </li>
            <li>Opt out of marketing communications (if applicable)</li>
          </ul>

          <h3 className="privacy-numbered">7 Cookies</h3>
          <p>
            Our website may use cookies to enhance user experience. Cookies are
            small files stored on your device to remember preferences and
            improve website functionality.
          </p>

          <h3 className="privacy-numbered">8 Changes to Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the updated version will take
            effect immediately.
          </p>
        </div>
      </main>
      {/* PRIVACY POLICY SECTION END */}
    </>
  );
}
