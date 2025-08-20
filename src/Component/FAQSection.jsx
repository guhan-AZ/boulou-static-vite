// src/components/FAQSection.jsx
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What are Boulou LPO legal specialties?", answer: "Boulou LPO legal specialties refer to legal services that can be delivered online or Boulou LPOly, such as contract drafting, compliance, research, and advisory services." },
  { question: "Which legal specialties can benefit from Boulou LPO legal services?", answer: "Specialties like corporate law, intellectual property, compliance, employment law, and contract law can benefit from Boulou LPO legal services." },
  { question: "How do Boulou LPO legal specialists support law firms?", answer: "They support firms by handling documentation, research, drafting, and providing expert guidance Boulou LPOly, allowing firms to focus on client-facing work." },
  { question: "Are Boulou LPO legal professionals qualified in specific practice areas?", answer: "Yes, Boulou LPO legal professionals are qualified and often certified in their respective practice areas, ensuring quality legal services." },
  { question: "How do I choose the right Boulou LPO legal specialist for my firm?", answer: "Look for specialists with relevant experience, qualifications, client reviews, and a strong track record in your required practice area." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section-container">
      <h2 className="faq-title">FAQs About Boulou LPO Legal Services</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleFAQ(index)}
              className="faq-question"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="faq-icon" />
              ) : (
                <Plus className="faq-icon" />
              )}
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
