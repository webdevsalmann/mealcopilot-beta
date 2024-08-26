import { BriefcaseBusiness, Contact } from "lucide-react";
import Section from "@/components/ui/section";
import CareersForm from "./careers-form";
import { career } from "@/lib/cms/careers";
import { careerMd } from "@/lib/datas/metadatas";

export const metadata = careerMd;

export default function Page() {
  return (
    <main>
      <Section className="relative grid gap-base md:grid-cols-2">
        {/* Details */}
        <div className="md:sticky md:top-block md:h-fit">
          <div className="p-base size-fit bg-primary/10 flex-center rounded-full">
            <BriefcaseBusiness className="text-primary size-xl" strokeWidth={2} />
          </div>

          <h1 className="h2 my-base">{career.headingOne}</h1>
          <p>{career.paraOne}</p>

        </div>

        {/* FORM */}
        <CareersForm />
      </Section>
    </main>
  );
}
