
declare namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        loop?: string;
        autoplay?: string;
        breakpoints?: string;
        effect?: string;
        'fade-effect'?: string;
        speed?: string
      };
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
  