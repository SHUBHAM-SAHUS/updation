import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './style.module.scss';
import { useRouter } from 'next/navigation';

const TermsOfService: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.heading}>Terms of Service</h1>
          <p className={styles.text}>Effective Date: 13 February 2024</p>
          <p className={styles.text}>
            Welcome to Zevo360! These Terms of Service ("Terms") govern your use
            of our subscription app, Zevo360 ("the App"). By accessing or using
            the App, you agree to comply with these Terms. Please read them
            carefully before using Zevo360.
          </p>

          <h2 className={styles.subheading}>Use of Zevo360</h2>
          <p className={styles.text}>
            1.1 Licence: Subject to these Terms, we grant you a limited,
            non-exclusive, non-transferable licence to access and use Zevo360
            for your personal, non-commercial purposes.
          </p>
          <p className={styles.text}>
            1.2 Account Registration: To use certain features of Zevo360, you
            may need to register for an account. You agree to provide accurate,
            current, and complete information during the registration process
            and to keep your account information updated.
          </p>
          <p className={styles.text}>1.3 User Conduct: You agree not to:</p>
          <ul className={styles.list}>
            <li>
              Use Zevo360 for any unlawful purpose or in violation of these
              Terms.
            </li>
            <li>Transmit viruses, malware, or other harmful code.</li>
            <li>Interfere with or disrupt the operation of Zevo360.</li>
            <li>Impersonate another person or entity.</li>
            <li>Attempt to gain unauthorized access to any part of Zevo360.</li>
          </ul>

          <h2 className={styles.subheading}>Subscription Services</h2>
          <p className={styles.text}>
            2.1 Subscription Plans: Zevo360 offers subscription plans with
            various features and pricing options. By subscribing to Zevo360, you
            agree to pay the applicable subscription fees and abide by the terms
            of the selected plan.
          </p>
          <p className={styles.text}>
            2.2 Billing and Payments: Subscription fees are billed on a
            recurring basis according to the chosen billing cycle (e.g., monthly
            or annually). You authorize Zevo360 to charge your chosen payment
            method for the subscription fees and any applicable taxes.
          </p>
          <p className={styles.text}>
            2.3 Automatic Renewal: Your subscription will automatically renew at
            the end of each billing cycle unless you cancel it before the
            renewal date. You are responsible for managing your subscription and
            canceling it if you no longer wish to use Zevo360.
          </p>

          <h2 className={styles.subheading}>Intellectual Property</h2>
          <p className={styles.text}>
            3.1 Ownership: Zevo360 and its content, including but not limited to
            text, graphics, logos, and images, are owned by us or our licensors
            and are protected by copyright and other intellectual property laws.
          </p>
          <p className={styles.text}>
            3.2 Licence Restrictions: You may not reproduce, modify, distribute,
            or create derivative works based on Zevo360 or any part thereof
            without our prior written consent.
          </p>

          <h2 className={styles.subheading}>Privacy</h2>
          <p className={styles.text}>
            4.1 Privacy Policy: Your use of Zevo360 is subject to our Privacy
            Policy, which explains how we collect, use, and disclose your
            information. By using Zevo360, you consent to the practices
            described in the Privacy Policy.
          </p>

          <h2 className={styles.subheading}>Disclaimer of Warranties</h2>
          <p className={styles.text}>
            5.1 As Is Basis: Zevo360 is provided "as is" and "as available"
            without warranties of any kind, whether express or implied. We do
            not guarantee that Zevo360 will be error-free or uninterrupted, or
            that any defects will be corrected.
          </p>

          <h2 className={styles.subheading}>Limitation of Liability</h2>
          <p className={styles.text}>
            6.1 Exclusion of Damages: To the fullest extent permitted by law, we
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or relating to
            your use of Zevo360, even if we have been advised of the possibility
            of such damages.
          </p>

          <h2 className={styles.subheading}>Indemnification</h2>
          <p className={styles.text}>
            7.1 Defense: You agree to indemnify, defend, and hold harmless
            Zevo360 and its affiliates, officers, directors, employees, agents,
            and licensors from and against any and all claims, liabilities,
            damages, losses, costs, and expenses (including reasonable
            attorneys' fees) arising out of or relating to your use of Zevo360
            or your violation of these Terms.
          </p>

          <h2 className={styles.subheading}>
            Governing Law and Dispute Resolution
          </h2>
          <p className={styles.text}>
            8.1 Governing Law: These Terms shall be governed by and construed in
            accordance with the laws of [Jurisdiction], without regard to its
            conflict of laws principles.
          </p>
          <p className={styles.text}>
            8.2 Arbitration: Any dispute arising out of or relating to these
            Terms or your use of Zevo360 shall be resolved by binding
            arbitration administered by the [Arbitration Institution], in
            accordance with its rules and procedures.
          </p>

          <h2 className={styles.subheading}>Changes to Terms</h2>
          <p className={styles.text}>
            9.1 Modification: We reserve the right to modify or update these
            Terms at any time by posting a revised version on Zevo360. The
            revised Terms will become effective as of the date of posting.
          </p>

          <h2 className={styles.subheading}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions, concerns, or comments about these Terms
            or Zevo360, please contact us at{' '}
            <a href="mailto:contact@zevo360.com" className={styles.link}>
              contact@zevo360.com
            </a>
            .
          </p>

          <p className={styles.mt8}>Thank you for using Zevo360!</p>
          <p className={styles.mt2}>Date of Last Revision: 13 February 2024</p>
          <div className={styles.goBack} onClick={handleGoBack}>
            <span>
              {' '}
              <FaArrowLeft size={25} className={styles.arrowIcon} />
            </span>
            <span className={styles.goback}> Go Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
