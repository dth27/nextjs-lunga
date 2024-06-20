type Resident = {
    artist?: string
    about1?: string
    about2?: string
    exhibitioninfo1?: string
    exhibitioninfo2?:string
    mynd?:string
    instagram?:  string
    website?: string
}

export type FrontmatterResidents = {
    frontmatter: Array<Resident>
}