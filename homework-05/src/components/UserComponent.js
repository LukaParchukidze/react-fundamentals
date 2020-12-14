const UserComponent = (props) => {
  return (<div>
    <h1>{props.user.name} - {props.user.email}</h1>
    <img src={props.image.thumbnailUrl} alt={props.image.title} />
  </div>);
}

export default UserComponent;