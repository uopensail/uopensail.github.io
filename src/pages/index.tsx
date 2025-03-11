import React from 'react';
import { Redirect } from '@docusaurus/router'; // v2.4+ 专用

export default function CustomRedirect() {
  // 示例：根据条件重定向
  const shouldRedirect = true; // 你的逻辑
  
  return shouldRedirect ? (
    <Redirect to="https://www.uopensail.com" />
  ) : (
    <div></div>
  );
}