import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageIconButton from "../../components/atoms/buttons/ImageIconButton";

export default {
    title: "atoms/ImageIconButton",
    component: ImageIconButton,
} as ComponentMeta<typeof ImageIconButton>;

const Template: ComponentStory<typeof ImageIconButton> = (args) => <ImageIconButton {...args} />;

export const DefaultLoginPage = Template.bind({});

DefaultLoginPage.args = {
};
