/// <reference types="vite/client" />

declare module '@smile_identity/smart-camera-web';

declare namespace JSX {
    interface IntrinsicElements {
      'smart-camera-web': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }