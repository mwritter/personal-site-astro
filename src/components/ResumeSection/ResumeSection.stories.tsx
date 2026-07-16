import type { ComponentProps } from "astro/types";
import ResumeSection from "./ResumeSection.astro";

export default {
    title: "Component/ResumeSection",
    component: ResumeSection
}

export const CurrentRole = {
    args: {
        section: {
            id: "sanity",
            collection: "resume",
            data: {
                title: "Senior Software Engineer, AI Growth",
                company: "Sanity",
                startDate: 2025
            },
            rendered: {
                html: [
                    "<p>Partner with design and product to ship AI features that make developers' work with Sanity faster and more pleasant.</p>",
                    "<p>Build across the stack in TypeScript and React, from internal tools to customer-facing product.</p>",
                    "<p>Run A/B tests and experiments to measure how features perform, then prioritize changes based on what we learn.</p>"
                ].join("\n")
            }
        }
    } satisfies ComponentProps<typeof ResumeSection>
}

export const PastRole = {
    args: {
        section: {
            id: "formidable",
            collection: "resume",
            data: {
                title: "Software Engineer",
                company: "Formidable Labs",
                startDate: 2022,
                endDate: 2024
            },
            rendered: {
                html: [
                    "<p>Integrate with new teams and technologies quickly to deliver on client projects and improve on team processes when possible.</p>",
                    "<p>Mentor others to accelerate their career-growth and encourage their participation.</p>",
                    "<p>Communicate directly with clients and stakeholders.</p>"
                ].join("\n")
            }
        }
    } satisfies ComponentProps<typeof ResumeSection>
}
