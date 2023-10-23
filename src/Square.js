export default function Square({value}){

    function handleClick(){
        console.log("click");
    }
    return(
        <button className="square" onClick={handleClick}>{value}</button>
    )
}

