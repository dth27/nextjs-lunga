
import React, { useContext, useState, useEffect } from 'react'
import Headline from '../Headline/Headline'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
interface LayoutProps {
    title: string,
    subtitle?: string,
    noFooter?: boolean,
    children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({children, noFooter, title, subtitle}) => {
return <div>
    <Header/>
    <Headline title={title} subtitle={subtitle}/>
{children}
{noFooter ? null : <Footer/>}
</div>
}