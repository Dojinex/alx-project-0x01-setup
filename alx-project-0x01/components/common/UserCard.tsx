import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 my-4">
      <h2 className="text-xl font-bold text-blue-800 mb-2">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-indigo-600 underline cursor-pointer">{website}</p>

      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-700">Company</h4>
        <p className="text-gray-600">{company.name}</p>
        <p className="italic text-gray-500">{company.catchPhrase}</p>
      </div>

      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-700">Address</h4>
        <p className="text-gray-600">
          {address.street}, {address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
