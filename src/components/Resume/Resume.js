import React from 'react';
import './Resume.css';
import resume from '../../assets/Resume-EGM.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
return (
    <div className="res">
        {/* <h2 className=''>Resume</h2> */}
        
        <Document
            file={resume}
            onLoadError={console.error}
            style={{width: '100vw', height: 'auto', justify: 'center'}}
        >
            <Page pageIndex={0} />
        </Document>
    </div>
);
}

export default Resume;

