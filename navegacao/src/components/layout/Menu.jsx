import './Menu.css'

import { Link } from 'react-router-dom'

export default function Menu(props) {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/params/123">Params #01</Link>
                    </li>
                    <li>
                        <Link to="/params/beleza">Params #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}