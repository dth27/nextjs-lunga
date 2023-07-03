type Visualartist = {
    artist?: string
    // teacher1?: string
    // teacher2?: string
    exhibition?: string
    about1?: string
    about2?: string
    exhibitioninfo1?: string
    exhibitioninfo2?:string
    mynd?:string
    instagram?:  string
    website?: string
}

export type FrontmatterVisualartists = {
    frontmatter: Array<Visualartist>
}