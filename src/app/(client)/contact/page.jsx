import { Contact } from "lucide-react";
import Section from "@/components/ui/section";
import ContactForm from "./contact-form";
import { contact } from "@/lib/cms/contact";
import { contactMd } from "@/lib/datas/metadatas";

export const metadata = contactMd;

export default function Page() {
  return (
    <main>
      <Section className="relative grid gap-base md:grid-cols-2">
        {/* Details */}
        <div className="md:sticky md:top-block md:h-fit">
          <div className="p-base size-fit bg-primary/10 flex-center rounded-full">
            <Contact className="text-primary size-xl" strokeWidth={2} />
          </div>

          <h1 className="h2 my-base">{contact.headingOne}</h1>
          <p>{contact.paraOne}</p>
        </div>

        {/* FORM */}
        <ContactForm />
      </Section>
    </main>
  );
}
