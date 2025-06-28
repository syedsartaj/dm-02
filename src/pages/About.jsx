import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/Bottom';

const AboutPage = () => {
  return (
    <>
    <Header/>
    <div className="bg-white text-gray-900 py-10 px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">About Pc World Solutions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">About Us</h2>
        <p>
          Welcome to Pc world solutions. Our goal at Pc world solutions is to provide our readers with more information about hardware, software, cybersecurity, gadgets, mobile apps and new technology trends such as AI, IOT and more.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <p>
          At Pc World Solutions we have publishers who are experts in different categories of technology and they love to share their views and thoughts through Pc world solutions. Pc world solutions have been divided into the following sections:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong>News:</strong> This is your one-stop for all technology related news. If you have any news related to technology which needs to be published on Pc world solutions, you can email it to <strong>contact@pcworldsolutions.com</strong></li>
          <li><strong>Reviews:</strong> We review technology-related products and companies on Pc world solutions. Our reviews will be genuine and it comes after a deep research on the product and company.</li>
          <li><strong>How-To:</strong> In this section, we help our readers of different expertise. To learn more about the hardware, software, cybersecurity, new technologies and many.</li>
          <li><strong>Best Picks:</strong> With the help of this section our users can know what to buy and how to get more from their purchases.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Editorial Contacts:</h2>
        <p>
          If you'd corresponding to do a guest post on Pc world solutions, and If you'd like to give a review on the product, please send an email to <strong>contact@pcworldsolutions.com</strong>.
        </p>
      </section>
    </div>
    <Bottom/>
    </>
  );
};

export default AboutPage;
