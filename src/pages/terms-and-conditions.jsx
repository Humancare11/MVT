import React from "react";
import "./terms-and-conditions.css";
import { Helmet } from "react-helmet";

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* HELMET SECTION START */}
      <Helmet>
        <title>Terms and Conditions | HumanCare Medical Tourism</title>

        <meta
          name="description"
          content="Read the Terms and Conditions for using HumanCare Medical Tourism website. Understand our payment, refund, user responsibilities, and service policies."
        />

        <meta
          name="keywords"
          content="terms and conditions, human care medical tourism terms, payment policy, refund policy, user responsibilities, healthcare services india"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/terms-and-conditions"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="terms-and-conditions-hero">
        <div>
          <span className="terms-and-conditions-hero-badge">
            Terms and Conditions
          </span>
          <h1>Complete Medical Travel Support</h1>
          <p>
            We provide end-to-end medical travel assistance, including treatment
            coordination, hospital support, travel planning, and post-care
            follow-up—making your healthcare journey simple and stress-free.
          </p>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* TERMS AND CONDITIONS SECTION START */}
      <main className="terms-page-wrap">
        <div className="terms-card">
          <div className="terms-header">
            <h2 className="terms-title">Terms and Conditions</h2>
            <p className="terms-subtitle">
              By using this website and making payments through this payment
              gateway, you agree to comply with and be bound by these Terms and
              Conditions.
            </p>
          </div>

          <div className="terms-content">
            <p>
              <strong>Payment Process</strong>Payments made through the payment
              gateway are processed securely using standard encryption
              technology as per the provider. We accept payments through various
              channels via credit cards, debit cards, and other payment methods
              as indicated on the payment page both domestic and international.
            </p>

            <p>
              <strong>Payment Confirmation</strong>Upon successful payment, you
              will receive a confirmation email with a receipt of the
              transaction. If you do not receive a confirmation immediately,
              please contact our customer service team for confirmation of the
              receipt of the payment and if required you may need to contact
              your banker also for faster resolution of the issue. We
              acknowledge the payment only once it reflects into our banking.
            </p>

            <p>
              <strong>Payment Security</strong>We prioritize the security of
              your personal and financial information. All payment transactions
              are processed through servers, and sensitive data is encrypted
              using SSL (Secure Socket Layer) technology as maintained by the
              provider.
            </p>

            <p>
              <strong>Refunds and Cancellations</strong>Refunds, if applicable,
              will be processed as per the refund policy outlined on our website
              in lieu of the providers policy. If you wish to request a refund,
              please contact our support team for eligibility and processing.
            </p>

            <p>
              <strong>User Responsibilities</strong>You are responsible for
              providing accurate and up-to-date payment information. Any
              incorrect or fraudulent payment information may result in
              transaction failure or delays.
            </p>

            <p>
              <strong>Liability</strong>We are not liable for any loss, damage,
              or unauthorized transaction that may occur as a result for
              unsuccessful transactions while using the payment gateway. In case
              of any dispute or issue with the payment, please contact our
              support team, the payment provider and also your bank for better
              resolution.
            </p>

            <p>
              <strong>Changes to Terms</strong>We reserve the right to modify
              these Terms and Conditions at any time. Any changes will be
              updated on this page, and the updated version will take effect
              immediately.
            </p>
          </div>
        </div>
      </main>
      {/* TERMS AND CONDITIONS SECTION END */}
    </>
  );
}
