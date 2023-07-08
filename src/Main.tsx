import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

function render(App: ComponentType) {
  const container = document.getElementById('root') as HTMLElement;
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <RecoilRoot>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
