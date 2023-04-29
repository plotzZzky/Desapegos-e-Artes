import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faSun, faSnowflake, faRing, faSocks, faBagShopping, faBars} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight, faSun, faSnowflake, faRing, faSocks, faBagShopping, faBars )

import NavBar from "../elements/navbar"
import Card from '../elements/Card'
import './estoque.css'
import data from "../media/produtos.json"
import Modal from '../elements/Modal';


export default function Estoque() {
    const [getCategory, setCategory] = useState("");
    const [getList, setList] = useState(data.items);
    const [getInfo, setInfo] = useState([])

    const Categories = [['Verão', <FontAwesomeIcon icon="fa-solid fa-sun" />], ['Inverno', <FontAwesomeIcon icon="fa-solid fa-snowflake" />], 
    ['Acessórios', <FontAwesomeIcon icon="fa-solid fa-ring" />], ['Calçados',<FontAwesomeIcon icon="fa-solid fa-socks" /> ], 
    ['Outros', <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />]]


    function filter_food() {
        let value = document.getElementById("FilterInput").value.toLowerCase()
        let item = document.getElementsByClassName("card")
         for (let x = 0; x < item.length; x++) {
            let name = item[x].children[2].children[0].innerHTML.toLowerCase()
            if ( name.indexOf(value) > -1) {
                item[x].style.display = "flex";
            } else {
                item[x].style.display = "none";
            }
        }
    }

    function set_category(value) {
        let item = document.getElementsByClassName("card")
        for (let x = 0; x < item.length; x++) {
            let name = item[x].children[1].innerHTML
            if ( name.indexOf(value) > -1) {
                item[x].style.display = "flex";
            } else {
                item[x].style.display = "none";
            }
        }
    }

    function set_all() {
        let item = document.getElementsByClassName("card")
        for (let x = 0; x < item.length; x++) {
            item[x].style.display = "flex";
        } 
    }   

    function show_sidebar() {
        let bar = document.getElementById("sideBar")
        if (bar.className == "sidebar") {
            bar.classList.add("responsive")
        } else {
            bar.className = "sidebar"
        }
    }

    function show_modal(data) {
        let modal = document.getElementById("Modal")
        modal.style.display = "block"
        document.body.style.position = 'fixed'
        setInfo(data)
    }

    useEffect(() => {
    }, []);


    return (
        <>
            <div className="page">
                <NavBar></NavBar>
                <div className='sidebar' id='sideBar'>
                    <div className='sidebar-align-items'>
                        <div className='align-categories'>
                            {Categories.map((data) => (
                                <a className='sidebar-category' onClick={() => set_category(data[0])}> {data[1]} {data[0]} </a>
                            ))}
                            <a className='sidebar-category' onClick={set_all}> <FontAwesomeIcon icon="fa-solid fa-bars" /> Todos </a>
                        </div>    
                        <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filter_food}></input>
                    </div>
                    <div className='sidebar-icon' onClick={show_sidebar}>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" className='icon-arrow' />
                    </div>
                </div>
                
                <div className='div-cards'>
                    {getList.map((data) => (
                        <Card key={data.id} data={data} show_modal={() => show_modal(data)}></Card> 
                        ))}
                </div>
                <Modal data={getInfo}></Modal>
            </div>
        </>
    )
}