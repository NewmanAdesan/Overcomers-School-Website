
import React, { ImgHTMLAttributes } from 'react';

// interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
//   // Add any additional props if needed
// }

const ShkulaLogoWhite: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    src='/ShkulaLogoWhite.png'
    alt="Shkula Logo"
    {...props}
  />
);

export default ShkulaLogoWhite;

