import "./styles.css"
import brain from "../../images/icons/brain.svg"
import businessTarotMap from "../../images/icons/businessTarotMap.svg"
import familyConstelation from "../../images/icons/familyConstelation.svg"
import spiral from "../../images/icons/spiral.svg"
import tarotMap from "../../images/icons/tarotMap.svg"
import therapeuticTarot from "../../images/icons/therapeuticTarot.svg"
import yoga from "../../images/icons/yoga.svg"

export default function Services() {
  return (
    <div className="containerServices">
    <h2 className="headlineServices">SERVIÇOS</h2>  
    <h1 className="headLine">Como posso ajudar você?</h1>
    <p className="descriptionServices">Toque em "Saiba mais" para entender mais sobre como funciona na prática.</p><br/>
       <div className="firstLineServices"> 
            <div className="boxService"> 
              <img className="icon" src={brain} alt="icone cérebro"/>
              <h6>Terapia Transpessoal Sistemica</h6>
              <a href="#">Saiba mais &gt;</a>
            </div>

            <div className="boxService"> 
          <img className="icon" src={familyConstelation} alt="icone mãos ao redor de um coração"/>
          <h6>Constelação Familiar</h6>
          <a href="#">Saiba mais &gt;</a>
        </div>

        <div className="boxService"> 
          <img className="icon" src={yoga} alt="ícone posição de lotus"/>
          <h6>Yoga Dance</h6>
          <a href="#">Saiba mais &gt;</a>
        </div>

        <div className="boxService"> 
          <img className="icon" src={therapeuticTarot} alt="cartas com rostos"/>
          <h6>Tarô Terapeutico</h6>
          <a href="#">Saiba mais &gt;</a>
        </div>

        </div>

    <div className="secondLineServices">

        <div className="boxService"> 
          <img className="icon" src={businessTarotMap} alt="ícone de engrenagem com direções"/>
          <h6>Mapa Tarológico Empresarial</h6>
          <a href="#">Saiba mais &gt;</a>
        </div>

        <div className="boxService"> 
          <img className="icon" src={tarotMap} alt="icone com pessoa no centro do círculo"/>
          <h6>Mapa Tarológico Pessoal</h6>
          <a href="#">Saiba mais &gt;</a>
        </div>

        <div className="boxService2"> 
          <img className="icon2" src={spiral} alt="espiral com elementos abstratos"/>
          <h6>Tarot Livre</h6>
          <a href="#">Saiba mais &gt;</a>
        </div>
    </div>
    <br/><br/><br/>
    <button className="purpleScheduleButton"> AGENDAR UMA CONSULTA AGORA!</button>
    </div>      
      
)
}