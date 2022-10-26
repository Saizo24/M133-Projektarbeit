import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gallery from "../../components/organisms/gallery/Gallery";

export default {
    title: "organisms/Gallery",
    component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => <Gallery {...args} />;

export const DefaultGallery = Template.bind({});

DefaultGallery.args = {
};
