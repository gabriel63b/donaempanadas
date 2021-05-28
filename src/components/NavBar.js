import React from 'react'
import {Navbar} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="light">
        <Navbar.Brand href="#home">Doña Matilda</Navbar.Brand>
        <Navbar.Brand href="#About">Nosotros</Navbar.Brand>
        <Navbar.Brand href="#Product">Productos</Navbar.Brand>
        <Navbar.Brand href="#Contact">Contacto</Navbar.Brand>
      </Navbar>
    )
}