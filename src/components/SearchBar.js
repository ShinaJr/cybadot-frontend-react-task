import React, { useState } from "react";
import { useSelector} from "react-redux";

export const SearchBar = () => {
  const users = useSelector((state) => state.user1.user);
  console.log(users);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    users.filter((user) => {
      return user.match(searchInput);
    });
  }
  return (
    <input
      type="text"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput}
    />
  );
};
