import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "What services do you provide?", answer: "We offer comprehensive pension and VAT report services, including filing, compliance, and advisory support." },
    { question: "How can I get help with VAT filing?", answer: "Our team assists with VAT filing by ensuring all documents are correctly prepared and submitted on time to meet compliance requirements." },
    { question: "Do you offer pension management services?", answer: "Yes, we manage pension contributions, compliance, and reporting, ensuring that all statutory requirements are met efficiently." },
    { question: "What are the benefits of using your services?", answer: "We streamline the process of VAT and pension reporting, saving you time and helping avoid penalties by staying compliant with regulations." },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h4>{item.question}</h4>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
