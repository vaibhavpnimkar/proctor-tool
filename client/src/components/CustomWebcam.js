import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { useImgSrc } from '../contexts/ImageContext';

const CustomWebcam = ({}) => {
  const webcamRef = useRef(null);
  const { imgSrc, onCapture } = useImgSrc();

  const capture = useCallback(() => {
    if (webcamRef.current) {
      try {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          onCapture(imageSrc); // Use onCapture to update the shared state
        } else {
          console.log('No image data captured.');
        }
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    } else {
      console.log('Webcam reference not available.');
    }
  }, [webcamRef, onCapture]);

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={200} width={600} ref={webcamRef} />
      )}
      <div className="btn-container flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={capture}>
          Capture photo
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Upload photo
        </button>
      </div>
    </div>
  );
};

export default CustomWebcam;
