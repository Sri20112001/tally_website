const ContactItem = ({
  icon: Icon,
  title,
  type,
  value,
  color = "text-gray-600",
}) => {
  // Generate the appropriate href
  const href =
    type === "mobile"
      ? `https://wa.me/${value.replace(/\s+/g, "")}` // remove spaces
      : type === "email"
      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${value}`
      : null;

  return (
    <div
      title={type === "mobile" ? "Contact on Whatsapp" : "Email us At"}
      className="flex items-start gap-4"
    >
      {/* Icon container */}
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 shadow-sm bg-gray-50 hover:bg-gray-100 transition-colors ${color}`}
      >
        <Icon className={`w-6 h-6 ${color}`} />
      </div>

      {/* Text */}
      <div>
        <p className="font-semibold text-xl text-gray-800">{title}</p>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-bold hover:text-blue-800 transition-all duration-300"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
