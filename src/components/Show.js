import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const url =  "http://localhost:8081/getpdf1"
  

export default function Show() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [zoom, setZoom] = useState(300);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }

    function zoomPage(offset) {
      setZoom(previousZoom => previousZoom +offset);
    }
  
    function zoomPlus(){
      zoomPage(100);
    }

    function zoomMinus(){
      zoomPage(-100);
    }
    return (
      <>
      <div>
      <p>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</p>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>Previous</button>
          <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>Next</button>
          <button type="button" onClick={zoomPlus}>+</button>
          <button type="button" onClick={zoomMinus}>-</button>
        </div>

        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page width={zoom}  pageNumber={pageNumber} className="custom-class-name-1 custom-class-name-2"/>
        </Document>
        
        <div>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>Previous</button>
          <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>Next</button>
        </div>
      </>
    );
  }
