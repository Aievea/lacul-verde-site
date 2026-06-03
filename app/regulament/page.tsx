import type { Metadata } from "next";
import RegulamentPage from "@/components/Regulament";

export const metadata: Metadata = {
  title: "Regulament | Lacul Verde Sâncraiu de Mureș",
  description: "Regulile de pescuit la Lacul Verde Sâncraiu de Mureș. Condiții de acces, reguli de comportament și norme obligatorii pentru toți pescarii.",
  alternates: { canonical: "https://www.laculverde.com/regulament" },
};

export default function Regulament() {
  return <RegulamentPage />;
}
