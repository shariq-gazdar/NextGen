import React from "react";
import FAQ from "../client/FAQ";
import { ContactForm } from "../client/ContactForm";

function Contact() {
  const faqs = [
    {
      q: "Are there any hidden fees?",
      a: "No, we believe in complete transparency. Our packages cover a standard scope of work, and any additional requirements beyond the package will be discussed upfront, ensuring no surprises.",
    },
    {
      q: "How do we start working together?",
      a: "We begin with a free 15-minute consultation to understand your needs. For complex projects, we offer extended consultations. After that, we provide a detailed proposal with timelines and pricing.",
    },
    {
      q: "How long will my project take?",
      a: "Project timelines vary based on scope and complexity. We provide a detailed timeline during the planning phase. A more accurate timeline is shared during the planning phase.",
    },
    {
      q: "Do you offer revisions?",
      a: "Yes! We include _ revisions as part of our agreement to ensure satisfaction. Additional revisions can be provided at a nominal cost.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept bank transfers, credit cards, and PayPal. For larger projects, we offer installment payment plans.",
    },
    {
      q: "Do you provide support after project completion?",
      a: "Yes! We offer free post-completion support for _ days. Long-term maintenance plans are also available.",
    },
    {
      q: "Can you handle everything after our initial discussion?",
      a: "Absolutely! Once we finalize the plan, we take care of everything, allowing you to focus on running your business.",
    },
    {
      q: "What if I need changes after the project is completed?",
      a: "We provide post-project updates and additional support at an agreed-upon fee, depending on the scope of the changes.",
    },
    {
      q: "Do you work with specific platforms only?",
      a: "No, we work across multiple platforms, including WordPress, Shopify, Elementor, and Custom PHP. We also provide platform recommendations based on your needs.",
    },
    {
      q: "What makes your digital marketing services different?",
      a: "Our approach is tailored, results-driven, and hands-off for clients. We prioritize clear communication, strategic execution, and data-backed decisions to maximize your business’s success.",
    },
  ];
  return (
    <div
      className="my-10 flex justify-between gap-x-10 mb-[100px] flex-col lg:flex-row"
      id="meeting"
    >
      {/* FAQ Section */}
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-[40px] font-heading">FAQ's</h1>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} key={index} />
        ))}
      </div>
      {/* Contact Form */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-[40px] font-heading mb-5 pr-2">Get In Touch</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
