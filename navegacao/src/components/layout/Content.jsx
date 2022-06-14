import './Content.css'

import { Routes, Route} from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Params from '../../views/examples/Params'
import NotFound from '../../views/examples/NotFound'


export default function Content(props) {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/params/:id" element={ <Params /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </main>
    )
}