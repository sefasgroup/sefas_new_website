import { notFound } from "next/navigation";
import { pageLang } from "@/app/_i18n/server";

export default async function UnknownPage({ params }: { params: Promise<{ lang: string }> }) {
  await pageLang(params);
  notFound();
}
