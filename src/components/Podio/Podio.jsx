import React from 'react';

const PodioForm = () => {
  const formEmbedCode = `
    <iframe 
      src="https://podio.com/webforms/123456/abcdef" 
      width="100%" 
      height="600" 
      frameborder="0" 
      allowtransparency="true" 
      style="border:none;">
    </iframe>`;

  return (
    <div>
      {/* Inject the raw HTML iframe code */}
      <div dangerouslySetInnerHTML={{ __html: formEmbedCode }} />
    </div>
  );
};

export default PodioForm;
