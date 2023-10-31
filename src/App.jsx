import { useState } from 'react';
import VarausSivu from './VarausSivu';
import PalautaSivu from './PalautaSivu';
import './styles.css';

function App() {
    const [currentPage, setCurrentPage] = useState(null);

    const renderPage = () => {
        if (currentPage === 'varaus') {
            return <VarausSivu />;
        } else if (currentPage === 'palautus') {
            return <PalautaSivu />;
        }
        return null;
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Autovuokraamo</h1>
                {currentPage ? (
                    <>
                        <button className="link" onClick={() => setCurrentPage(null)}>Etusivulle</button>
                        <button className="link" onClick={() => setCurrentPage(currentPage === 'varaus' ? 'palautus' : 'varaus')}>
                            {currentPage === 'varaus' ? 'Palauta auto' : 'Varaa auto'}
                        </button>
                    </>
                ) : (
                    <div className="header-container">
                        <button className="link" onClick={() => setCurrentPage('varaus')}>Varaa auto</button>
                        <button className="link" onClick={() => setCurrentPage('palautus')}>Palauta auto</button>
                    </div>
                )}
            </header>
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;
