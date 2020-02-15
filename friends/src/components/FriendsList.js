import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {

  const [listFriends, setListFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("this is res.data in FriendsList", res.data);
        setListFriends(res.data)
      })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h2>My Friends</h2>
      {listFriends.map(friend => {
        return (
          <div className="friends-card">
            <h3>Name: {friend.name}</h3>
            <h3>Age: {friend.age}</h3>
            <h3>Email: {friend.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;