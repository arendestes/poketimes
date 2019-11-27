import React from 'react';
import Rainbow from "../hoc/Rainbow"
function About(){
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolorem illum esse non libero eveniet quasi nulla consequuntur delectus impedit dolores reiciendis dolor, necessitatibus voluptas dolorum vitae tenetur aspernatur neque.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis fugit nesciunt cupiditate deleniti iure reprehenderit sapiente ipsum inventore, non quas alias dolore tempora voluptates, assumenda accusamus at quos nostrum?</p>
        </div>
    )
}


export default Rainbow(About);