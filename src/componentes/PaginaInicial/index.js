import { useState } from 'react';
import './style.css';

function PaginaInicial(){
    const [ novoTexto, setNovoTexto ] = useState();

    function GerarTexto (){
        setNovoTexto('Olá, Mundo!')
    }

    function Reset(){
        setNovoTexto('')
    }

    return(
        <div className="card">
            <h2 className='texto'>{novoTexto}</h2>
            <p>Click no botão parar Gerar um texto:</p>
            <div className='botoes'>
                <button onClick={GerarTexto}>Gerar Texto</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </div>
    );
}

export default PaginaInicial;