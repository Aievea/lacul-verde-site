import type { Metadata } from "next";
import ContactPage from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Locație | Lacul Verde Sâncraiu de Mureș",
  description: "Suntem în Sâncraiu de Mureș, Str. Principala 199B. Telefon: 0744 523 284. Scrie-ne pe WhatsApp sau găsește-ne pe Facebook.",
  alternates: { canonical: "https://www.laculverde.com/contact" },
};

export default function Contact() {
  return <ContactPage />;
}
