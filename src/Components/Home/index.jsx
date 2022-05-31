import "../Home/styles.css"
import logoBannerPhoto from "../../images/logoBannerPhoto.png"
import cardLogo from "../../images/cardLogo.svg"

export default function Home() {
  return (
  <>
  <div className="container">
        
        <div className="fireLabel">
                    <img src={cardLogo} className="fireLogo"alt="logo e apresentação"/> 
                    
        </div>
        <div>
            <h1 className="headLineMainBanner">Psicoterapia para
            ressignificar suas perdas</h1>

            <p className="presentation">Psicoterapia para ressignificar suas vivências. Venha aproveitar os benefícios de diversas ferramentas terapeuticas em prol do auto conhecimento, saúde física e mental</p>

            <button className="scheduleButton"> AGENDAR UMA CONSULTA </button>

            </div>
        <img src={logoBannerPhoto} className="logoPhoto"alt="foto de rosto"/>
        </div>
  </>    
)
}