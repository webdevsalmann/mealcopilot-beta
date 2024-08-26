"use client"
import Section from "@/components/ui/section";
import WaitlistForm from "./waitlist-form";
import { Users } from "lucide-react";
import { waitlist } from "@/lib/cms/waitlist";

export default function Waitlist() {
  return (
    <Section sectionClassName="-mt-block" className="relative grid gap-base md:grid-cols-2" id="waitlist">
      <div className="md:sticky md:top-block md:h-fit">
        
        <div className="p-base size-fit bg-primary/10 flex-center rounded-full">
          <Users className="text-primary size-xl" strokeWidth={2} />
        </div>

        <h2 className="my-base">{waitlist.headingTwo}</h2>
        <p>{waitlist.paraOne}</p>
      </div>

      {/* FORM */}
      <WaitlistForm />
    </Section>
  );
}
