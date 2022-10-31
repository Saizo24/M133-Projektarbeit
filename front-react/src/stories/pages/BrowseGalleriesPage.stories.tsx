import { ComponentStory, ComponentMeta } from "@storybook/react";
import BrowseGalleriesPage from "../../components/pages/BrowseGalleriesPage";

export default {
    title: "Pages/BrowseGalleriesPage",
    component: BrowseGalleriesPage,
} as ComponentMeta<typeof BrowseGalleriesPage>;

const Template: ComponentStory<typeof BrowseGalleriesPage> = () => <BrowseGalleriesPage />;

export const DefaultMainPage = Template.bind({});

DefaultMainPage.args = {
};
