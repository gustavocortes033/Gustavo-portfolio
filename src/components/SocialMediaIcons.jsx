import linkedlnlogo from "../assets/linkedlnlogo.webp";

const SocialMediaIcons = () => {
   return (
    <div className="flex justify-center md:justify-start  gap-7">
       <a
       className="hover:opacity-50 transition duration-500"
       href="https://www.linkedin.com/in/gustavo-a-cortes-medina-2731a4306/"
       target="_blank"
       rel="noreferrer"
       >
        <img src={linkedlnlogo} alt="linkedin-link-logo" className="w-8 h-8 " />
       </a>
    </div>
   )
}

export default SocialMediaIcons;