import React from "react";
import { despierta_tu_gigante } from "../../assets";
const PdfViewer = () => {
  return (
    <div className="h-auto">
      <iframe
        src={despierta_tu_gigante}
        width="100%"
        height="800px"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
