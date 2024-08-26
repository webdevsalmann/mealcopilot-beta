import Link from "next/link";
import { Ilogo } from "@/components/ui/svgs";
import Section from "@/components/ui/section";
import { siteConfig } from "@/lib/datas/metadatas";
import { footer } from "@/lib/cms";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Section sectionClassName="bg-secondary">
        <div className="grid gap-3xl sm:grid-cols-2 md:grid-cols-3">
          <div className="">
            <Link className="w-fit flex-center gap-xs text-primary" href="/">
              <Ilogo className="size-12" />
              <div className='text-xl sm:text-2xl font-bold'>MealCopilot</div>
              <span className='sr-only'>MealCopilot</span>
            </Link>
            <p className="mt-xs sm:w-3/4">
              Experience the future of food delivery with our state-of-the-art drone service.
            </p>
          </div>

          {/* Links */}
          <div className="">
            <div className="mb-xs font-bold">Links</div>
            <ul>
              {footer.links.map(item => (
                <li key={item.label+"Footer"}>
                  <Link className="w-fit text-link" href={item.href} >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Info */}
          <div className="">
            <div className="mb-base font-bold">Other Pages</div>
            <ul>
              {footer.pages.map(item => (
                <li key={item.label+"Footer"}>
                  <Link className="w-fit text-link" href={item.href} >{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-base">&copy; {currentYear} {siteConfig.name}</div>
          </div>
        </div>
      </Section>
    </footer>
  )
}
