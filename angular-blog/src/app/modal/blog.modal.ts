import { Comments } from "./comments.modal";

export interface Blog {
    comments: Comments[];
    content: string;
    description: string;
    id: number;
    title: string;
}