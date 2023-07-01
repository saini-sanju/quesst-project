import styles from "./rightComponent.module.css";
import React from "react";
import quest from "../../assets/quest.png";
import { AiOutlineCopyright } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

function RightComponent() {
  return (
    <div className={styles.body}>
      <div className={styles.myshadow}>
        <div className={styles.imgdiv}>
          <img src={quest} alt="quest.png" className={styles.imgwidth}/>
        </div>
      </div>

      <div className={`${styles.myshadow}  mt-3`}>
        <div className="d-flex">
          <p className={`${styles.outline} ms-3 mt-3`}>
            <span>
              <AiOutlineCopyright />
            </span>
          </p>
          <p className={`${styles.questtech} mt-3`}>
            2019-2021 Quesst Technologies
          </p>
        </div>
        <p className={`${styles.allright} ms-3`}>All rights reserved</p>
        <p className={`${styles.version} ms-3`}>Version 1.0.0</p>
        <div className={`${styles.aboutdiv} d-flex ms-3`}>
          <p className={styles.diva}>About</p>
          <p className={styles.divp}>Help</p>
          <p className={styles.divp}>Privacy</p>
          <p className={styles.divp}>Terms</p>
        </div>
        <hr />
        <div className="d-flex ms-3 pb-3">
          <small className={`${styles.outline} d-flex`}>
            <span>
              <AiOutlineShop />
            </span>
           <p className="ms-2"> Advertise with Quesst</p> 
          </small>
          <h6 className={styles.outlines}>
            <small className="badge bg-secondary rounded-pill ms-4">Soon</small>
          </h6>
        </div>
      </div>

      <div className={`${styles.myshadow} d-flex bg-white mt-3`}>
        <p className="ms-3 mt-2">
          <span>
            <BsTranslate />
          </span>
        </p>
        <p className="p1 ms-3 mt-2">English</p>
        <p className="p1 ms-3 mt-2">
          <span>
            <AiOutlineDown />
          </span>
        </p>
      </div>
    </div>
  );
}
export default RightComponent;
