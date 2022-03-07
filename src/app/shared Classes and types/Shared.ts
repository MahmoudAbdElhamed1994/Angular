export interface Iproducts{
    ID:number;
    Name:string;
    Quantity:number;
    Price:number;
    Discount:string;
    Img:string;
}
export interface ICatogry{
    ID:number;
    name:string;
}
export enum DiscountOffers{
    NoDiscount="NoDiscount", "10%"="10%", "15%"="15%"
};
export interface Iuser{
    name:string;
    username:string;
    email:string
}
export interface IPost{
    id:number;
    title:string;
    body:string
}
export interface IComment{
    postId:number
    id:number;
    name:string;
    email:string;
    body:string
}