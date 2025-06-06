import React, { useEffect, useState } from "react";
// import React, { useEffect, useState, useCallback } from "react";
import { 
  Grid, 
  // Card, CardContent
} from '@mui/material';
import { gridSpacing } from '../../store/constant';
import baseUrl from "../../navigation/base";
import axios from "axios";
import loadings from "../../assets/img/loader.gif";
import { Link } from "react-router-dom";
// import Modal from 'react-modal';
// import Carousel from 'react-images';

export default function DeanCard(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    let url = '';
    if (props.sentFrom === "resultPhotoGallery") {
      url = `${baseUrl}/gallery?type=Photo Gallery`;
    } else if (props.sentFrom === "resultNewsGallery") {
      url = `${baseUrl}/gallery?type=News Gallery`;
    } else if (props.sentFrom === "resultNewsLetter") {
      url = `${baseUrl}/gallery?type=News Letter`;
    }
    if (url) {
      getItemsDeans(url);
    }
  }, [props.sentFrom]);

  const getItemsDeans = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error('Failed to load gallery items.');
    }
  };

  // const openLightbox = useCallback((index) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  if (loading) {
    return (
      <div className="text-center">
        <img width="120" src={loadings} alt="Loading..." />
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={gridSpacing}>
        {Array.isArray(items) && items.map((user, key) => (
          <Grid item xs={12} md={4} key={key}>
            {user.type === "News Letter" ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: user.content}}></div>
                <a href={user.image.slice(0, -1)} className="link" target="_blank" rel="noreferrer">
                  {user.title}
                </a>
              </>
            ) : (
              // <Link to="#" onClick={() => openLightbox(key)}>
              //   <img style={{minWidth: '100%', maxWidth: '100%'}}
              //     src={user.image}
              //     title={user.title}
              //     alt={user.title}
              //   />
              // </Link>
              <Link className="link" to={`/galleryDetails/${user.id}`}>
                {user.title}
              </Link>
              // <Card>
              //   <CardContent>
              //     <Link to={`/galleryDetailsAll/${user.id}`} style={{ display: 'block', maxWidth: '500px' }}>
              //       <div style={{ marginBottom: '8px', fontWeight: 'bold', height: 45 }}>{user.title}</div>
              //       <div style={{ display: 'grid', gap: '4px', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 150px)', gridAutoFlow: 'dense' }}>
              //         {user.image?.split(',').slice(0, -1).slice(0, 5).map((img, index) => {
              //           const isOverlay = index === 4 && user.image.split(',').length > 5;
              //           const imageStyle = {
              //             width: '100%',
              //             height: '100%',
              //             objectFit: 'cover',
              //             gridColumn: index < 2 ? 'span 1' : 'span 1',
              //             gridRow: index < 2 ? '1' : '2',
              //             position: 'relative',
              //           };

              //           return (
              //             <div key={index} style={{ position: 'relative' }}>
              //               <img src={img.trim()} alt={`Gallery ${user.title}`} style={imageStyle} />
              //               {isOverlay && (
              //                 <div style={{
              //                   position: 'absolute',
              //                   top: 0,
              //                   left: 0,
              //                   right: 0,
              //                   bottom: 0,
              //                   backgroundColor: 'rgba(0,0,0,0.6)',
              //                   color: 'white',
              //                   display: 'flex',
              //                   alignItems: 'center',
              //                   justifyContent: 'center',
              //                   fontSize: '24px',
              //                   fontWeight: 'bold'
              //                 }}>
              //                   +{user.image.split(',').length - 5}
              //                 </div>
              //               )}
              //             </div>
              //           );
              //         })}
              //       </div>
              //     </Link>
              //   </CardContent>
              // </Card>
            )}
          </Grid>
        ))}
      </Grid>
      {/* <Modal
        style={{
          overlay: {
            zIndex: 1200,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '1000px',
            padding: '10px',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }
        }}
        isOpen={viewerIsOpen}
        onRequestClose={closeLightbox}
        contentLabel="Image Viewer"
      >
        <Carousel
          currentIndex={currentImage}
          views={items.map(item => ({
            source: `${item.image}`,
            caption: item.title
          }))}
        />
      </Modal> */}
    </div>
  );
}

// Ensure you set the app element for accessibility
// Modal.setAppElement('#root');