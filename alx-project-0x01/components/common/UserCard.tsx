import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
    return (
      <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">@{username}</p>
        </div>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Website:</strong> <a href={`http://${website}`} className="text-blue-500 underline">{website}</a>
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Address:</strong> {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
        <p className="text-gray-600">
          <strong>Company:</strong> {company.name} - {company.catchPhrase}
        </p>
      </div>
    );
  };
  
  export default UserCard;