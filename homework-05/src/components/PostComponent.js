const PostComponent = (props) => {
  return (<div>
    {props.images.map((image) => (<img key={image.id} src={image.thumbnailUrl} alt={image.title} />))}
    {props.comments.map((comment) => (<p key={comment.id}>{comment.title}</p>))}
  </div>);
}

export default PostComponent;