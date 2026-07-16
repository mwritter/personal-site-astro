import HeroSection from "./HeroSection.astro";
import BorderImage from "../BorderImage/BorderImage.astro";
import meImage from "../../assets/me.jpg"

export default {
    title: 'Component/HeroSection',
    component: HeroSection,
}

export const Default = {
    args: {
        slots: {
            default: [`<p>Text for image</p>`, {
                component: BorderImage, props: { src: meImage }
            }]
        }
    }
} 