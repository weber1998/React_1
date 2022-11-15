import './Konyv.css';

function Konyv(props) {
    return (
        <div className="konyv">
            <h3>Szerző: Molnár Ferenc</h3>
            <p>Cím. A pál utcai fiúk</p>
            <span>Ár: 123 Ft</span>
            <button>Kosárba</button>
        </div>
    );
}

export default Konyv;