import React, { useEffect, useRef, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestRandomUser,
  removeUser,
} from "../redux/reducers/randomUserSlice";
import PropTypes from "prop-types";

const ScrollGenerator = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.randomUser);
  const randomUser = useSelector((state) => state.randomUser.users);
  const isLoading = useSelector((state) => state.randomUser.isLoading);
  const hasError = useSelector((state) => state.randomUser.hasError);
  const pageNumber = useSelector((state) => state.randomUser.pageNumber);
  const refEl = useRef(null);

  useEffect(() => {
    dispatch(requestRandomUser()); //fetch N amount of users
  }, []);

  useEffect(() => {
    if (refEl.current) {
      refEl.current.addEventListener("scroll", (e) => {
        const {
          scrollHeight,
          scrollTop,
          offsetHeight,
          offsetTop,
          clientTop,
          clientHeight,
        } = e.target;
        console.log(
          `${scrollHeight}, scrollHeight`,
          "\n",
          `${scrollTop}, scrollTop`,
          "\n",
          `${offsetHeight}, offsetHeight = clientHeight`,
          "\n",
          `${clientHeight}, clientHeight`,
          "\n",
          `${offsetTop}, offsetTop`,
          "\n",
          `${clientTop}, clientTop`,
          "\n"
        );
        if (scrollTop + offsetHeight >= scrollHeight && !isLoading) {
          console.log("equal");
          dispatch(requestRandomUser());
        }
      });
    }
  }, []);
  return (
    <div>
      <div
        ref={refEl}
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        <h1>Infinite scroll</h1>
        {randomUser.map((user, index) => {
          const {
            name: { title, first, last },
            picture: { large },
            id: { value: asId },
          } = user;
          return (
            <div key={index} id={asId} onClick={() => dispatch(removeUser())}>
              <img src={large} alt={`${title} ${first} ${last}`} />
              <p>{`${title} ${first} ${last}`}</p>
            </div>
          );
        })}
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>Loading failed</p>}
      </div>
    </div>
  );
};

ScrollGenerator.propTypes = {};

export default ScrollGenerator;
