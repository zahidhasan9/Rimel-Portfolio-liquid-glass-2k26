import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Services" title="Everything needed for a professional web presence." description="From landing pages to complete MERN applications and deployment workflows." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </Container>
    </section>
  );
}
