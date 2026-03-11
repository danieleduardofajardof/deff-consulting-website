import DeffConsultingWebsite from "@/components/deff-consulting-website";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const dictionary = await getDictionary(locale as "en" | "es");

  return <DeffConsultingWebsite dictionary={dictionary} locale={locale} />;
}
