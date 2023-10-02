export interface Product {
    title: string;
    icon: ImageMetadata;
    url?: string;
    description: string;
}

export interface Service extends Product {

}