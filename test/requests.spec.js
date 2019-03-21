import nock from "nock";
import { mockRequestReturn } from "./constants";
import { fetch } from "../lib/search/requests";

test('it should return expected user and 200', () => {
    nock('https://mock.api.com')
        .get('/breweries')
        .reply(200, mockRequestReturn);
    
    return fetch('https://mock.api.com/breweries').then((data) => expect(JSON.parse(data)).toEqual(mockRequestReturn));
});

test('it should fail making the request', () => {
    nock('https://mock.api.com')
        .get('/breweries')
        .reply(404, null);
    return fetch('https://mock.api.com/breweries')
        .catch((err) => expect(err.toString()).toEqual("Error: Failed to complete request with status code: 404"));
});
