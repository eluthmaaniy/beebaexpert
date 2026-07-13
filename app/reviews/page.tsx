import type { Metadata } from "next";
import ReviewsContent from "@/app/components/ReviewsContent";

export const metadata: Metadata = {
  title: "Client Reviews & Store Showcases",
  description:
    "Watch real client testimonials and Shopify store build showcases from Beeba Expert.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
