import { ImageService } from "../types/ImageService.model";
import picsumApi from "./PicsumAPI";

const SERVICE_NAME = "Picsum"
const BASE_URL = picsumApi.BASE_URL

export const PicsumService: ImageService = () => ({
    getServiceName: () => {
        return SERVICE_NAME
    },

    getBaseUrl: () => {
        return BASE_URL
    },

    getListOfImages: async (page: number, limit: number) => {
        const data = await picsumApi.api.get(`/v2/list?page=${page}&limit=${limit}`).catch((error) => {
            throw error;
        });
        return data.data;
    },

    getPreviewListOfImages: async () => {
        const data = await picsumApi.api.get("/v2/list?page=1&limit=15").catch((error) => {
            throw error;
        });
        return data.data;
    },
});

export default [PicsumService] 