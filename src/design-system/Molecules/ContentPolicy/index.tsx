'use client'
import React, { useEffect } from 'react';
import styles from './style.module.scss';

const CustomerSupport: React.FC = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.heading}>
            Customer Support Policy for ZEVO360
          </h1>
          <p className={styles.text}>
            At ZEVO360, we are committed to providing exceptional customer
            support to ensure a positive and seamless experience for our users.
            Our customer support policy outlines our commitment to addressing
            user inquiries, feedback, and concerns promptly and effectively.
          </p>

          <h2 className={styles.subheading}>1. Customer Support Channels:</h2>
          <ul className={styles.list}>
            <li>
              Email Support: Users can reach out to our dedicated support team
              via email at{' '}
              <a href="mailto:contact@zevo360.com" className={styles.link}>
                contact@zevo360.com
              </a>{' '}
              for assistance with any questions, issues, or feedback.
            </li>
            <li>
              In-App Support: We offer in-app support chat functionality for
              users to conveniently communicate with our support representatives
              directly within the ZEVO360 app.
            </li>
          </ul>

          <h2 className={styles.subheading}>2. Response Time:</h2>
          <ul className={styles.list}>
            <li>
              Email Response Time: Our support team endeavors to respond to all
              customer inquiries via email within 24 hours during weekdays and
              within 48 hours on weekends and holidays.
            </li>
            <li>
              In-App Chat Response Time: We aim to provide real-time assistance
              to users through our in-app chat support during operating hours.
            </li>
          </ul>

          <h2 className={styles.subheading}>3. Support Operating Hours:</h2>
          <p className={styles.text}>
            Our customer support team operates during standard business hours,
            Monday through Friday, from 9:00 AM to 6:00 PM (local time).
          </p>

          <h2 className={styles.subheading}>4. Support Scope:</h2>
          <p className={styles.text}>
            Our support team is available to assist users with inquiries related
            to app functionality, troubleshooting, account management, and
            general questions about ZEVO.
          </p>

          <h2 className={styles.subheading}>5. Escalation Process:</h2>
          <p className={styles.text}>
            In the event that a user's issue requires further attention or
            resolution, our support team will escalate the matter to the
            appropriate department or higher management for prompt resolution.
          </p>

          <h2 className={styles.subheading}>6. User Feedback:</h2>
          <p className={styles.text}>
            We highly value user feedback and actively encourage users to share
            their thoughts, suggestions, and concerns with us. All feedback is
            carefully reviewed and considered to continually improve our
            products and services.
          </p>

          <h2 className={styles.subheading}>7. Data Privacy and Security:</h2>
          <p className={styles.text}>
            We prioritize the privacy and security of our users' data. All
            customer support interactions and data are handled in accordance
            with our privacy policy and applicable data protection regulations.
          </p>

          <h2 className={styles.subheading}>8. Continuous Improvement:</h2>
          <p className={styles.text}>
            We are committed to continuously improving our customer support
            processes and services based on user feedback and evolving industry
            best practices.
          </p>

          <h2 className={styles.subheading}>9. Accessibility:</h2>
          <p className={styles.text}>
            We strive to make our customer support accessible to all users,
            including those with disabilities. If any user requires assistance
            or accommodations, they are encouraged to reach out to our support
            team for assistance.
          </p>

          <h2 className={styles.subheading}>10. Compliance:</h2>
          <p className={styles.text}>
            Our customer support operations comply with all relevant laws,
            regulations, and industry standards governing customer service
            practices.
          </p>

          <p className={styles.text}>
            <strong>Conclusion:</strong> At ZEVO360, providing exceptional
            customer support is a top priority. We are dedicated to assisting
            our users promptly, professionally, and courteously to ensure a
            positive experience with our products and services. If you have any
            questions or need assistance, please don't hesitate to reach out to
            our support team at{' '}
            <a href="mailto:contact@zevo.com" className={styles.link}>
              contact@zevo.com
            </a>{' '}
            or through the in-app chat feature.
          </p>
          <p className={styles.mt8}>Thank you for choosing ZEVO 360!</p>
          <strong>
            <p className={styles.mt2}>
              Sincerely, <br /> The ZEVO Customer Support Team
            </p>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
