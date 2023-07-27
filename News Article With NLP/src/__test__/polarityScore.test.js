// Import the JS file to be tested
import {polarityScore} from "../client/js/polarityScore";

describe("Score Tag is formatted correctly", () => {
    test(`Score Tag "P+" becomes "very positive"`, () => {
        const tag1 = "P+";
        expect(polarityScore(tag1)).toBe("very positive");
    });
    test(`Score Tag "P" becomes "positive"`, () => {
        const tag2 = "P";
        expect(polarityScore(tag2)).toBe("positive");
    });
    test(`Score Tag "NEU" becomes "neutral"`, () => {
        const tag3 = "NEU";
        expect(polarityScore(tag3)).toBe("neutral");
    });
    test(`Score Tag "N" becomes "negative"`, () => {
        const tag4 = "N";
        expect(polarityScore(tag4)).toBe("negative");
    });
    test(`Score Tag "N+" becomes "very negative"`, () => {
        const tag5 = "N+";
        expect(polarityScore(tag5)).toBe("very negative");
    });
    test(`Score Tag "NONE" becomes "no sentiment"`, () => {
        const tag6 = "NONE";
        expect(polarityScore(tag6)).toBe("no sentiment");
    });
    test(`No Score Tag becomes "N/A"`, () => {
        const tag7 = "";
        expect(polarityScore(tag7)).toBe("N/A");
    });
});