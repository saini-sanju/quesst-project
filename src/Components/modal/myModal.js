import styles from "./myModal.module.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";

function Example({ show, handleClose, data }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>
            <div>
              <h5 className="fw-bold ">Questions</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body> */}
        <div className={styles.ongoing}>
          <p>{data.status}</p>
          <h5 className={styles.test}>{data.content}</h5>
          <div className={styles.iconbody}>
            <div
              className={`${styles.logodiv} d-flex justify-content-center align-items-center rounded-circle nav-icon ms-3`}
            >
              <span className="fs-4 fw-bold">M</span>
            </div>
            <p className={styles.malikp}>
              Mlikh Lakhani
              <span className="ms-1">
                <BsFillCheckCircleFill />
              </span>
              <span className="ms-3">a day ago</span>
              <span className="ms-3">
                <BsGlobeCentralSouthAsia />
              </span>
            </p>
            <div className={`${styles.icon} float-end`}>
              <p>
                <span className={styles.icons}>
                  <BsChatLeftDots />
                </span>
                <span className={styles.icons}>
                  <BsHeart />
                </span>
                <span className={styles.icons}>
                  <BsBell />
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
          </div>
        </div>
        <hr />
        {data.reactions.comments.map((item, index) => {
          return (
            <>
              <div key={index} className={styles.bodydiv}>
                <div className={styles.iconbody}>
                  <div
                    className={`${styles.logodiv} d-flex justify-content-center align-items-center rounded-circle nav-icon ms-3`}
                  >
                    <span className="fs-4 fw-bold">M</span>
                  </div>
                  <h6 className={styles.answerdiv}>{item}</h6>
                  <div className={`${styles.mldiv} d-flex`}>
                    <p>Mlikh Lakhani</p>
                    <span>
                      <BsFillCheckCircleFill />
                    </span>
                    <h6 className={styles.authordiv}>
                      <small className="badge bg-secondary rounded-pill ms-2">
                        Author
                      </small>
                    </h6>
                    <h6>
                      <span className={`${styles.daydiv} ms-2`}>a day ago</span>
                    </h6>
                  </div>
                  <p className={styles.founddiv}>
                    Founder & CTO Quoted Infotech
                  </p>
                  <div className={`${styles.icons} float-end`}>
                    <p>
                      <span className={styles.hthumb}>
                        <BsHandThumbsUp />
                      </span>
                      <span>
                        <BsThreeDotsVertical />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })}

        {/* </Modal.Body> */}
        {/* <Modal.Footer> */}
        <div className={`${styles.foter} modal-footer bg-light`}>
          <span className={styles.mychat}>
            <BsChatLeftDots />
          </span>
          <input
            type="text"
            placeholder="Write a comment...."
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
        <div className={`${styles.btndiv} d-flex`}>
          <p className={styles.pdiv}>Close</p>
          <p className={styles.pdiv1}>Comment</p>
        </div>
        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Example;
