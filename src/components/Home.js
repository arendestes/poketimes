import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({
                    posts: response.data.slice(0, 5)
                })
            })
    }
    render() {
        const posts = this.state.posts;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={"/"+ post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">
                    No posts
            </div>
            );
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}


export default Home;
