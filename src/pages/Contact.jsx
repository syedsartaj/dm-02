import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/Bottom';

const Contact = () => {
  return (
<div>
    <Header/>
        <div className="bg-white text-gray-900 py-10 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Write for PC World Solutions – Share Your Knowledge</h1>

      <p className="mb-4">
        Submit Expert Content on Technology, Marketing, Startups, Gadgets, Tips, Graphics, Reviews & News at PC World Solutions.
        We're always looking for passionate contributors to share their expertise and insights.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">How to Submit Your Articles to PC World Solutions?</h2>
      <p className="mb-4">
        Email your article along with your author bio and references to: <strong>contact@pcworldsolutions.com</strong>
      </p>

      <h2 className="text-xl font-semibold mb-2">Guidelines</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Original, unpublished content only</li>
        <li>800-1500 words preferred</li>
        <li>Include relevant, royalty-free images with captions and credits</li>
        <li>Use headings, bullets, and short paragraphs</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">Content Categories</h2>

      <div className="space-y-10">
        <div>
          <img src="https://www.pcworldsolutions.com/wp-content/uploads/2023/09/technology.jpg" alt="Technology" className="w-full rounded mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Write for Technology</h3>
          <ul className="list-disc list-inside ml-4">
            <li>AI, IoT, Machine Learning</li>
            <li>Software & Hardware</li>
            <li>Security, Networks, Coding Tips</li>
          </ul>
        </div>

        <div>
          <img src="https://www.pcworldsolutions.com/wp-content/uploads/2023/09/marketing.jpg" alt="Marketing" className="w-full rounded mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Write for Marketing</h3>
          <ul className="list-disc list-inside ml-4">
            <li>SEO & Social Campaigns</li>
            <li>Email Marketing</li>
            <li>Affiliate Programs</li>
          </ul>
        </div>

        <div>
          <img src="https://www.pcworldsolutions.com/wp-content/uploads/2023/09/gadgets.jpg" alt="Gadgets" className="w-full rounded mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Write for Gadgets</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Tech reviews</li>
            <li>Unboxing & First Look</li>
            <li>Comparisons</li>
          </ul>
        </div>

        <div>
          <img src="https://www.pcworldsolutions.com/wp-content/uploads/2023/09/startups.jpg" alt="Startups" className="w-full rounded mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Write for Startups</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Startup Tips</li>
            <li>Success Stories</li>
            <li>Entrepreneur Interviews</li>
          </ul>
        </div>

        <div>
          <img src="https://www.pcworldsolutions.com/wp-content/uploads/2023/09/social.jpg" alt="Social Media" className="w-full rounded mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Write for Social Media</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Trends & Strategy</li>
            <li>Growth Tips</li>
            <li>Campaign Reviews</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-2">After Submission</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Our editorial team will review for plagiarism and formatting</li>
        <li>If approved, it will be published within 7 days</li>
        <li>You’ll get proper author credit and a backlink</li>
      </ul>

      <p className="text-gray-800">
        Questions? Reach out to us at <strong>contact@pcworldsolutions.com</strong>
      </p>
    </div>
    <Bottom/></div>
  );
};

export default Contact;