import "./styles.css"
import profilePhoto from "../../images/profilePhoto.svg"
import rectangle from "../../images/rectangle.svg"
import iconWhatsapp from "../../images/icons/iconWhatsapp.svg"
import iconInstagram from "../../images/icons/iconInstagram.svg"
import iconEmail from "../../images/icons/iconEmail.svg"
import nameClaraBraz from "../../images/nameClaraBraz.svg"


export default function About() {
  return (
  <div className="containerAbout">
        <p className="question">Que tal batermos um papo?</p>
        <img src={rectangle} alt="fundo de tela" width="100%"/>
        <img className="photo" src={profilePhoto} alt="foto de apresentação" />
        
        <img className="brandWrited"src={nameClaraBraz} alt="Logo Marca Escrita" />

        <div>
          
          <div className="contactButtons">
          <a href="#"><img src={iconWhatsapp} alt="botão do whatsapp" /></a>
          <a href="#"><img src={iconInstagram} alt="botão do instagram" /></a>
          <a href="#"><img src={iconEmail} alt="botão do e-mail" /></a>
          </div>
          
        </div>

        <div>
        <h1 className="aboutProfessional">SOBRE A PROFISSIONAL</h1>
        
            <p className="text">Clara Braz é Psicoterapeuta Transpessoal Sistêmica formada por Jordan Campos. 
            O seu trabalho tem como foco o enfrentamento do luto, das perdas emocionais e materiais, para uma vida leve, feliz e conectada com sua essência. Além disso, atua na resolução de problemas com o acesso ao inconsciente trazendo à tona uma clareza mental definitiva para superação de traumas, medos, baixa autoestima, insegurança e outros. Também é Pós-graduanda em Tanatologia: sobre a morte e o morrer; Pós- graduanda em Neurociência e Comportamento. Possui habilitação para o uso de Florais de Bach, Iridologia, Constelação Familiar, Terapia Regressiva e Programação Neurolinguística (PNL), Tarô Terapêutico e Tarô Consciência. Facilitadora de Yoga pela Art of Living Índia e Yoga Dance – SP. Instrutora da Arte de Viver Brasil – Curso de Respiração – Happiness Program. 
            Sua primeira atuação profissional foi como Advogada. Possui quatro pós-graduações nessa área. Trabalhou em diversas empresas públicas e privadas na Bahia e Pernambuco, incluindo grande escritório trabalhista da Bahia.
            Após uma grande perda familiar, ela descobriu o caminho profundo do autoconhecimento. Daí ela percebeu que deveria se dedicar a ajudar a outras pessoas nas suas próprias questões relacionadas ao autoconhecimento e luto.
            </p>
        </div>
    
    
    </div>
  )}