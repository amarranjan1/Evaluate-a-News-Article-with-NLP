// Import the JS file to be tested
import { isValidURL } from "../client/js/inputURLChecker";

describe("check if URL is valid", () => {
    test(`URL returns true while having "www." and ".com" format`, () => {
        const url1 = "www.url1.com";
        expect(isValidURL(url1)).toBe(true);
    });

    test(`URL returns true while having "https://" prefix`, () => {
        const url2 = "https://www.url2.com";
        expect(isValidURL(url2)).toBe(true);
    });

    test(`URL returns true while having "http://" prefix`, () => {
        const url3 = "http://www.url3.com";
        expect(isValidURL(url3)).toBe(true);
    });

    test(`URL is valid while having missing prefix`, () => {
        const url4 = "url4.com";
        expect(isValidURL(url4)).toBe(true);
    });

    test(`URL is invalid while having missing prefix & suffix`, () => {
        const url5 = "url5com";
        expect(isValidURL(url5)).toBe(false);
    });

    test(`URL is invalid while having space character in the name`, () => {
        const url6 = "www.u r l 6.com";
        expect(isValidURL(url6)).toBe(false);
    });
    
});