import { filter, searchPhrase, getAll } from "../lib/search/search";
import { fetch } from "../lib/search/requests";
import { mockRequestReturn, INVALID_PARAM } from "./constants";

jest.mock("../lib/search/requests");

test('it should return filtered', async () => {
    fetch.mockResolvedValueOnce(mockRequestReturn);
    const data = await filter(["new_york", "california"], ["cooper"], ["patio"], ["micro"]);
    expect(data).toEqual(mockRequestReturn);
});

test('it should return failed due to invalid state', async () => {
    try {
        await filter(["fake_state"]);
    } catch (err) {
        expect(err).toEqual("Error: Invalid parameter given to filter search...");
    }
});

test('it should return failed due to invalid type', async () => {
    try {
        await filter([], [], [], ["fake_type"]);
    } catch (err) {
        expect(err).toEqual("Error: Invalid parameter given to filter search...");
    }
});

test('it should return failed due to invalid tag', async () => {
    try {
        await filter([], [], ["fake_type"], []);
    } catch (err) {
        expect(err).toEqual("Error: Invalid parameter given to filter search...");
    }
});

test('it should return all breweries no filter', async () => {
    fetch.mockResolvedValueOnce(mockRequestReturn);
    const data = await getAll();
    expect(data).toEqual(mockRequestReturn);
});

test('it should return search results from fetch function', async () => {
    fetch.mockResolvedValueOnce(mockRequestReturn);
    const data = await searchPhrase("new_york");
    expect(data).toEqual(mockRequestReturn);
});
