import type { Metadata } from "next";
import BauturiPage from "@/components/Bauturi";

export const metadata: Metadata = {
  title: "Băuturi & Răcoritoare | Lacul Verde Sâncraiu de Mureș",
  description: "Meniu băuturi disponibile la barul Lacului Verde din Sâncraiu de Mureș. Răcoritoare, bere, sucuri, apă și spirtoase — totul la mal, după o partidă reușită.",
  alternates: { canonical: "https://www.laculverde.com/bauturi" },
};

export default function Bauturi() {
  return <BauturiPage />;
}
