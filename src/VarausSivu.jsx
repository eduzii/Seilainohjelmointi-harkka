import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { haeAutot, tallennaAutot, haeVaratutAutot, tallennaVaratutAutot } from './storage.jsx';
import './Styles.css';


const VarausSivu = () => {
    console.log("VarausSivu renderöityy");
    const [autot, setAutot] = useState([]);
    console.log(autot)

    useEffect(() => {
        const ladatutAutot = haeAutot();
        setAutot(ladatutAutot);
    }, []);

    const varaaAuto = (id) => {
    // Poistetaan auto saatavilla olevien autojen listalta
    const uusiLista = autot.filter(auto => auto.id !== id);
    tallennaAutot(uusiLista);
    setAutot(uusiLista);

    // Lisätään auto varattujen autojen listaan
    const varattavaAuto = autot.find(auto => auto.id === id);
    const varatut = haeVaratutAutot();
    varatut.push(varattavaAuto);
    tallennaVaratutAutot(varatut);
};

    return (
        <BrowserRouter>
            <div>
                <h2>Varattavissa olevat autot</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Merkki</th>
                            <th>Malli</th>
                            <th>Rekisterinumero</th>
                            <th>Toiminto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autot.map(auto => (
                            <tr key={auto.id}>
                                <td>{auto.merkki}</td>
                                <td>{auto.malli}</td>
                                <td>{auto.rekisterinumero}</td>
                                <td>
                                    <button onClick={() => varaaAuto(auto.id)}>Varaa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </BrowserRouter>
    );
};

export default VarausSivu;
