import { fetch } from "./requests";
import { BASE_QUERY, SEARCH_QUERY, ALL_BREWERIES, INVALID_PARAM } from "../constants";
import { validateStates, validateTypes, validateTags } from "./validators";

const BY_STATE = "by_state=";
const BY_NAME = "by_name=";
const BY_TAG = "by_tag=";
const BY_TYPE = "by_type=";

const formatRequestFilter = (states, names, tags, types) => {
    if (!validateStates(states) && states.length !== 0) {
        return INVALID_PARAM
    }

    if (!validateTypes(types) && types.length !== 0) {
        return INVALID_PARAM;
    }

    if (!validateTags(tags) && tags.length) {
        return INVALID_PARAM;
    }

    const queries = [];
    states.forEach((state) => {
        queries.push(`${BY_STATE}${state}&`);
    });
    names.forEach((name) => {
        queries.push(`${BY_NAME}${name}&`);
    });
    types.forEach((type) => {
        queries.push(`${BY_TYPE}${type}&`);
    });
    tags.forEach((tag) => {
        queries.push(`${BY_TAG}${tag}&`);
    });
    const filterParams = queries.join("");
    return filterParams.substring(0, filterParams.length - 1);
};

export const filter = (states = [], names = [], tags = [], types = [], page = 1) => {
    const filterParams = formatRequestFilter(states, names, tags, types);
    return new Promise((resolve, reject) => {
        if (filterParams !== INVALID_PARAM) {
            resolve(search(BASE_QUERY, filterParams));
        } else {
            reject("Error: Invalid parameter given to filter search...");
        }
    });
};

/**
 * Executes a search using a phrase passed in from the user
 * @param {string} phrase 
 * @param {int} page 
 */
export const searchPhrase = (phrase = "", page = 1) => {
    return search(SEARCH_QUERY, phrase, page);
};

/**
 * Executes a simple get request on the openbrewerydb API
 * @param {int} page 
 */
export const getAll = (page = 1) => {
    return fetch(`${ALL_BREWERIES}?page=${page}&per_page=50`);
};

/**
 * Performs the get request on the openbrewerydb API
 * @param {string} base 
 * @param {string} params 
 * @param {int} page 
 */
const search = (base, params, page) => {
    return fetch(`${base}${params}&page=${page}&per_page=50`);
};
