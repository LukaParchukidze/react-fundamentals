import './post.css';

const Post = (props) => {
    return <div className="Post">
        <h4>{props.title} -</h4>
        &nbsp;
        <p>{props.text} -</p>
        &nbsp;
        <img src={props.image} alt="Image not found" />
    </div>
}

export default Post;