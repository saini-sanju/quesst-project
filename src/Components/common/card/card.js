import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import Example from "../../modal/myModal";
// import data from "../../data.json";
import styles from "./card.module.css";

const Card = ({ mydata }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
     
      <Example show={show} handleClose={handleClose} data={mydata} />
      <div className={`${styles.bodyshadow} bg-white mt-3 pb-3 pt-2`}>
        <p className={`${styles.bookMarkIcon} float-end`}>
          <span>
            <BsBookmark />
          </span>
        </p>
        <p className={styles.statusp}>{mydata.status}</p>
        <p className={styles.contentp}>{mydata.content}</p>
        <div>
          <div
            className={`${styles.logobody} d-flex justify-content-center align-items-center rounded-circle nav-icon ms-3`}
          >
            <span className="fs-3 fw-bold">M</span>
          </div>
          <p className={styles.logodiv}>
            Mlikh Lakhani
            <span className="ms-1">
              <BsFillCheckCircleFill />
            </span>
            <span className="ms-3">a day ago</span>
            <span className="ms-3">
              <BsGlobeCentralSouthAsia />
            </span>
          </p>
          <div className={`${styles.icondiv} float-end d-none d-sm-block`}>
            <p>
              <span className={styles.smcount}>{mydata.reactions.comments.length}</span>
              <span className={styles.chat}>
                <>
                  <button className={styles.btn} onClick={handleShow}>
                    <BsChatLeftDots />
                  </button>
                </>
              </span>
              <span className={styles.chat}>
                {mydata.reactions.likes} <BsHeart />
              </span>
              <span className={styles.chat}>
                {mydata.reactions.notifications} <BsBell />
              </span>
              <span>
                <BsThreeDotsVertical />
              </span>
            </p>
          </div>
          <p className={`${styles.people} d-flex`}>
            <span>
              <BsPeople />
            </span>
            <p className="ms-3"> Doha</p>
          </p>
          {/* xs-div modal */}
          <div className="mb-4 d-sm-none d-block">
            <div className={styles.hrdiv}>
              <hr />
              <div
                className={`${styles.sdiv} mb-4 d-sm-none d-block d-flex justify-content-between`}
              >
                <div className={styles.chatIcond}>
                  <span>
                    <>
                      <button className={styles.btn} onClick={handleShow}>
                        <BsChatLeftDots />
                      </button>
                    </>
                  </span>
                </div>
                <div>
                  <span>
                    {mydata.reactions.likes} <BsHeart />
                  </span>
                </div>
                <div className="d-flex">
                  <div className={styles.bellIcon}>
                    <span>
                      {mydata.reactions.notifications} <BsBell />
                    </span>
                  </div>
                  <div className={styles.dotIcon}>
                    <span>
                      <BsThreeDotsVertical />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
