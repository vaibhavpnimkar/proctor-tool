import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
        try {
          const imageSrc = webcamRef.current.getScreenshot();
          if (imageSrc) {
            setImgSrc(imageSrc);
            console.log('Captured Image:', imageSrc);
          } else {
            console.log('No image data captured.');
          }
        } catch (error) {
          console.error('Error capturing image:', error);
        }
      } else {
        console.log('Webcam reference not available.');
      }
    
    console.log('Captured Image:', imgSrc);
  }, [webcamRef]);

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} ref={webcamRef} />
      )}
      <div className="btn-container">
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
};

export default CustomWebcam;
