import imgSeries from "./assets/site-series.png"
import imgLista from "./assets/lista.png"
import imgImc from "./assets/imc.png"
import imgBook from "./assets/playbook.png"
import imgCarros from "./assets/carros.png"

function Projetos () {
    return (
<>
<div>
    <h2 className="tituloProj">Projetos</h2>

<div id="audioBook">
<article className="card">
    <a href="https://camilaromao.github.io/playbook/" target="_blank"  rel="noopener noreferrer">Audiobook</a>
    <img src={imgBook} alt="Foto do site de audiobook"/> 
      <p>Desenvolvido com React, Vite, HTML, CSS e Javascript.</p>
</article>
</div>

<div id="dicasSeries">
<article className="card">
    <a href="https://camilaromao.github.io/camila-dorameira/" target="_blank"  rel="noopener noreferrer">Dicas de series</a>
   <img src={imgSeries} alt="Foto do site dicas de séries" />
    <p>Desenvolvido com HTML, CSS e Javascript.</p>
</article>
</div>

<div id="carros">
<article className="card">
    <a href="https://camilaromao.github.io/projeto-carros/" target="_blank"  rel="noopener noreferrer">Carros esportivos</a>
   <img src={imgCarros} alt="Foto de carros esportivos" />
    <p>Desenvolvido com HTML, CSS e Javascript.</p>
</article>
</div>

<div id="listaTerefas">
<article className="card">
    <a href="https://camilaromao.github.io/listatarefas/" target="_blank"  rel="noopener noreferrer">Lista de tarefas</a>
    <img src={imgLista} alt="Foto do site de lista"/> 
    <p>Desenvolvido com HTML, CSS e Javascript.</p>
</article>
</div>

<div id="imc">
<article className="card">
    <a href="https://camilaromao.github.io/calculadoraimc/" target="_blank"  rel="noopener noreferrer">Calculadora IMC</a>
    <img src={imgImc} alt="Foto do site calculadora IMC"/> 
     <p>Desenvolvido com HTML, CSS e Javascript.</p>
</article>
</div>
    </div>

</>

    )
}

export default Projetos