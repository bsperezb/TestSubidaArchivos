
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
                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={index}>
                            <td>{doc.name}</td>
                            <td>{doc.size}</td>
                            <td>{doc.progress}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}