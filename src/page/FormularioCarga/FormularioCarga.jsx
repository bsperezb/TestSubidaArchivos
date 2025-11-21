// Dependencies
import { useState, useRef, } from "react";

// Components
import FormularioSubida from "./components/FormularioSubida";
import TablaDocumentos from "./components/TablaDocumentos";

export default function ForumularioCarga() {
  const fileInputRef = useRef(null);
  //   const [docuents, setDocuments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const maxFiles = 5;

  const handleFileInput = (e) => {
    processFiles(Array.from(e.target.files));
    fileInputRef.current.value = "";
  };

  const processFiles = (newFiles) => {
    // debugger // eslitn-disable-line no-debugger
    if (files.length + newFiles.length > maxFiles) {
      alert(`Máximo ${maxFiles} archivos`);
      return;
    }
    const updatedFiles = [...files, ...newFiles];
    console.log('updatedFiles', updatedFiles);
    setFiles(updatedFiles);
    // TODO
    // onFilesSelected?.(updatedFiles);
  };
  return (
    <div>
      <FormularioSubida
        files={files}
        setFiles={setFiles}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
        handleFileInput={handleFileInput}
        processFiles={processFiles}
        fileInputRef={fileInputRef}
      />
      <TablaDocumentos documents={files} />
    </div>
  );
}
