import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import { getPracticeAreaBySlug, practiceAreas } from "@/data/practiceAreas";
import ServicePage, { generateServiceMetadata } from "@/components/ServicePage";
import PracticeAreaPage, { generatePracticeAreaMetadata } from "@/components/PracticeAreaPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const serviceSlugs = services.map((s) => ({ slug: s.slug }));
  const practiceAreaSlugs = practiceAreas.map((p) => ({ slug: p.slug }));
  return [...serviceSlugs, ...practiceAreaSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (service) return generateServiceMetadata(service);

  const practiceArea = getPracticeAreaBySlug(slug);
  if (practiceArea) return generatePracticeAreaMetadata(practiceArea);

  return {};
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (service) return <ServicePage service={service} />;

  const practiceArea = getPracticeAreaBySlug(slug);
  if (practiceArea) return <PracticeAreaPage practiceArea={practiceArea} />;

  notFound();
}
