import React from "react";
import Card from "../common/card/card";
import { BsFillGearFill } from "react-icons/bs";
import { BsFlower3 } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import styles from "./middle.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { yourActionCreator } from "../../redux/action/action";
import Skeleton from "./skeletons/skeletons";

function Middle() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:300/feeds")
      .then((res) => {
        dispatch(yourActionCreator(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  const data = useSelector((state) => {
    return state.data;
  });
  console.log(data, "121");
  return (
    <div className="mt-2">
      <div className={`${styles.bodydiv} card bg-light`}>
        <div className="d-flex ms-3">
          <h1 className={styles.head}>My Community</h1>
          <p className="ms-auto fw-bolder">
            <h5 className={styles.headGear}>
              <span>
                <BsFillGearFill />
              </span>
            </h5>
          </p>
        </div>
      </div>
      <div className={`${styles.bodysecond} bg-white`}>
        <p className={styles.content}>
          <span className={styles.flower}>
            <span className="ms-3 fs-5">
              <BsFlower3 />
            </span>
          </span>
          {" Good afternoon Malik, have a Question?"}
          <span className={`${styles.books} float-end`}>
            <span>
              <BsBook />
            </span>
          </span>
        </p>
      </div>
      <div>
        {data.length > 0 ? (
          data.map((item, index) => <Card key={index} mydata={item} />)
        ) : (
          <div>
            <Skeleton />

            <Skeleton />
          </div>
        )}
      </div>
    </div>
  );
}
export default Middle;
