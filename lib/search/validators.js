import { VALID_STATES, VALID_TYPES, VALID_TAGS } from "../constants";

/**
 * Takes in an array of states the user wants to
 * query and validates them against the allowed states
 * @param {array} states 
 */
export const validateStates = (states) => {
    return VALID_STATES.some(valid_state => states.includes(valid_state));
};

/**
 * Takes in an array of types the user wants to query
 * and validates them against the allowed types
 * @param {types} types 
 */
export const validateTypes = (types) => {
    return VALID_TYPES.some(valid_type => types.includes(valid_type));
};

/**
* Takes in an array of tags the user wants to query
 * and validates them against the allowed tags
 * @param {array} tags 
 */
export const validateTags = (tags) => {
    return VALID_TAGS.some(valid_tag => tags.includes(valid_tag));
};
