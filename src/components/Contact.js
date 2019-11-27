 import React from 'react';
import Rainbow from "../hoc/Rainbow";
function Contact(props){
    setTimeout(()=>{
        props.history.push("/about")
    }, 5000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia eveniet commodi odit officiis assumenda amet numquam tempora delectus suscipit eius ipsa fugit possimus dolor sunt illum, eum excepturi! Minus!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis fugit nesciunt cupiditate deleniti iure reprehenderit sapiente ipsum inventore, non quas alias dolore tempora voluptates, assumenda accusamus at quos nostrum?</p>
        </div>
    )
}


export default Rainbow(Contact);


