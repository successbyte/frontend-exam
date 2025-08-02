// // Get the current hostname
// const FRONTEND_DOMAIN = window.location.hostname;

// // Derive the backend domain
// const BACKEND_DOMAIN = `backend.${FRONTEND_DOMAIN}`;

// // Define the base URL for API requests
// export const BASE_URL =
//   FRONTEND_DOMAIN === "localhost"
//     ? process.env.REACT_APP_BASE_URL || "/api"
//     : `http://${BACKEND_DOMAIN}/api`;

declare global {
  interface Window {
    _env_?: {
      REACT_APP_BASE_URL?: string;
    };
  }
}

export const BASE_URL =
  window._env_?.REACT_APP_BASE_URL || process.env.REACT_APP_BASE_URL || "/api";
