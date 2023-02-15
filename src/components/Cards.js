import React, { useState } from "react";
import Users from "../data.js";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/user/userSlice";
import { TiDelete } from "react-icons/ti";
import "../cards.css";
//initializing our useDispatch"

export const Card = () => {
  const users = useSelector((state) => state.user.user);
  console.log(users);
  //search bar
  const [filteredList, setFilteredList] = useState(users);
  const filterBySearch = (e) => {
    e.preventDefault();
    //accessing input value
    const query = e.target.value;
    //creating copy of users
    var updatedUsers = [...users];
    //including all items that include the search query
    updatedUsers = updatedUsers.filter((user) => {
      return (
        user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        user.job.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        user.age.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        user.country.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        user.hobbies[0].toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        user.hobbies[1].toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    //trigger render with updated values
    setFilteredList(updatedUsers);
    // if (searchInput.length > 0) {
    //   users.find((user) => {
    //     return user.match(searchInput);
    //   });
  };
  console.log(filteredList);
  //initializing our useDispatch
  const dispatch = useDispatch();

  const removeUser = (user) => {
    dispatch(deleteUser(user));
  };

  return (
    <div>
      <h1>User's Contact Details</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={filterBySearch}
        className="search-box"
      />
      <div className="cards_container">
        {users.map(
            (
              user,
              index //user is the payload
            ) => {
              return (
                <div key={index} className="card">
                  <div style={{ flexDirection: "row" }}>
                    <div className="card_button">
                      <h1
                        style={{ color: "red", marginLeft: "225px" }}
                        onClick={() => removeUser(user)}
                      >
                        {/* //user is the payload */} <TiDelete />{" "}
                      </h1>
                    </div>
                    <div className="card_title">{user.name}</div>
                  </div>
                  <div className="card_body">
                    <h3 className="card_details">Age: {user.age} Years Old</h3>
                    <h3 className="card_details">Job Title: {user.job}</h3>
                    <h3 className="card_details">
                      Country of Origin: {user.country}
                    </h3>
                    <h4 className="card_details">
                      Hobbies: {user.hobbies.join(", ")}
                    </h4>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};
