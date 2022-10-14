import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageCard from "../../components/molecules/imageCard/ImageCard";

export default {
    title: "molecules/ImageCard",
    component: ImageCard,
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => <ImageCard {...args} />;

export const DefaultImageCard = Template.bind({});

DefaultImageCard.args = {
};
