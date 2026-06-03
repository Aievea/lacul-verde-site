import type { Metadata } from "next";
import Species from "@/components/Species";

export const metadata: Metadata = {
  title: "Specii de Pești | Lacul Verde Sâncraiu de Mureș",
  description: "Descoperă speciile din Lacul Verde: crap, somn african, amur, șalău și știucă. Greutăți trofeu și sfaturi de pescuit.",
  alternates: { canonical: "https://www.laculverde.com/specii" },
};

export default function Specii() {
  return <Species />;
}
