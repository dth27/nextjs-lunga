type Event = {
    id?: number
    id2?: string
    date?: string
    time?: string

    name?: string
    type?: string

    where?: string
    descr1?: string
    descr2?:string
    descr3?:string
    note?: string
    img?: string
    facebook?:  string

    instagram?:  string
    website?:  string

    youtube?: string 
    spotify?: string
}

export type FrontmatterEvents = {
    frontmatter: Array<Event>
}