import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "./styles.css";

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');
  
  const onDrop = useCallback(acceptedFiles => {
    setSelectedFileUrl(URL.createObjectURL(
      acceptedFiles[0]
    ));
    onFileUploaded(acceptedFiles[0]);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return(
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      { selectedFileUrl ? 
        <img src={selectedFileUrl} alt="point_thumbnail" /> 
      : <p>
          <FiUpload />
          Imagem do estabelecimento
        </p>
      }
    </div>
  )
}

export default Dropzone;