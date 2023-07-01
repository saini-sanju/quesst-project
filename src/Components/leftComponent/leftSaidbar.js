import React from "react";
import styles from "./leftSaidBar.module.css";
import { BsBag } from "react-icons/bs";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BsFillTicketPerforatedFill } from "react-icons/bs";

function LeftSaid() {
  return (
    <div className={styles.myshadow}>
      <div className="d-flex pt-2 ms-2">
        <a className="nav-link" href="#">
          <div
            className={`${styles.NavIcon} d-flex justify-content-center align-items-center rounded-circle`}
          >
            <span className="fw-bold fs-1 text-black">M</span>
          </div>
        </a>
        <div className="ms-2">
          <h3 className={`${styles.ourstyle} fw-bold mb-0 text-md  mt-1`}>
            Malik Lkhani
          </h3>
          <p
            className={`${styles.oursty} text-black text fw-bold mt-2 mb-1 text-md`}
          >
            <span>
              <BsBag />
            </span>
            <span className="ms-1">Founder & CTO</span>
          </p>
          <p
            className={`${styles.oursty} text-black fw-bold text mt-2 mb-1 text-md`}
          >
            <span>
              <BsFillBuildingsFill />
            </span>
            <span className="ms-1">Quoted Infotech</span>
          </p>
        </div>
      </div>
      {/* Table */}
      <hr />
      <div className={`${styles.tbstyle} d-flex justify-content-around mx-3`}>
        <div className="mt-3 fw-bold justify-content-around">
          <h6 className="fw-bold">Questions</h6>
          <p>23</p>
        </div>
        <div className={` ${styles.tbsstyle} vr`}></div>
        <div className="mt-3 fw-bold justify-content-around">
          <h6 className="fw-bold">Answeres</h6>
          <p>23</p>
        </div>
      </div>
      <hr />
      {/* table-end */}
      <div className={styles.card}>
        <div>
          <h4 className={`${styles.mycard} text-black`}>Feeds</h4>
          <div className={`${styles.mycards} link-style`}>
            <h5 className={`${styles.smcard}`}>
              <a className="text-black" href="#">
                {"My Community"}
              </a>
            </h5>
            <h5 className={`${styles.smcard}`}>
              <a className="text-black" href="#">
                {"My Questions "}
              </a>
            </h5>
          </div>
        </div>
        <div className={`${styles.hoverli} mt-2`}>
          <h6 className="text-black fw-bold mt-3">Highlights</h6>
          <ul className={styles.listgroup}>
            <li className="d-flex justify-content-between align-items-center">
              Answered Questions
              <span>16</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              Bookmarked Questions
              <span>1</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              Liked Questions
              <span>4</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              Followed Questions
              <span>3</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              Hidden Questions
              <span>0</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom */}
      <hr />
      <div className={`${styles.bottm} justify-content-center`}>
        <small className={styles.small}>
          <h3>
            <span>
              <BsFillTicketPerforatedFill />
            </span>
          </h3>
        </small>
        <h5 className={styles.smallh}>Create Support Ticket</h5>
      </div>
      {/* Bottom-end */}
    </div>
  );
}
export default LeftSaid;
