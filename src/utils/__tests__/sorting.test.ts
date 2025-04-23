import { addTotalMedals, sortCountries } from '../sorting';
import { Country, SortType } from '@/types';
import {describe, it} from "node:test";
import expect from "expect";

describe('addTotalMedals', () => {
    it('should add total medal count to each country', () => {
        const countries: Country[] = [
            { code: 'USA', gold: 10, silver: 5, bronze: 7 },
            { code: 'CAN', gold: 5, silver: 8, bronze: 4 }
        ];

        const result = addTotalMedals(countries);

        expect(result[0].total).toBe(22); // 10 + 5 + 7
        expect(result[1].total).toBe(17); // 5 + 8 + 4
    });

    it('should not modify the original array', () => {
        const countries: Country[] = [
            { code: 'USA', gold: 10, silver: 5, bronze: 7 }
        ];

        const result = addTotalMedals(countries);

        expect(result).not.toBe(countries); // Should return a new array
        expect(countries[0].total).toBeUndefined(); // Original should be unchanged
    });
});

describe('sortCountries', () => {
    const countries: Country[] = [
        { code: 'USA', gold: 9, silver: 7, bronze: 12, total: 28 },
        { code: 'NOR', gold: 11, silver: 5, bronze: 10, total: 26 },
        { code: 'CAN', gold: 10, silver: 10, bronze: 5, total: 25 },
        { code: 'GER', gold: 8, silver: 6, bronze: 5, total: 19 },
        { code: 'NED', gold: 8, silver: 7, bronze: 9, total: 24 }
    ];

    it('should sort by gold medals, with silver as tiebreaker', () => {
        const sortType: SortType = 'gold';
        const sortedCountries = sortCountries(countries, sortType);

        expect(sortedCountries[0].code).toBe('NOR'); // 11 gold
        expect(sortedCountries[1].code).toBe('CAN'); // 10 gold
        expect(sortedCountries[2].code).toBe('USA'); // 9 gold

        // Test tiebreaker: NED and GER both have 8 gold
        // NED has 7 silver, GER has 6 silver, so NED should come first
        expect(sortedCountries[3].code).toBe('NED');
        expect(sortedCountries[4].code).toBe('GER');
    });

    it('should sort by silver medals, with gold as tiebreaker', () => {
        const sortType: SortType = 'silver';
        const sortedCountries = sortCountries(countries, sortType);

        expect(sortedCountries[0].code).toBe('CAN'); // 10 silver

        // Test tiebreaker: USA and NED both have 7 silver
        // USA has 9 gold, NED has 8 gold, so USA should come first
        expect(sortedCountries[1].code).toBe('USA');
        expect(sortedCountries[2].code).toBe('NED');
    });

    it('should sort by bronze medals, with gold as tiebreaker', () => {
        const sortType: SortType = 'bronze';
        const sortedCountries = sortCountries(countries, sortType);

        expect(sortedCountries[0].code).toBe('USA'); // 12 bronze
        expect(sortedCountries[1].code).toBe('NOR'); // 10 bronze

        // Test tiebreaker: No ties in this test case for bronze
    });

    it('should sort by total medals, with gold as tiebreaker', () => {
        const sortType: SortType = 'total';
        const sortedCountries = sortCountries(countries, sortType);

        expect(sortedCountries[0].code).toBe('USA'); // 28 total
        expect(sortedCountries[1].code).toBe('NOR'); // 26 total
        expect(sortedCountries[2].code).toBe('CAN'); // 25 total

        // Test tiebreaker: No ties in this test case for total
    });

    it('should handle empty array', () => {
        const sortedCountries = sortCountries([], 'gold');
        expect(sortedCountries).toEqual([]);
    });

    it('should not modify the original array', () => {
        const originalOrder = [...countries];
        sortCountries(countries, 'gold');

        expect(countries).toEqual(originalOrder);
    });
});