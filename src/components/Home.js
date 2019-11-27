import React from 'react';
import Rainbow from "../hoc/Rainbow"
function Home(){
    return(
        <div className="container">
            <h4 className="center">Home</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum vero sit, consectetur repudiandae libero quod aperiam quaerat quos praesentium nam! Fugit reprehenderit quod libero minima delectus impedit necessitatibus aspernatur blanditiis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis fugit nesciunt cupiditate deleniti iure reprehenderit sapiente ipsum inventore, non quas alias dolore tempora voluptates, assumenda accusamus at quos nostrum?</p>
        </div>
    )
}


export default Rainbow(Home);
