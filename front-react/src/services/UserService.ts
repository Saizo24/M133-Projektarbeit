import { ImageService } from "../types/ImageService.model";
import api from "./API";
import { User } from "../types/User.model"

const USER_NAME_HEADER = "sub";

export const UserService = () => ({

    createUser: async (username: string, password: string) => {
        await api.post("/users/register", { username, password }).then((res) => {
            return res.data;
        });
    },

    getAllPicturesFromUser: async () => {
        const username = localStorage.getItem(USER_NAME_HEADER)
        const data = await api.get(`/users/${username}`).catch((error) => {
            throw error;
        });
        return data.data;
    },

    addPictureToUserList: async () => {
        const username = localStorage.getItem(USER_NAME_HEADER)
        const data = await api.put(`/users/${username}`).catch((error) => {
            throw error;
        });
        return data.data;
    },

    deletePictureFromUserList: async () => {
        const username = localStorage.getItem(USER_NAME_HEADER)
        const data = await api.delete(`/users/${username}`).catch((error) => {
            throw error;
        });
        return data.data;
    }
});
