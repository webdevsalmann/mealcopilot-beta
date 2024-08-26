import FadeUp from "@/components/animations/FadeUp";
import Section from "@/components/ui/section";
import { feature } from "@/lib/cms/home";

export default function Features() {
  return (
    <Section sectionClassName="md:-mt-block bg-[url('/images/bg/circle-left.svg')] md:bg-[url('/images/bg/circle-left-md.svg')] bg-no-repeat bg-center bg-cover" id="features">
      <div className="grid md:gap-block md:grid-cols-2">
        <FadeUp>
          <h2>{feature.headingTwo}</h2>
        </FadeUp>
        <div>
          <FadeUp>
            <p>{feature.paraOne}</p>
          </FadeUp>
          <FadeUp>
            <p className="mt-base">{feature.paraTwo}</p>
          </FadeUp>
        </div>
      </div>

      <div className="mt-block grid sm:grid-cols-2 md:grid-cols-4 gap-base">
        {feature.featurePoints.map((item, i) => (
          <FadeUp
            transition={{
              type: "spring",
              delay: 0.3 * i
            }}
            key={item.title + "FeatureCard"}>
            <div className="p-base bg-background flex-center gap-base flex-col text-center group rounded-md border-primary border">
              <div className="">
                {item.icon}
              </div>
              {item.title}
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}
