const { fetch, Request, Response, Headers } = require('undici');

global.fetch = fetch;
global.Request = Request;
global.Response = Response;
global.Headers = Headers;