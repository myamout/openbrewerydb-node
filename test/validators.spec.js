import { validateStates, validateTypes, validateTags } from "../lib/search/validators";

test('it should return true for valid state', () => {
    expect(validateStates(["new_york", "california"])).toBeTruthy();
});

test('it should return false for invalid state', () => {
    expect(validateStates(["fake_state"])).toBeFalsy();
});

test('it should return true for valid type', () => {
    expect(validateTypes(["micro"])).toBeTruthy();
});

test('it should return false for invalid type', () => {
    expect(validateTypes(["fake_type"])).toBeFalsy();
});

test('it should return true for valid tag', () => {
    expect(validateTags(["patio"])).toBeTruthy();
});

test('it should return false for invalid tag', () => {
    expect(validateTags(["invalid_tag"])).toBeFalsy();
});
