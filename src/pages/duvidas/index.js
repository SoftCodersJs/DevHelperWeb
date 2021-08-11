import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/59972145.jpg";
import "./style.css";

const Doubt = () => {
    return (
       	<div className="body">
       	  	<header> 
        		<a href="/home"> <img src={logo} alt="logo" className="logo" /></a>
        		<a className="menu-link" href="/Login">faça uma pergunta</a>
     		</header>
       	  	<div className="filtro">
       	  	 <h3>Filtro</h3>
       	  	 <select>
                <option value="" selected>Selecione tecnologias</option>
                <option value="">JavaScript</option>
                <option value="">Css</option>
                <option value="">Html5</option>
                <option value="">C#</option>
                <option value="">C++</option>
                <option value="">python</option>
                <option value="">Java</option>
                <option value="">PHP</option>
                <option value="">Ruby</option>
                <option value="">PERL</option>
                <option value="">Swift</option>
                <option value="">Go</option>
                <option value="">R</option>
            </select>
       	  </div>
       	  <main>
            <article>
              <div className='profile'>
               <img  src={user}/> <p>Joneivison Oliveira - <span>8h</span> atrás</p>
              </div>
              <div>
                <p> Aqui fica o corpo da dúvida, onde o usuário colocará sua duvida com código, imagens e outras coisas.
Aqui            fica o corpo da dúvida, onde o usuário colocará sua duvida com código, imagens e outras coisas.
Aqui            fica o corpo da dúvida, onde o usuário colocará sua duvida com Aqui fica o corpo da dúvida, onde o usuário colocará sua duvida com código, imagens e outras coisas.
Aqui            fica o corpo da dúvida, onde o usuário colocará sua duvida com código, imagens e outras coisas.
Aqui            fica o corpo da dúvida, onde o usuário colocará sua duvida com...<a href='#'>Ver mais</a></p>
                <div class="enquetes">
                 <a href="#">Javascript</a>  <a href="#">html</a>  <a href="#">html-css</a>
                  <button>Responder</button>
                </div> 
              </div>
            </article>
       	  </main>
        </div>
    )
}

export default Doubt