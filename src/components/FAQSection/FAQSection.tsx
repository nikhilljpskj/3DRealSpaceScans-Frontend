import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide 3D virtual tours, digital twins for construction and architecture, and virtual staging services.",
    },
    {
      question: "How can I book a service?",
      answer:
        "You can book a service by clicking on the 'Book an Appointment' button on our website and filling out the required details.",
    },
    {
      question: "What is the typical turnaround time for services?",
      answer:
        "Our turnaround time varies by service, but you can typically expect results within 1-2 weeks.",
    },
    {
      question: "Do you offer customized solutions?",
      answer:
        "Yes, we can customize our services to meet the specific needs of your project. Please contact us for more details.",
    },
    {
      question: "Where do you provide your services?",
      answer:
        "We offer services across California, Nevada and Oregon. Contact us to see if we cover your area.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center bg-gray-200 px-4 py-3 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-gray-600">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
