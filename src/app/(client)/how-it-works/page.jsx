import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import Waitlist from "@/components/layouts/section/waitlist";
import Section from "@/components/ui/section";
import { howItWorks } from "@/lib/cms/how-it-works";
import { howItWorksMd } from "@/lib/datas/metadatas";

export const metadata = howItWorksMd;

export default function page() {
    return (
        <main>
            <div className="mt-block text-center">
                <FadeUp>
                    <h1>{howItWorks.headingOne}</h1>
                </FadeUp>
            </div>

            <Section>
                {/* 1 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">
                            <ZoomIn>1</ZoomIn>
                        </div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2 md:order-1">
                        <FadeUp>
                            <h2 className="h3">{howItWorks.stepOne.headingTwo} </h2>
                        </FadeUp>
                        <FadeUp>
                            <p>{howItWorks.stepOne.paraOne}</p>
                        </FadeUp>
                        <br />
                        <FadeUp>
                            <p>{howItWorks.stepOne.paraTwo}</p>
                        </FadeUp>
                    </div>
                    <div className="flex-center order-1 md:order-2">
                        <iframe
                            className="w-full aspect-video rounded-md"
                            src={`${howItWorks.stepOne.videoUrl}?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* 2 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="w-xs h-xl md:h-2xl bg-primary" />
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">
                            <ZoomIn>2</ZoomIn>
                        </div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2">
                        <FadeUp>
                            <h2 className="h3">{howItWorks.stepTwo.headingTwo} </h2>
                        </FadeUp>
                        <FadeUp>
                            <p>{howItWorks.stepTwo.paraOne}</p>
                        </FadeUp>
                        <br />
                        <FadeUp>
                            <p>{howItWorks.stepTwo.paraTwo}</p>
                        </FadeUp>
                    </div>
                    <div className="flex-center order-1">
                        <iframe
                            className="w-full aspect-video rounded-md"
                            src={`${howItWorks.stepTwo.videoUrl}?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* 3 */}
                <div className="mx-auto w-4/5">
                    <div className="w-fit flex flex-col items-center justify-center">
                        <div className="w-xs h-xl md:h-2xl bg-primary" />
                        <div className="p-1 md:p-xs size-fit aspect-square flex-center bg-primary text-primary-foreground text-lg md:text-xl font-bold rounded-md">
                            <ZoomIn>3</ZoomIn>
                        </div>
                        <div className="w-xs h-xs md:h-sm bg-primary" />
                    </div>
                </div>

                <div className="bg-secondary grid md:grid-cols-2 rounded md:rounded-md overflow-hidden">
                    <div className="p-base order-2 md:order-1">
                    <FadeUp>
                            <h2 className="h3">{howItWorks.stepThree.headingTwo} </h2>
                        </FadeUp>
                        <FadeUp>
                            <p>{howItWorks.stepThree.paraOne}</p>
                        </FadeUp>
                        <br />
                        <FadeUp>
                            <p>{howItWorks.stepThree.paraTwo}</p>
                        </FadeUp>
                    </div>
                    <div className="flex-center order-1 md:order-2">
                        <iframe
                            className="w-full aspect-video rounded-md"
                            src={`${howItWorks.stepThree.videoUrl}?autoplay=1&mute=&loop=1&disablekb=1&controls=0&playlist=Xqnatv8-unU&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </Section >

            <Waitlist />
        </main >
    )
}
