import { getCountryIndex, FLAG_WIDTH, FLAG_HEIGHT, COUNTRY_CODES } from '../flagUtils';
import {describe, it} from "node:test";
import expect from "expect";

describe('Flag Utilities', () => {
    describe('getCountryIndex', () => {
        it('should return the correct index for a country code', () => {
            // Assuming USA is in the COUNTRY_CODES array
            const usaIndex = COUNTRY_CODES.indexOf('USA');
            expect(getCountryIndex('USA')).toBe(usaIndex);
        });

        it('should return -1 for a country code that does not exist', () => {
            expect(getCountryIndex('XYZ')).toBe(-1);
        });
    });

    describe('Constants', () => {
        it('should define FLAG_WIDTH and FLAG_HEIGHT', () => {
            expect(FLAG_WIDTH).toBeDefined();
            expect(FLAG_HEIGHT).toBeDefined();
            expect(typeof FLAG_WIDTH).toBe('number');
            expect(typeof FLAG_HEIGHT).toBe('number');
        });

        it('should have COUNTRY_CODES as an array', () => {
            expect(Array.isArray(COUNTRY_CODES)).toBe(true);
            expect(COUNTRY_CODES.length).toBeGreaterThan(0);
        });
    });
});