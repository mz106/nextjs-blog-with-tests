declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_FIRBASE_URI: string;
        NODE_ENV: 'development' | 'production';
      }
    }
  }