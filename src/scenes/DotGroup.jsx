import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage}) => {
    const selectedStyles = `relative bg-gray-800 before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-4 before:border-emerald-300 before:left-[-50%] 
    before:top-[-50%]`;

    return(
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
              <AnchorLink
            className={`${selectedPage ===  'home' ? selectedStyles: "bg-gray-800"} w-3 h-3 rounded-full`}
            href="#home"
            onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
            className={`${selectedPage ===  'skills' ? selectedStyles: "bg-gray-800"} w-3 h-3 rounded-full`}
            href="#skills"
            onClick={() => setSelectedPage('skills')}
        />


       <AnchorLink
            className={`${selectedPage ===  'education' ? selectedStyles: "bg-gray-800"} w-3 h-3 rounded-full`}
            href="#education"
            onClick={() => setSelectedPage('education')}
        />

        <AnchorLink
            className={`${selectedPage ===  'achievements' ? selectedStyles: "bg-gray-800"} w-3 h-3 rounded-full`}
            href="#achievements"
            onClick={() => setSelectedPage('achievements')}
        />
       

        <AnchorLink
            className={`${selectedPage ===  'contact' ? selectedStyles: "bg-gray-800"} w-3 h-3 rounded-full`}
            href="#contact"
            onClick={() => setSelectedPage('contact')}
        />
        </div>
    )
}

export default DotGroup;