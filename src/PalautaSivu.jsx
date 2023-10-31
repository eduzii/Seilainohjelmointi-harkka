import  { useState } from 'react';
import { haeAutot, tallennaAutot, haeVaratutAutot, tallennaVaratutAutot } from './storage.jsx';

const PalautaSivu = () => {
    const [rekisterinumero, setRekisterinumero] = useState('');
    const [viesti, setViesti] = useState('');

    const palautaAuto = () => {
        const varatut = haeVaratutAutot();
        const palautettavaAuto = varatut.find(auto => auto.rekisterinumero === rekisterinumero);

        if (!palautettavaAuto) {
            setViesti('Autoa ei löydy');
            return;
        }

        const uusiVaratutLista = varatut.filter(auto => auto.rekisterinumero !== rekisterinumero);
        tallennaVaratutAutot(uusiVaratutLista);

        const autot = haeAutot();
        autot.push(palautettavaAuto);
        tallennaAutot(autot);

        setViesti('Auto palautettu!');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Rekisterinumero"
                value={rekisterinumero}
                onChange={e => setRekisterinumero(e.target.value)}
            />
            <button onClick={palautaAuto}>Palauta</button>
            {viesti && <p>{viesti}</p>}
            
        </div>
    );
};

export default PalautaSivu;
