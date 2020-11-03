import React from "react";

const Post = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.displayCount,
      posts: [
        { title: "title1", description: "description1" },
        { title: "title2", description: "description2" },
        { title: "title3", description: "description3" },
        { title: "title4", description: "description4" },
        { title: "title5", description: "description5" },
        { title: "title6", description: "description6" },
        { title: "title7", description: "description7" },
        { title: "title8", description: "description8" },
        { title: "title9", description: "description9" },
        { title: "title10", description: "description10" },
      ],
    };
  }

  decreaseCounter = () =>
    this.setState({
      count:
        this.state.count === "0"
          ? `${this.state.posts.length}`
          : `${this.state.count - 1}`,
    });

  increaseCounter = () =>
    this.setState({
      count:
        this.state.count === `${this.state.posts.length}`
          ? "0"
          : `${Number(this.state.count) + 1}`,
    });

  render() {
    return (
      <div>
        <button onClick={this.decreaseCounter}> - </button>
        <input type="text" value={this.state.count} />
        <button onClick={this.increaseCounter}> + </button>
        <br />
        <br />
        {this.state.posts.slice(0, this.state.count).map((post) => (
          <Post title={post.title} description={post.description} />
        ))}
      </div>
    );
  }
}

export default Posts;
