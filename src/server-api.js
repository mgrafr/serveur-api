// -----------------------------------------------------------------------------
// Server api REST client.
//
// Two endpoints are all this integration needs:
//   - GET   /backup
//      
// -----------------------------------------------------------------------------

import { createLogger } from '@gladysassistant/integration-sdk';
// import { isExpired, refreshTokens } from './oauth.js';

const logger = createLogger({ name: 'server-api' });

export const SERVERAPI_URL = 'http://localhost:3002/';

const REQUEST_TIMEOUT_MS = 20_000;

/** Error carrying the HTTP status, so callers can tell a quota from a bug. */
export class ServerApiError extends Error {
  /**
   * @param {number} status the HTTP status returned by the Daikin cloud
   * @param {string} message the human readable reason
   */
  constructor(status, message) {
    //super(message);
    this.name = 'ServerApiError';
    this.status = status;
    /** The daily/minute quota is spent: retrying now only makes it worse. */
    this.isRateLimited = status === 429;
    /** The session is dead beyond a refresh: the user must reconnect. */
    this.isAuthError = status === 401 || status === 403;
  }
}

export class ServerApi {
 
  /**
   *.
   * 
   */
  async getServer() {
    const respose = await this.request('GET', '/');
     return response ;
  }
  }
