import HeaderBlock from "@/components/modules/header-block";
import Accordion, { AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/lib/faqData";

export default function AboutThisSite() {
  return (
    <main id="main-content">
      <HeaderBlock
        isPageHeader
        title="About This Site"
        description="Information about this website, including copyright notices and attribution."
      />

      <section className="content-grid pt-5 pb-11">
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              title={faq.title}
              defaultOpen={faq.defaultOpen}
            >
              {faq.content}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
