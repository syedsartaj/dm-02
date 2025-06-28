import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/Bottom';

const ContactUs = () => {
  return (
    <div><Header/>
    <div className="bg-white text-gray-900 py-10 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h1>

      <h2 className="text-xl font-bold mb-2">Questions or Comments? Feedback and Tips?</h2>
      <p className="mb-4">
        Website: <a href="https://www.pcworldsolutions.com" className="text-blue-600 underline">https://www.pcworldsolutions.com/</a>
      </p>
      <p className="mb-4">
        If you have problems or comments about our website or would like to give us feedback, we would love to hear from you! We will be happy to answer you.
      </p>
      <p className="mb-4">
        We welcome suggestions as well as ideas. If you want to contact us for publicity and collaborations, content-related inquiries, send us an email to the following address:
      </p>
      <p className="mb-6">
        Please Email us at <strong>contact@pcworldsolutions.com</strong> for all.
      </p>

      <h2 className="text-xl font-bold mb-2">Website Suggestions & Error Reports</h2>
      <p className="mb-4">
        We welcome our users or audience for suggestions or feedback on improving our website. If you face difficulty browsing our website, please email us at <strong>contact@pcworldsolutions.com</strong>.
      </p>
    </div><Bottom/></div>
  );
};

export default ContactUs;
