import type { ReactNode } from "react"
import "./HeroSection.css"

type Props = {
    children: ReactNode
}
export function HeroSection({ children }: Props) {
    return <div className="hero-section">
        {children}
    </div>
}