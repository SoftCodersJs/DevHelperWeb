import React from 'react';
import {useState} from 'react';
import A from'../../componentes/Button';
import logo from "../../assets/logo.png"; 
import "./style.css";
import EditorJS  from'@editorjs/editorjs'
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import Paragraph from '@editorjs/paragraph';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
const Askques = () => { 
    const editor = new EditorJS({
    holder: 'editorjs',
/** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */
   tools:{
       header:Header,
       delimiter: Delimiter,
       paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      embed: Embed,
      image: Image,
   }
}
);  
    const [spans,setSpans] = useState([]);
    const [revisar,setRevisar]= useState('Revisar');

    function addTag(){
      let inpunt = document.querySelector('.tags input').value;
      setSpans((spans)=>spans += `<span>#${inpunt}</span>`);
      console.log(spans);
      document.querySelector('.tags input').value = '';
    };
    
    function MudarButt(){
      setRevisar('Enviar pergunta');
    }
    return (
      <div className="body">
        <header> 
        	<a href="/home"> <img src={logo} alt="logo" className="logo" /></a>
        	<a className="menu-link" href="/Login">faça uma pergunta</a>
     		</header>
       	<main id='1'> 
          <div className="container">
            <h2>Título</h2>
            <input placeholder='Qual é sua duvida,pequeno gafanhoto ?' type="text" />
            <br/>
            <h3>Corpo</h3>
            <div class="container_editor">
                <div id="editorjs"></div>
            </div>
          </div>
          <div className='tags'>
            <input placeholder='Digite Tags...' type="text" />
            <button onClick={addTag}>Add Tag</button>
            <div className="enquetes" dangerouslySetInnerHTML={{__html:spans}}> 
            </div> 
          </div>
          <A text={MudarButt}>{revisar}</A>
       	</main>
      </div>
    )
}

export default Askques