export default function Square({value,SquareClick}){

    
    return(
        <button className="square" onClick={SquareClick}>{value}</button>
    )
}

