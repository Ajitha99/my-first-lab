function Div ({ uname, pwd, btntitle }) {
    return(
        <form>
            <label>{uname}</label>
            <input type= "text"></input><br></br>
            <label>{pwd}</label>
            <input type ="text"></input><br></br>
            <button>{btntitle}</button><br></br>
        </form>
    )
}

export default Div;