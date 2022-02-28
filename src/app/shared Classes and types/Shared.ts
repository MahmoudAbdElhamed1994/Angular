export interface Iproducts{
    ID:number;
    Name:string;
    Quantity:number;
    Price:number;
    Img:string;
}
export interface ICatogry{
    ID:number;
    name:string;
}
export enum DiscountOffers{
    NoDiscount="NoDiscount", "10%"="10%", "15%"="15%"};