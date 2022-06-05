declare global {
    namespace NodeJS {
      interface ProcessEnv {
        FIRBASE_URI: string;
      }
    }
  }