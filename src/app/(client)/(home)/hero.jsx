import FadeUp from "@/components/animations/FadeUp";
import TypeAnimation from "@/components/animations/type-animation";
import Section from "@/components/ui/section";
import { hero } from "@/lib/cms/home";

export default function Hero() {
  return (
    <Section>
      <div className="relative mx-auto w-full md:w-2/3 md:text-center z-0">
        <FadeUp>
          <h1>{hero.headingOne}</ h1>
        </FadeUp>

        <p className="my-base text-foreground text-lg">
          <TypeAnimation text={hero.paraOne} />
        </p>

        <div className="absolute left-0 right-0 -top-20 flex-center -z-10">
          <div className="w-full aspect-square bg-primary/15 blur-3xl rounded-full" />
        </div>
      </div>


      <div className="relative mt-block aspect-video rounded-md md:rounded-xl overflow-hidden z-10">
        <iframe
          className="relative size-full z-0"
          src={`${hero.videoSrc}?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </Section>
  )
}
