type Workshop = {
    title?: string
    teacher1?: string
    teacher2?: string
    length?: string
    about1?: string
    about2?: string
    aboutteacher1?: string
    aboutteacher2?:string
    mynd?:string
    instagram?:  string
    applyhere?: string 
}

export type FrontmatterWorkshops = {
    frontmatter: Array<Workshop>
}