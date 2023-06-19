export interface Portafolio {
    videos:VideoPortafolio ,
    images: ImgPortafolio[],
}

export interface ImgPortafolio {
    id: string,
    url: string
}

export interface VideoPortafolio {
    id: string,
    url: string
}