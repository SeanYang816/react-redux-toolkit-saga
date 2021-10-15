import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestRandomUser,
  removeUser,
} from "./redux/reducers/randomUserSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.randomUser);
  const randomUser = useSelector((state) => state.randomUser.users);
  const isLoading = useSelector((state) => state.randomUser.isLoading);
  const hasError = useSelector((state) => state.randomUser.hasError);
  const pageNumber = useSelector((state) => state.randomUser.pageNumber);
  const refEl = useRef(null);

  useEffect(() => {
    dispatch(requestRandomUser());
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
        if (((scrollTop + offsetHeight) >= scrollHeight && !isLoading)){
          console.log('equal')
          dispatch(requestRandomUser());
        }
      });
    }
  }, []);

  return (
    <div className="App">
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
            </div>
          );
        })}
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>Loading failed</p>}

        <button style={{position: 'fixed', bottom: 0, right: 0}} onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
        }}>back to top</button>
      </div>
    </div>
  );
}

export default App;
