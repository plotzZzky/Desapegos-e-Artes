import { useState } from 'react'
import NavBar from './elements/navbar'
import Logo from '../src/media/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)


export default function App() {
    const [getAnswer, setAnswer] = useState([['As peças são lavadas antes da venda?', 'Sim, todas as peças são lavadas e higienizadas antes de serem colocadas à venda.'],
    ['Como posso pagar pelas minhas compras?', 'Aceitamos pagamentos via cartão de crédito, débito e transferência bancária.'],
    ['Vocês fazem entrega para todo o país?', ' Sim, fazemos entregas para todo o país. O frete é calculado de acordo com a região de entrega.'], 
    ['Vocês oferecem trocas ou devoluções?', ' Infelizmente, não oferecemos trocas ou devoluções. Por isso, é importante verificar cuidadosamente as medidas e detalhes da peça antes de fazer a compra.'],
    ['Como posso garantir que a peça vai me servir?', 'É importante verificar cuidadosamente as medidas da peça antes de fazer a compra. Caso tenha dúvidas, entre em contato conosco e teremos prazer em ajudá-lo.']
    ]);

    function go_to_profile() {
        location.href = `https://shopee.com.br/desapegoseartesdagabi`
    }

    function show_answer(text) {
        const answer = document.getElementById("AnswerText")
        answer.innerText = text
        answer.style.visibility = 'visible'
    }

    return (
        <>
            <NavBar></NavBar>

            <div className='page'>
                <div>
                    <div className='div-big-brand'>
                        <img className='big-logo' src={Logo}></img>
                        <div>
                            <a className='big-title'> Desapegos e Artes da Gabi </a><br/>
                            <a className='subtitle'> Transforme seu guarda-roupa em uma obra de arte </a>
                        </div>
                    </div>
                    <button className='btn' onClick={go_to_profile}> 
                        <a> Veja e se apaixone! </a>
                    </button>
                </div>
            </div>

            <div className='page' id='about'>
                <a className='title'>  Quem somos... </a>
                <p className='home-text'> Nosso brechó foi criado com amor e dedicação, oferecendo uma opção de moda sustentável e única. Selecionamos cuidadosamente peças de qualidade e estilo, cada uma escolhida individualmente e higienizada. Oferecemos roupas femininas e masculinas, além de acessórios, e fazemos entregas em todo o país. Aproveite a moda de uma maneira mais sustentável e sinta a diferença de um brechó cuidadosamente criado para você. </p>
            </div>

            <div className='page' id='faq'>
                <h3 className='title'>  Dúvidas... </h3>
                <div className='align-faq'> 
                    {getAnswer.map((data) => (
                        <a className='text-question' onClick={() => show_answer(data[1])}> {data[0]}</a>
                    ))}
                </div>
                <p className='text-answer' id='AnswerText'> </p>
            </div>

            <footer>
                <a href='https://www.github.com/plotzzzky'> Dev: Plotzky <FontAwesomeIcon icon="fa-brands fa-github" /></a>
            </footer>
        </>
  )
}
