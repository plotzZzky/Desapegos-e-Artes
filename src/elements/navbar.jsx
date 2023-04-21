import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faHouse, faBars, faShirt, faCircleQuestion, faUsers} from '@fortawesome/free-solid-svg-icons'
import Logo from "../media/logo.png"


import './navbar.css'

library.add( faHouse, faBars, faShirt, faCircleQuestion, faUsers )


export default function NavBar() {
    
    function OpenMenu() {
        let navbar = document.getElementsByClassName("menu")[0];
        if (navbar.className == "menu") {
            navbar.classList.add("responsive")
        } else {
            navbar.className = "menu"
        }
      }

    function go_to_market() {
        location.href = "/Desapegos-e-Artes/estoque/"
    }

    function go_to_about() {
        document.getElementById('about').scrollIntoView()
        let navbar = document.getElementsByClassName("menu")[0];
        navbar.className = "menu"
    }

    function show_about() {
        let url = window.location.pathname
        if (url != "/Desapegos-e-Artes/") {
            document.getElementById("aboutBar").style.display = 'none'
        }
    }

    function show_answers() {
        let url = window.location.pathname
        if (url != "/Desapegos-e-Artes/") {
            document.getElementById("faqBar").style.display = 'none'
        }
    }

    function go_to_faq() {
        document.getElementById('faq').scrollIntoView()
        let navbar = document.getElementsByClassName("menu")[0];
        navbar.className = "menu"
    }

    useEffect(() => {
        show_about()
        show_answers()
    }, []);

    return (
        <div className="navbar" id="navBar">

            <div className='navbar-align'>
                <div className="brand" onClick={() => location.href="/Desapegos-e-Artes/"}>
                    <img className='brand-logo' src={Logo}></img>
                    <h3 className="brand-name"> Desapegos e Artes da Gabi </h3>
                </div>


                <div className="menu" id="menu">
                    <a className="menu-icon" onClick={OpenMenu}>
                    <FontAwesomeIcon icon="fa-solid fa-bars fa-2xl" />
                    </a>

                    <div className="menu-item" onClick={() => location.href="/Desapegos-e-Artes/"}>
                        <a><FontAwesomeIcon icon="fa-solid fa-house icon-menu" className='icon-menu'/> Inicio </a>
                    </div>

                    <div className="menu-item" onClick={go_to_market}>
                        <a><FontAwesomeIcon icon="fa-solid fa-shirt" /> Produtos </a>
                    </div>

                    <div className="menu-item" onClick={go_to_about} id="aboutBar">
                        <a><FontAwesomeIcon icon="fa-solid fa-users icon-menu" className='icon-menu'/> Sobre </a>
                    </div>

                    <div className="menu-item" onClick={go_to_faq} id="faqBar">
                        <a><FontAwesomeIcon icon="fa-solid fa-circle-question" /> Dúvidas </a>
                    </div>

                </div>
            </div>
        </div>
    )
}