import React from "react";
import { Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import image from "../assets/delivery-man.svg";

export default function NavBar() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home"> Doña Matilda </Navbar.Brand>{" "}
      <Navbar.Brand href="#About"> Nosotros </Navbar.Brand>{" "}
      <Navbar.Brand href="#Product"> Productos </Navbar.Brand>{" "}
      <Navbar.Brand href="#Contact"> Contacto </Navbar.Brand>{" "}
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand href="#Cart">
          <CartWidget img={image}> </CartWidget>{" "}
        </Navbar.Brand>{" "}
      </Navbar.Collapse>{" "}
    </Navbar>
  );
}
