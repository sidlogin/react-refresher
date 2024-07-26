import { Link } from "react-router-dom"
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/fetchData">Fetch Data</Link>
                <Link to="/memo">Memo</Link>
                <Link to="/form">Form</Link>
            </div>
        </>
    )
}

export default Navigation;