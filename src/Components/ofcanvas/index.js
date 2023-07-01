import styles from "./style.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import LeftSaid from "../leftComponent/leftSaidbar";

function Example({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <div>
          < LeftSaid />
        </div>
      </Offcanvas>
    </>
  );
}

export default Example;
