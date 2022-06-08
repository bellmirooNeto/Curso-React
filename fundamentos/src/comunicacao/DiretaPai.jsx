import DiretaFilho from "./DiretaFilho"

export default function DiretaPai(props) {
    return (
        <div>
            <DiretaFilho nome="João" idade={15} nerd={false} />
            <DiretaFilho nome="Fernando" idade={25} nerd={true} />
            <DiretaFilho nome="Fábio" idade={18} nerd={false} />
        </div>
            
    )
}