import SocialMediaIcons from "../components/SocialMediaIcons";
import LineGradient  from "../components/LineGradient";


const Footer = ()  => {
     return(
        <footer className="h-56 pt-10">
            <LineGradient/>
          <div className=" w-5/6 mx-auto">
          <br/>
          <br/>
            <SocialMediaIcons />
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-lg text-gray-800 ">Gustavo A. Cortes Medina</p>
                <p className="font-playfair font-semibold text-md text-gray-800 text-lg">@2024 .All Rights Reserved.</p>
            </div>
         </div>
        </footer>
     )
}

export default Footer;