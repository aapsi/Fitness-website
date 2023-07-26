import { useState } from "react";
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

// typesript-> when you are using typessript you
// are passing down the props you need to make sure they are consistent as you pass them
// down in in a nutshell passing in the same type

// also this "type" doesnt exist on run time its only there for compile time, like before you build it
// you bundler or webpack will remove all this from the build
type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage ) => void; 

}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    // this css lets you place the two divs under parent div to the two extremes of the parent div

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"


  return <nav>
    {/* using nav because of html5 sementics, it helps with web crawlers to rank your website high */}
    <div
        className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* left side */}
                    <img alt="logo" src = {Logo}/>
                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Become a Member
                        </ActionButton>
                        </div>
                    </div>
                    ) : (
                    <button
                        className="rounded-full bg-secondary-500 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                    )}

                    </div>

            </div>

    </div>
    {/* Mobile Menu modal */}
    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px]
         bg-primary-100 drop-shadow-xl">
            {/* close icon */}
            {/* "flex justify-end p-12"-> this takes up the complete width
            and then places the close icon at the end */}
            <div className="flex justify-end p-12">
                <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400"/>
                </button>
            </div>
            {/* menu items */}
            <div className= "ml-[33%] flex flex-col gap-10 test-2xl">
                <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
         </div>
    )}

  </nav>
  
}

export default Navbar;