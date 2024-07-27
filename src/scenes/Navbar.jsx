import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from '../assets/menu-icon.jpg';
import CloseIcon from '../assets/CloseIcon.png';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-emerald-300" : ""} hover:text-emerald-300 transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    const handleMenuToggle = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <nav className="z-40 w-full fixed top-0 py-6 bg-gray-800">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-2xl font-bold text-emerald-300">GC</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold text-emerald-300">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Education" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Achievements" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                ) : (
                    <button className="w-20 h-20 rounded-full bg-gray-800 p-2" onClick={handleMenuToggle}>
                        <img src={menuIcon} alt="menu-icon" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed z-50 right-0 bottom-0 h-full bg-gray-600 w-64">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-4">
                            <button onClick={handleMenuToggle}>
                                <img src={CloseIcon} alt="Close-icon" className="w-6 h-6" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-4 ml-4 text-lg text-white">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Education" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Achievements" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
