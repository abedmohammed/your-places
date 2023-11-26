import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mohammed Abed",
      image:
        "https://www.abedm.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmohammed.e634b373.webp&w=3840&q=75",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
