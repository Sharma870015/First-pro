import React from 'react';
import './caseStudies.css';


const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Increasing reviews by 100% using  a simple popup.',
      icon: '>',
      company: ''
    },
    {
      title: 'Validate an idea by getting 10 sales.',
      icon: '>',
      company: ''
    },
    {
      title: 'Cut in half the shipping time for a team of 15+ developers.',
      icon: '>',
      company: ''
    },
    {
      title: 'Onboarding redesign to reduce customer support time by 50%.',
      icon: '>',
      company: ''
    },
  ];

  return (
      <div className="case-studies-container">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study">
            <div className="case-study-content">
              <h3 className='for-everytitle'>{study.title}</h3>
            </div>
            <div className="case-study-icon">{study.icon}</div>
            <div className="case-study-company">{study.company}</div>
          </div>
        ))}
      </div>
  );
};

export default CaseStudies;
