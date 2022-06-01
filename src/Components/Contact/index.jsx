import './styles';

export function Contact() {
  return (
    <div>
    <h2>PSICOTERAPIA ONLINE</h2>
    <h1>Onde encontrar Clara Braz?</h1>
    <div>
    <img src="#" alt="" />
    <p>Os atendimentos são realizados de forma online se encaixando na sua realidade.</p>
    </div>
       <h2>Redes Sociais</h2>
          <div className="contactButtons">
          <a href="#"><img src={iconWhatsapp} alt="botão do whatsapp" /></a>
          <a href="#"><img src={iconInstagram} alt="botão do instagram" /></a>
          <a href="#"><img src={iconEmail} alt="botão do e-mail" /></a>
          </div>

    </div>
  );
}