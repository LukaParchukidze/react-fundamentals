import { useEffect, useState } from 'react';
import { usersUrl, imagesUrl } from './constants';
import UserComponent from './UserComponent';

const ComponentTwo = () => {
  let [users, setUsers] = useState(null);
  let [images, setImages] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
      Promise.all([
        fetch(usersUrl).then(value => value.json()),
        fetch(imagesUrl).then(value => value.json()),
      ]).then(([comments, images]) => {
        setUsers(comments.slice(0, 3));
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
    return (users.map((_, index) => (<UserComponent key={index} user={users[index]} image={images[index]} />)));
  }
}

export default ComponentTwo;