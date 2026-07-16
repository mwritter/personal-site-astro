import NameTag from "./NameTag.astro";

export default {
    title: "Component/NameTag",
    component: NameTag,
    parameters: {
        layout: 'centered'
    }
}


export const Default = {
    args: {
        name: 'Matthew'
    }
}
