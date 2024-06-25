import React from "react";
import { useGetUsersQuery } from "../../context/api/userApi";

function Admin() {
  const { data } = useGetUsersQuery();

  console.log(data?.data?.users);

  const adminData = data?.data?.users?.map((el) => <li>{el?.LastName}</li>);

  return (
    <div>
      <ul>{adminData}</ul>
    </div>
  );
}

export default Admin;
