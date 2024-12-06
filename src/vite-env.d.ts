/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FLIGHTS_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
