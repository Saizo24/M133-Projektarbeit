import { ImageView } from "./ImageView.model"

export type user = {
  id: string
  username: string
  pictures: ImageView[]
}

export type User = {
  username: string;
  password: string;
};
