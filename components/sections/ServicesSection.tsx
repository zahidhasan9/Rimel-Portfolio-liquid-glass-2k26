"use client";

import { m } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";
import { listVariants } from "@/components/motion/variants";

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-24" id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="From landing pages to full-stack product interfaces."
          description="The service grid uses consistent glass cards, readable copy, and motion that communicates hierarchy instead of noise."
        />

        <m.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </m.div>
      </Container>
    </section>
  );
}
