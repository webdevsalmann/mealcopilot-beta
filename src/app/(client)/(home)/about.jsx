import FadeLeft from "@/components/animations/FadeLeft";
import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { about } from "@/lib/cms/home";
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <Section
            sectionClassName="bg-gradient-to-t from-secondary to-transparent"
            className="grid gap-block md:grid-cols-2" id="about">
            <div className="grid gap-base grid-cols-2">
                {about.images.map((item, i) => (
                    <FadeUp
                        transition={{
                            type: "spring",
                            delay: 0.3 * i
                        }}
                        key={item + "AboutImages"}>
                        <Image
                            className="w-full rounded object-center object-cover aspect-square"
                            src={item}
                            height={200}
                            width={200}
                            alt="Drone Image"
                        />
                    </FadeUp>
                ))}
            </div>

            <div className="relative">
                <div className="md:sticky top-block">
                    <FadeUp>
                        <h2>{about.headingTwo}</h2>
                    </FadeUp>
                    <FadeUp>
                        <p>{about.paraOne}</p>
                    </FadeUp>
                    <FadeUp>
                        <p className="mt-base italic">{about.paraTwo}</p>
                    </FadeUp>

                    <div className="mt-base space-y-2">
                        {about.points.map((item, i) => (
                            <FadeLeft
                                className="w-fit"
                                transition={{
                                    type: "spring",
                                    delay: 0.3 * i
                                }}
                                key={item + "AboutPoints"}>
                                <div className="flex gap-base">
                                    <CheckCheck className="text-primary shrink-0" />
                                    <div className="">{item}</div>
                                </div>
                            </FadeLeft>
                        ))}
                    </div>
                        
                    <ZoomIn>
                        <Link className={cn(buttonVariants(), "mt-lg")} href="/#waitlist">Request A Demo</Link>
                    </ZoomIn>
                </div>
            </div>
        </Section>
    )
}
