import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import React, { useState } from "react";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(posts);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">User Profiles</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {users.map(({ id, name, email, username, address, phone, website, company }) => (
            <UserCard
              key={id}
              id={id}
              name={name}
              username={username}
              email={email}
              address={address}
              phone={phone}
              website={website}
              company={company}
            />
          ))}
        </div>
        {isModalOpen && (
          <UserModal
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
