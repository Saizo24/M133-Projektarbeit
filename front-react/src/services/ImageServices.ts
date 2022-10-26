import { ImageService } from "../types/ImageService.model";
import picsumApi from "./PicsumAPI";

export const PicsumService: ImageService = () => ({
    getListOfImages: async (page: number, limit: number) => {
        const data = await picsumApi.get(`/v2/list?page=${page}&limit=${limit}`).catch((error) => {
            throw error;
        });
        return data.data;
    },

    getPreviewListOfImages: async () => {
        const data = await picsumApi.get("/v2/list?page=1&limit=15").catch((error) => {
            throw error;
        });
        return data.data;
    },
});

export default [{ name: "picsum", service: PicsumService }]