import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSave }) => {
  const [user, setUser] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split("."); 
  
    setUser((prev) => {
      const updated = { ...prev };
      let current: any = updated;
  
      keys.forEach((key, idx) => {
        if (idx === keys.length - 1) {
          current[key] = value; 
        } else {
          current[key] = { ...current[key] }; 
          current = current[key]; 
        }
      });
  
      return updated;
    });
  };
  

  const handleSave = () => {
    const newUser = { ...user, id: Date.now() };
    onSave(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="username"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="address.street"
            placeholder="Street"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="address.city"
            placeholder="City"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="website"
            placeholder="Website"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="company.name"
            placeholder="Company Name"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
