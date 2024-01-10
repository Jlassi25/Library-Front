import { category } from "./category";

export interface BookInterface{
    isbn?:number
    title?:string
    author?:string;
    category?:category
}