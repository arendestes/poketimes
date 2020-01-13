

const initState = {
    posts: [
        {id: "1", title: "Poke ball throwing", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam hic dignissimos voluptatem minima quasi, qui vitae iste fuga ducimus, provident maxime fugiat laudantium culpa, placeat officiis quod itaque veniam officia quidem explicabo excepturi assumenda! Tempora dolor eos molestiae quisquam."},
        {id: "2", title: "Feeding Your Pokemon", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam hic dignissimos voluptatem minima quasi, qui vitae iste fuga ducimus, provident maxime fugiat laudantium culpa, placeat officiis quod itaque veniam officia quidem explicabo excepturi assumenda! Tempora dolor eos molestiae quisquam."},
        {id: "3", title: "Finding Trainer Friends", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam hic dignissimos voluptatem minima quasi, qui vitae iste fuga ducimus, provident maxime fugiat laudantium culpa, placeat officiis quod itaque veniam officia quidem explicabo excepturi assumenda! Tempora dolor eos molestiae quisquam."}
    ]
}

const rootReducer = (state = initState, action)=>{
    if(action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post=> action.id !== post.id);
        return{
            ...state,
            posts: newPosts
        }
        
    }
    return state
}

export default rootReducer;