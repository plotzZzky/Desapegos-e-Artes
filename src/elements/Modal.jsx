import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight)


export default function Modal(props) {
    const [getNumber, setNumber] = useState(0);

    const images = props.data.images ? props.data.images.map((url) => (
        <img className="modal-img" src={url} style={{display: 'none'}}></img>
    )) : null

    function go_to_profile() {
        location.href = `https://shopee.com.br/desapegoseartesdagabi`
    }

    function check_modal(){
        let modal = document.getElementById("Modal");
        modal.click(
            close_modal(modal)
        );
    }

    function close_modal(modal) {
        modal.style.display = 'none'
        document.body.style.position = ''
    }

    function show_next_image() {
        let images = document.getElementsByClassName('modal-img')
        let n = images.length <= getNumber + 1 ? 0 : getNumber + 1
        show_image(images, n)
    }

    function show_previous_image() {
        let images = document.getElementsByClassName('modal-img')
        let n = getNumber == 0 ? images.length - 1 : getNumber - 1
        show_image(images, n)
 
    }

    function show_image(images, n) {
        let i;
        for (i = 0; i < images.length; i++) {
            images[i].style.display = 'none'
        }
        images[n].style.display = 'block'
        setNumber(n)
    }

    function show_cover() {
        let images = document.getElementsByClassName('modal-img')
        show_image(images, 0)
    }

    useEffect(() => {
        show_cover()
    }, [props.data.images])

    return (
        <div className="modal-background" id="Modal" onClick={check_modal}>
            <div className='modal-card'  onClick={e => e.stopPropagation()}>
                <div className="modal-list-images">
                    <img className='modal-img' src={props.data.cover}></img>
                    {images}
                    <button  className="modal-btn-minus" onClick={show_previous_image}> <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> </button>
                    <button className="modal-btn-plus" onClick={show_next_image}> <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> </button>
                </div>
                <div className="modal-infos">
                    <h2 className='card-name'> {props.data.name} </h2>
                    <p className='modal-price'> R$ {props.data.price} </p> 
                    <p className="card-desc"> {props.data.desc}</p>
                    <button className="order-btn" onClick={go_to_profile}> Visualizar na loja! </button>
                </div>
            </div>
        </div>
    )
}