import {BsWhatsapp} from "react-icons/bs";

const ContactLink = ({number, href, icon: Icon = BsWhatsapp}) => {
    return (
        <a
            href={href || `https://wa.me/${number.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 group justify-center sm:justify-start text-blue-400 font-bold cursor-pointer transition-all duration-300"
        >
            <Icon className="text-green-400 group-hover:text-green-800 transition-all duration-300" size={18} />
            {number}
        </a>
    );
};

export default ContactLink;
