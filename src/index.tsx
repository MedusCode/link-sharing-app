import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

async function enableMSW() {
  const { worker } = await import('./mocks/browser');

  await worker.start({
    serviceWorker: {
      url: `${process.env.PUBLIC_URL}/mockServiceWorker.js`,
    },
    onUnhandledRequest: 'bypass',
  });
}

enableMSW().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
});
