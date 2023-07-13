type Concert = {
    name?: string
    id?: number
    id2?: string
    stage?: string
    time?: string
    descr1?: string
    descr2?:string
    descr3?:string
    img?: string
    instagram?:  string
    youtube?: string 
    spotify?: string
    soundcloud?: string
    website?: string
}

export type FrontmatterConcerts = {
    frontmatter: Array<Concert>
}