import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginPage from "../../components/pages/LoginPage";

export default {
    title: "Pages/LoginPage",
    component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const DefaultLoginPage = Template.bind({});

DefaultLoginPage.args = {
};
