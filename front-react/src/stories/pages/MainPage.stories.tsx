import { ComponentStory, ComponentMeta } from "@storybook/react";
import MainPage from "../../components/pages/MainPage";

export default {
    title: "Pages/MainPage",
    component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const DefaultMainPage = Template.bind({});

DefaultMainPage.args = {
};
