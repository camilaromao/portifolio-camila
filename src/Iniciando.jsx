import { useState } from "react"
import VideoAbertura from './assets/animacao-desktop.webm'

function Iniciando() {
  // Controla se o vídeo de abertura ainda está sendo exibido
  const [mostrarIntro, setMostrarIntro] = useState(true);

  const finalizarIntro = () => {
    setMostrarIntro(false);
  };

  return (
    <div className="App">
      {mostrarIntro ? (
        <div className="intro-container">
          <video
            src={VideoAbertura}
            autoPlay
            muted
            playsInline
            onEnded={finalizarIntro} // Esconde o vídeo quando ele termina
            className="intro-video"
          />
          <button onClick={finalizarIntro} className="btn-pular">
            Pular introdução
          </button>
        </div>
      ) : (
        <main className="conteudo-principal">
          <h1>Bem-vindo ao site!</h1>
          <p>Aqui fica o conteúdo normal da sua aplicação.</p>
        </main>
      )}
    </div>
  );
}

export default Iniciando
