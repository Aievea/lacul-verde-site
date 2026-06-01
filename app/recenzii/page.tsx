import type { Metadata } from "next";
import RecenziiPage from "@/components/Recenzii";

export const metadata: Metadata = {
  title: "Recenzii | Lacul Verde Sâncraiu de Mureș",
  description: "Ce spun pescarii despre Lacul Verde din Sâncraiu de Mureș. Recenzii reale de pe Google de la pescari pasionați.",
  alternates: { canonical: "https://www.laculverde.com/recenzii" },
};

export default function Recenzii() {
  return <RecenziiPage />;
}
