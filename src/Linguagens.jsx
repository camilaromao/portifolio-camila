import imgFigma from "./assets/figma.png"
import imgReact from "./assets/icone-react.png"

function Linguagens () {
    return (
    <section> 
     <h2 className="tituloTecno">Tecnologias e ferramentas</h2>

       <div className="iconsTecno">

       <p><i className="bi bi-filetype-html" aria-label="HTML"></i></p>

        <p><i className="bi bi-filetype-css" aria-label="CSS"></i></p>

       <p><i className="bi bi-javascript" aria-label="Javascript"></i></p>

       <img src={imgFigma} alt="Figma"></img>

      <img src={imgReact} alt="React"></img>

       <p><i className="bi bi-git" aria-label="Git"></i></p>
       </div>
    </section>
    )
}

export default Linguagens