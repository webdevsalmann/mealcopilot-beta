import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/ui/section";
import { technology } from "@/lib/cms/home";

export default function Technology() {
    return (
        <Section sectionClassName="bg-secondary" id="technology">
            <FadeUp>
                <h2>{technology.headingTwo}</h2>
            </FadeUp>

            <div className="mt-block grid gap-base sm:grid-cols-2 md:grid-cols-4    ">
                {technology.technologyFeatures.map((item, i) => (
                    <FadeUp
                        transition={{
                            type: "spring",
                            delay: 0.3 * i
                        }} key={item.title + "TechFeature"}>
                        <div className="p-base">
                            <div className="font-bold">{item.title}</div>
                            <p className="">{item.description}</p>
                        </div>
                    </FadeUp>
                ))}
            </div>
        </Section>
    )
}
