import { Metadata } from "next";
import Events from "@/components/AwardAndEvents/Events";

export const metadata: Metadata = {
  title: "Awards & Events | Your Company",
  description:
    "Discover our achievements and upcoming events in technology and innovation.",
};

export default function AwardsAndEvents() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Events />
    </main>
  );
}
