import { useRef, useState } from "react";
import styles from "../styles/formularioCarga.module.css";


export default function FormularioSubida({isDragging, setIsDragging, files, setFiles, processFiles, fileInputRef, handleFileInput}) {
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(Array.from(e.dataTransfer.files));
  };
   const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h2>Formulario de Carga</h2>
      <div
        className={`${styles.dropzone} ${isDragging ? styles.dragging : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileSelector}
      >
        <div className={styles.dropzoneContent}>
          <span className={styles.icon}>📁</span>
          <p>Arrastra archivos aquí o haz clic para seleccionar</p>
          {/* <span className={styles.hint}>Máximo {maxFiles} archivos</span> */}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className={styles.fileInput}
          onChange={handleFileInput}
          multiple
        />
      </div>
    </div>
  );
}
