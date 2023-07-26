import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// type Props = { page: string; }: This defines a TypeScript type
// alled Props, which specifies that the component 
// accepts a single prop named page of type string. 
// TypeScript is a statically typed language, and this type
// declaration helps to enforce type safety by specifying the
// expected types of props the component should receive.

type Props = {
    page : string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage ) => void; 
}

//  The component takes in an object destructured from the Props type, which means it will receive the page prop.
const Link = ({ page, selectedPage, setSelectedPage}:Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    // here we are forcing it to treat it as enum types
    // replacing all the spaces
  return (

    // This JSX expression inserts the value of the page prop
    // into the content of the <AnchorLink> component. 
    // For example, if page is "Home", the resulting output 
    // would be something like <AnchorLink>Home</AnchorLink>.

    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        // this will be the link to where we are redirecting our page to
        onClick={() => setSelectedPage(lowerCasePage)}>

        { page }

        {/* we are going to make our page component dynamic 
        hence we are using it here as props */}

        {/* the page prop is used to make the Link component 
        dynamic, meaning it will render different content based 
        on the value of the page prop. */}

    </AnchorLink>
  )
}

export default Link