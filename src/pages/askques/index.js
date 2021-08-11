import React from 'react';
import A from'../../componentes/Button';
import Div from '../../componentes/Div'
import {useState} from 'react';
import EditorJS from '@editorjs/editorjs';
import logo from "..  /../assets/logo.png"; 
import "./style.css";


const Askques = () => {
  //editor 
    const Header = require('@editorjs/header');
    const Paragraph = require('@editorjs/paragraph');
    const SimpleImage = require('@editorjs/simple-image');
    const Embed = require('@editorjs/embed');
    const Delimiter = require('@editorjs/delimiter');
    const editor = new EditorJS({
        holder: 'editorjs',
    /** 
         * Available Tools list. 
         * Pass Tool's class or Settings object for each Tool you want to use 
         */
        tools:{
           header:Header,
           delimiter: Delimiter,
           Paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          embed: Embed,
          image: SimpleImage,
        }
    });
    const [spans,setSpans] = useState([]);
    const [revisar,setRevisar]= useState('Revisar');

    function addTag(){
      let pai = document.querySelector('.tags');
      let inpunt = document.querySelector('.tags input').value;
      setSpans((spans) => spans += '<span>#'+inpunt+'</span>');
      inpunt = '';
      
    };
    
    function MudarButt(){
      setRevisar('Enviar pergunta')
      console.log(revisar);
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
            <div id="editorjs"></div>
          </div>
          <div className='tags'>
            <input placeholder='Digite Tags...' type="text" />
            <button onClick={addTag}>Add Tag</button>
            <Div className="enquetes">
              {spans}
            </Div> 
          </div>
          <A text='#1'onClick={MudarButt}>{revisar}</A>
       	</main>
      </div>
    )
}

export default Askques