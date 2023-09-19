import { useNavigate } from "react-router-dom";

const ContactCards = ({ contactList }) => {
  const navigate = useNavigate();

  const handleViewProfile = (index) => {
    navigate(`/profile/${index + 1}`);
  };
  return (
    <>
      {contactList?.map((contact, index) => (
        <figure
          className="bg-white text-white h-80  rounded-lg shadow-md"
          key={index}
        >
          <img
            alt="user"
            className="w-32 h-32 rounded-full mx-auto mt-7"
            src={contact.picture.large}
          />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contact.name.first} {contact.name.last}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">email: </span>
              {contact.email}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>
              {contact.cell}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">city: </span>
              {contact.location.city}
            </p>
            <button
              onClick={() => handleViewProfile(index)}
              className=" bg-gradient-to-r from-purple-600 via-red-400 to-yellow-500 p-1 rounded-md  text-sm font-semibold"
            >
              View Profile
            </button>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default ContactCards;
