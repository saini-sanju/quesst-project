import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { BsPencil } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Example from "../ofcanvas";

function MyNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <Example show={show} handleClose={handleClose} />
      <Navbar expand="md" className="MyNavbar d-md-flex" fixed="top">
        <Container className="d-md-flex">
          <Navbar.Toggle
            onClick={handleShow}
            className="ms-2"
            aria-controls="responsive-navbar-nav"
          />
          <h1 className="text-primary me-auto font-weight-bold hNav">
            Quesst
            <sub>
              <small id="small">Beta</small>
            </sub>
          </h1>
          <div className="">
            <Nav className=" d-flex flex-row iconsSize">
              <Nav.Link href="#home">
                <Button variant="primary" className=" d-none d-md-block">
                  <i className="Ask">
                    <BsPencil />
                  </i>
                  Ask Question
                </Button>
              </Nav.Link>
              <Nav.Link href="#link" className="ms-3">
                <p className="mybtn">
                  <BsFillEnvelopeFill />
                </p>
              </Nav.Link>
              <Nav.Link href="#link" className="ms-3">
                <p className="mybtn">
                  <BsFillBellFill />
                </p>
              </Nav.Link>
              <Nav.Link href="#link" className="ms-3">
                <p className="mybtn">
                  <BiSearch />
                </p>
              </Nav.Link>
              <Nav.Link href="#link" className="ms-3">
                <div className="d-flex justify-content-center align-items-center rounded-circle circleSpan">
                  <span className=" fs-3">M</span>
                </div>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
