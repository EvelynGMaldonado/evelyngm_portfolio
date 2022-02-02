import React from 'react';
import './Resume.css';
import resume from '../../assets/Resume_portfolio.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    // state = {
    //     numPages= 2,
    //     pageNumber = 1
    // }
return (
    <div className="res">
        {/* <h2 className=''>Resume</h2> */}
        <div>
            <strong style={{justify: 'right', display:"block"}}>Resume pdf version: </strong>
            <a style={{justify: 'right'}} href="https://drive.google.com/file/d/1uXEKBSWfHfhK_6yLZYlKPzQyRMP57X3d/view?usp=sharing">
                Evelyn G Maldonado Resume
            </a>
    </div>
        <Document
            file={resume}
            onLoadError={console.error}
            style={{width: '100vw', height: 'auto', justify: 'center'}}
        >
            <Page pageIndex={0} />
            <Page pageIndex={1} />
        </Document>

    </div>
    
    
);
}

export default Resume;

