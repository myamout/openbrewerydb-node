import { fetch } from "./requests";
import { BASE_QUERY, VALID_STATES, ALL_BREWERIES, VALID_TYPES } from "../constants";

const BY_STATE = "by_state=";
const BY_NAME = "by_name=";
const BY_TAGS = "by_tags=";
const BY_TYPE = "by_type=";

const formatRequestFilter = (states, names, tags, types) => {
    let queries = [];
    states.forEach((state) => {
        if (VALID_STATES.includes(state)) {
            queries.push(`${BY_STATE}${state}&`);
        }
    });
    names.forEach((name) => {
        queries.push(`${BY_NAME}${name}&`);
    });
    types.forEach((type) => {
        if (VALID_TYPES.includes(type)) {
            queries.push(`${BY_TYPE}${type}&`);
        }
    });
    const filterParams = queries.join("");
    return filterParams.substring(0, filterParams.length - 1);
};

export const filter = (states = [], names = [], tags = [], types = []) => {
    const filterParams = formatRequestFilter(states, names, tags, types);
    return fetch(`${BASE_QUERY}${filterParams}`);
};
