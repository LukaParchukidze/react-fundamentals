import Post from './post.js';

const Posts = [
    { title: "Post 1", text: "description 1"},
    { title: "Post 2", text: "description 2"},
    { title: "Post 3", text: "description 3"},
    { title: "Post 4", text: "description 4"},
    { title: "Post 5", text: "description 5"}
]

const image = "https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png"

const Content = (props) => {
    return (<article className={props.variant}>
        {Posts.map((post) => (
            <Post title={post.title} text={post.text} image={image}/>
        ))}
    </article>);
}

export default Content;