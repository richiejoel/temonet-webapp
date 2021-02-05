import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone';

import './CardPreview.scss';
import NoImage from "../../assets/svg/no-image.svg";

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

function CardPreview(props) {
    const [files, setFiles] = useState<any>([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs:JSX.Element = files.map(file => (
    <div className={`thumb`} key={file.name}>
      <div className={`thumbInner`}>
        <img
          src={file.preview}
          className={`img`}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

    return (
        <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {!thumbs ? 
        <img className="img-drop" src={NoImage}/> :
        <div className={`thumbsContainer`}>
        {thumbs}
      </div>
}
      </div>
      
    </div>
  );
    
}

export default CardPreview;
