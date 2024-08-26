"use client"
import { Toaster } from "@/components/ui/toaster"
import { FmaosConfigProvider } from "./FmaosConfigProvider"
import { WaitlistProvider } from "./waitlist-provider"

export default function Providers({ children }) {
    return (
        <FmaosConfigProvider>
            <WaitlistProvider>
                {children}
            </WaitlistProvider>
            <Toaster />
        </FmaosConfigProvider>
    )
}