import React from 'react';

const HtmlViewer: React.FC = () => {
  return (
    <iframe 
      src="/cindex.html"
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Static HTML Content" // 必须的 accessibility 属性
    />
  );
};

export default HtmlViewer;