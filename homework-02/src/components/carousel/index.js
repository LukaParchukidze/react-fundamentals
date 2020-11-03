import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: "0",
      images: [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
        "https://images.pexels.com/videos/3163534/free-video-3163534.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://www.iliketowastemytime.com/sites/default/files/imagecache/blog_image/summer-road-trip-hd-wallpaper-by-harley-davidson-iltwmt.jpg",
      ],
    };
  }

  decreaseCounter = () =>
    this.setState({
      count:
        this.state.count === "0"
          ? `${this.state.images.length - 1}`
          : `${this.state.count - 1}`,
    });

  increaseCounter = () =>
    this.setState({
      count:
        this.state.count === `${this.state.images.length - 1}`
          ? "0"
          : `${Number(this.state.count) + 1}`,
    });

  render = () => {
    return (
      <div>
        <button onClick={this.decreaseCounter}>&lt;&lt;</button>
        <button onClick={this.increaseCounter}>&gt;&gt;</button>
        <br /> <br />
        <img
          src={this.state.images[this.state.count]}
          alt="Carousel instance."
        />
      </div>
    );
  };
}

export default Carousel;
