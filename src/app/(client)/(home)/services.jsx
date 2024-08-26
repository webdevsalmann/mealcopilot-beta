import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/ui/section";
import { service } from "@/lib/cms/home";

export default function Services() {
    return (
        <Section
            sectionClassName="bg-gradient-to-b from-secondary to-transparent"
             id="services"
        >

            <FadeUp>
                <h2>{service.headingTwo}</h2>
                <p className="-mt-base mb-3xl">{service.paraOne}</p>
            </FadeUp>

            <div className="grid gap-base sm:grid-cols-2 md:grid-cols-4">
                {service.services.map((item, i) => (
                    <FadeUp
                        transition={{
                            type: "spring",
                            delay: 0.3 * i
                        }}
                        key={item.title + "ServiceCard"}>
                        <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden">
                            <Image
                                className="absolute inset-0 size-full rounded object-center object-cover z-0"
                                src={`/images/common/${i + 1}.jpg`}
                                height={200}
                                width={200}
                                alt="Drone Image"
                            />
                            <div className="absolute inset-0 size-full bg-gradient-to-t from-foreground via-transparent to-transparent" />
                            <div className="p-base relative z-20 size-full flex flex-col">
                                <div className="flex-1" />
                                <div className=" font-semibold leading-5 text-background">{item.title}</div>
                                <p className="text-xs line-clamp-3 text-background/60">{item.description}</p>
                            </div>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </Section>
    )
}
