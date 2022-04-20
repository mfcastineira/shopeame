export interface Iproduct{
    name: string,
    price: string,
    description: string,
    image: Iimg,
    stars: number,

};

export interface Iimg{
    title: string,
    id: number
}