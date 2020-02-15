import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriends = props => {
  const [newFriend, setNewFriend] = useState({
    id: new Date(),
    name: '',
    age: 0,
    email: ''
  });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
    console.log("this is name: ", newFriend.name);
    console.log("this is age: ", newFriend.age);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log("this is res in AddFriends.js", res);
        props.getData();
      })
      .catch(err => {
        console.log("invalid login", err);
      });
    setNewFriend({
      id: new Date(),
      name: '',
      age: 0,
      email: ''
    })
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}> 
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />

          <label className="">Age: </label>
          <input
            type="number"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
          />
          <button className="">Add Friend</button>
        </form>
    </div>
  );
};

export default AddFriends;