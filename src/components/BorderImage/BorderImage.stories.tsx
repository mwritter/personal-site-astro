import BorderImage from "./BorderImage.astro";
import meImage from '../../assets/me.png'

export default {
    title: 'Component/BorderImage',
    component: BorderImage
}


export const Default = {
    args: {
        src: meImage
    }
}