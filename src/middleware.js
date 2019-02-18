import { SEARCH_ORIGIN, SEARCH_DESTINATION } from "./constants/actionTypes";

/**
 * Local Storage Middleware.
 * Check for data in local storage for similar API call
 * and return the response with the cached data.
 */

const localStorageMiddleware = store => next => action => {
    // Implement caching response.
    next(action);
};

export { localStorageMiddleware };