import { useEffect, useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 50);
        return () => clearInterval(timer);
    }, []);
    return (
        <progress value={progress} max={100} />
    )
}

function TableBody({ documents }) {
    const formatSize = (size) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        if (size === 0) return 'n/a';
        const i = Math.floor(Math.log(size) / Math.log(1024));
        const value = size / Math.pow(1024, i);
        return `${value.toFixed(2)} ${sizes[i]}`;
    };
    return (
        <tbody>
            {documents.map((doc, index) => (
                <tr key={index}>
                    <td>{doc.name}</td>
                    <td>{formatSize(doc.size)}</td>
                    <td><ProgressBar /></td>
                </tr>
            ))}
        </tbody>
    )
}

export default function TablaDocumentos({ documents, setDocuments }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre del Documento</th>
                        <th>Tamaño</th>
                        <th>Progreso</th>
                    </tr>
                </thead>
                <TableBody documents={documents} />
            </table>
        </div>
    )
}