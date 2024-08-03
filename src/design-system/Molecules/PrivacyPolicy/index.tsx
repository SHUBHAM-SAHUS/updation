import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';


const Privacy: React.FC = () => {
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
          <h1 className={styles.heading}>Privacy Policy</h1>
          <p className={styles.text}>Effective Date: 13 February 2024</p>
          <p className={styles.text}>
            Zevo360 ("we," "us," or "our") is committed to protecting the
            privacy of our users. This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your information when you use our
            subscription app, Zevo360. Please read this Privacy Policy carefully
            before using Zevo360 or subscribing to our services.
          </p>

          <h2 className={styles.subheading}>Information We Collect</h2>
          <p className={styles.text}>
            <strong>Personal Information:</strong> This may include your name,
            email address, contact information, payment details, and other
            information you provide when you register for an account or make
            purchases through Zevo360.
          </p>
          <p className={styles.text}>
            <strong>Usage Information:</strong> We may collect information about
            how you interact with Zevo360, including your browsing actions,
            preferences, and usage patterns.
          </p>
          <p className={styles.text}>
            <strong>Device Information:</strong> We may collect information
            about the device you use to access Zevo360, such as your device
            type, operating system, and unique device identifiers.
          </p>
          <p className={styles.text}>
            <strong>Location Information:</strong> With your consent, we may
            collect information about your location when you use certain
            features of Zevo360.
          </p>

          <h2 className={styles.subheading}>How We Use Your Information</h2>
          <p className={styles.text}>
            We may use the information we collect for the following purposes:
          </p>
          <ul className={styles.list}>
            <li>
              To provide and maintain Zevo360, including processing payments and
              delivering services to you.
            </li>
            <li>
              To personalize your experience and improve Zevo360's features and
              functionality.
            </li>
            <li>
              To communicate with you, respond to your inquiries, and provide
              customer support.
            </li>
            <li>
              To send you promotional messages, marketing communications, and
              other information about Zevo360, subject to your preferences.
            </li>
            <li>
              To detect, prevent, and address technical issues, fraud, and
              security concerns.
            </li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>

          <h2 className={styles.subheading}>Information Sharing</h2>
          <p className={styles.text}>
            We may share your information in the following circumstances:
          </p>
          <ul className={styles.list}>
            <li>
              With service providers, contractors, and other third parties who
              assist us in operating Zevo360 and providing services to you.
            </li>
            <li>With your consent or at your direction.</li>
            <li>
              To comply with legal obligations or protect the rights, property,
              or safety of Zevo360, our users, or others.
            </li>
            <li>
              In connection with a merger, acquisition, or other corporate
              transaction involving Zevo360.
            </li>
          </ul>

          <h2 className={styles.subheading}>Data Security</h2>
          <p className={styles.text}>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, please note that no method of transmission over the
            internet or electronic storage is completely secure, and we cannot
            guarantee absolute security.
          </p>

          <h2 className={styles.subheading}>Your Choices</h2>
          <p className={styles.text}>
            You may choose not to provide certain information to us, but this
            may limit your ability to access certain features of Zevo360. You
            can also review and update your account information and preferences
            at any time.
          </p>

          <h2 className={styles.subheading}>Updates to This Privacy Policy</h2>
          <p className={styles.text}>
            We may update this Privacy Policy from time to time by posting a
            revised version on Zevo360. The revised version will be effective as
            of the date of posting. We encourage you to review this Privacy
            Policy periodically for any changes.
          </p>

          <h2 className={styles.subheading}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions, concerns, or comments about this Privacy
            Policy or our privacy practices, please contact us at{' '}
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

export default Privacy;
