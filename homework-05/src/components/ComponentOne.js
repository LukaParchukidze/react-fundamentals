import { useEffect, useState } from 'react';
import { commentsUrl, imagesUrl } from './constants';
import PostComponent from './PostComponent';

const ComponentOne = () => {
  let [comments, setComments] = useState(null);
  let [images, setImages] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [error, setError] = useState(null);
  
  useEffect(() => {
      Promise.all([
        fetch(commentsUrl).then(value => value.json()),
        fetch(imagesUrl).then(value => value.json()),
      ]).then(([comments, images]) => {
        setComments(comments.slice(0, 3));
        setImages(images.slice(0, 3));
        setIsLoaded(true);
      }, error => {
          setError(error);
          setIsLoaded(true);
      });
  }, [])

  if (error) {
    return <div> {error.message} </div>
  } else if (!isLoaded) {
    return <div> Loading... </div>
  } else {
    return (<PostComponent comments={comments} images={images} />);
  }
}

export default ComponentOne;