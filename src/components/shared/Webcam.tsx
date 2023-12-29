import React, { useRef, useEffect } from 'react';
import '@smile_identity/smart-camera-web';

interface SmileIdentityCameraProps {
  captureId: string;
  documentCaptureModes: string;
}

export const SmileIdentityCamera: React.FC<SmileIdentityCameraProps> = ({ captureId, documentCaptureModes }) => {
  const smartCameraRef = useRef<any>();

  useEffect(() => {
    const smartCamera = smartCameraRef.current;

    const handleCaptureSuccess = (event: Event) => {
      // Handle capture success event
      console.log('Capture success:', (event as CustomEvent).detail);
    };

    const handleCaptureFailure = (event: Event) => {
      // Handle capture failure event
      console.error('Capture failure:', (event as CustomEvent).detail);
    };

    const handleImagesComputed = async (event: Event) => {
      console.log('imagesComputed event received:', (event as CustomEvent).detail);
      try {
        const response = await postContent((event as CustomEvent).detail);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    smartCamera.addEventListener('capture-success', handleCaptureSuccess);
    smartCamera.addEventListener('capture-failure', handleCaptureFailure);
    smartCamera.addEventListener('imagesComputed', handleImagesComputed);

    return () => {
      smartCamera.removeEventListener('capture-success', handleCaptureSuccess);
      smartCamera.removeEventListener('capture-failure', handleCaptureFailure);
      smartCamera.removeEventListener('imagesComputed', handleImagesComputed);
    };
  }, []);

  const postContent = async (data: any) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch('/', options);
      const json = await response.json();

      return json;
    } catch (error) {
      throw error;
    }
  };

  return (
    <smart-camera-web
      ref={smartCameraRef}
      capture-id={captureId}
      document-capture-modes={documentCaptureModes}
    />
  );
};


export const Biometric: React.FC = () => {
  // Customize props based on your requirements
  const cameraProps = {
    captureId: 'back', // You can adjust this based on your needs
    documentCaptureModes: 'camera,upload', // Adjust as needed
  };

  return (
    <div>
      <SmileIdentityCamera {...cameraProps} />
    </div>
  );
};
