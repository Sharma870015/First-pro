import React from 'react';
import "./FAQ.css"

const FAQ = () => {
  const faqs = [
    {
      question: 'What does unlimited requests mean?',
      answer: 'You can submit as many design requests as you need within your subscription period.',
    },
    {
      question: 'How fast will my request be completed?',
      answer: 'Our designers work quickly and efficiently, so you can expect to receive your first draft within 24 hours.',
    },
    {
      question: 'How do we handle feedback?',
      answer: 'We encourage you to provide feedback on your design drafts. Our designers will work with you to make sure you are completely satisfied with the final product.',
    },
    {
      question: 'Who are the designers?',
      answer: 'Our team of designers is highly skilled and experienced. They have a wide range of expertise in different design styles and techniques.',
    },
  ];

  return (
    <section className="faq-section">
      <ul>
        {faqs.map((faq, index) => (
          <li className='all-ques' key={index}>
            <h3>{faq.question}</h3>
            <p className='ans-p'>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
