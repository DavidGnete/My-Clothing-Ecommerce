export interface Product{
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    Size: Size[];
    slug: string;
    tags: string[];
    title: string;
    //todo: type: ValidType;
    gender: ValidCategorie;
}
export type ValidCategorie ='men'|'women'|'kid'|'unisex';
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidType = 'shirts'|'pants'|'hoodies'|'hats';