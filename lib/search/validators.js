import { VALID_STATES, VALID_TYPES, VALID_TAGS } from "../constants";

export const validateStates = (states) => {
    return VALID_STATES.some(valid_state => states.includes(valid_state));
};

export const validateTypes = (types) => {
    return VALID_TYPES.some(valid_type => types.includes(valid_type));
};

export const validateTags = (tags) => {
    return VALID_TAGS.some(valid_tag => tags.includes(valid_tag));
};
