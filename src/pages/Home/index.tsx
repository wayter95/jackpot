import React, { useState, useEffect } from 'react';
import loadList from '../../utils/symbolsFiles';


import './styles.css';
const Home = () => {
    const listA = loadList();
    const listB = loadList();
    const listC = loadList();

    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');

    useEffect(() => {
        const getA = listA[0].symbol
        const getB = listB[3].symbol
        const getC = listC[1].symbol
        setA(getA)
        setB(getB)
        setC(getC)
    },[])
    function handle(){
        
    }
    return (
        <div id="page-home">
            <div className="header">
                <h1> JACKPOT</h1>
            </div>
            <div className="content">
                <div className="jackpotContent">
                    <img src={a} alt="teste"/>
                </div>
                <div className="jackpotContent">
                <img src={b} alt="teste"/>
                </div>
                <div className="jackpotContent">
                <img src={c} alt="teste"/>
                </div>
            </div>
            <div className="rodape">
                <button type="button">Girar</button>
            </div>
        </div>
    )
}

export default Home;