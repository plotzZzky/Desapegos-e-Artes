export default function Card(props) {

    function go_to_profile() {
        location.href = `https://shopee.com.br/desapegoseartesdagabi`
    }

    return (
        <div className='card' onClick={props.show_modal}>
            <img className='card-img' src={props.data.cover}></img>
            <a style={{display: 'none'}}> {props.data.category} </a>
            <button className="order-btn" onClick={go_to_profile}>
                <a className='card-name'> {props.data.name} </a>
                <a className='card-price'> R$ {props.data.price} </a> </button>
        </div>

    )
}