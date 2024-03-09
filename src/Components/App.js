import '../styles/main.css'
import {ImageCard} from "./ImageCard";
import {useEffect, useState} from "react";
import { ImageAPI } from './API/ImageAPI'
import {Search} from "./Search";

const styles = {
  galleryGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5',
  searchButtonStyles: 'inline-flex justify-center p-2 rounded text-white default:bg-blue-500' +
    'hover:bg-blue-600 active:ring-2 ring-blue-400',
};

const NotFound = () => {
  return (
    <div className='h-[70vh] flex justify-center items-center'>
      <h2 className='text-5xl'>No images found</h2>
    </div>
  );
}

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
      ImageAPI.fetchImages().then(response => setImages(response));
  }, []);

  const handleSearch = (term) => {
      ImageAPI.fetchImages(term).then(response => setImages(response));
  };

  const handleTagSearch = (tag) => {
    ImageAPI.fetchImages(tag).then(response => setImages(response));
  };

  return (
    <div className='w-full min-h-screen p-2 pt-10 bg-gray-50'>
      <div className='container mx-auto'>
        <Search onSearch={handleSearch} />
        { images.length === 0 ?
          <NotFound /> :
          <div className={styles.galleryGrid}>
            {images && images.map(image => {
              return (
                <ImageCard key={image.id} id={image.id} imageUrl={image.largeImageURL} views={image.views}
                           downloads={image.downloads} likes={image.likes} tags={image.tags.split(', ')} onSearch={handleTagSearch} />
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
