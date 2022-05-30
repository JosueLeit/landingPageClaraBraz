import "./services.css"
import brain from "../images/icons/brain.svg"


export default function Services() {
  return (
    <div className="containerServices">
    <h2 className="headlineServices">SERVIÇOS</h2>  
    <h1 className="headLine">Como posso ajudar você?</h1>
    <p className="descriptionServices">Toque em "Saiba mais" para entender mais sobre como funciona na prática.</p><br/>
    <div className="boxService"> 
      <img className="iconBrain" src={brain} alt="icone cérebro"/>
      <h6>Terapia Transpessoal Sistemica</h6>
      <a href="#">Saiba mais &gt;</a>
    </div>
    </div>      
      
)
}