/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  readonly VITE_API_END_POINT: string;
  readonly VITE_USE_MOCK: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
