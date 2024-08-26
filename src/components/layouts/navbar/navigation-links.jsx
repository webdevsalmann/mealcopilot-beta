import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { navbar } from "@/lib/cms";

export default function NavigationLinks({ setIsNavbarOpen }) {
    const path = usePathname();

    return navbar.navigationLinks.map((item) => (
        <li key={item.title}>
            <Link
                className={cn(
                    "capitalize",
                    (path === item.path && "bg-accent"),
                    buttonVariants({ variant: item.varient, size: 'sm' }),
                )}
                href={item.path}
                onClick={() => setIsNavbarOpen(false)}
            >
                {item.title}
            </Link>
        </li>
    ))
}
