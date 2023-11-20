import react from "react";
import ReactDOM from "react-dom";
const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

ReactDOM.render(
    
    <div>
        {/* External styling in react  */}

        {/* <h1 className="header">My Favourite Food</h1>
        <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Sandwitch</li>
        </ul> */}

        {/* Inline css in react */}

        {/* <h1 style={mystyle}>My Favourite Food</h1> */}
        {/* <ul style ={mystyle}>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Sandwitch</li>
        </ul> */}
        <h1 style={{color:"red"}}>My Favourite Food</h1>
        <ul style ={{color:"blue"}}>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Sandwitch</li>
        </ul>
    </div>,
    document.getElementById("root")
)