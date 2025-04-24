import { renderHook, waitFor } from '@testing-library/react';
import { useMedalData } from '../useMedalData';
import { API_URL } from '@/utils/constants';

const originalConsoleError = console.error;
beforeEach(() => {
    console.error = jest.fn();
});
afterEach(() => {
    console.error = originalConsoleError;
});

describe('useMedalData', () => {
    const mockMedalData = [
        { code: 'USA', gold: 9, silver: 7, bronze: 12 },
        { code: 'NOR', gold: 11, silver: 5, bronze: 10 }
    ];

    beforeEach(() => {
        global.fetch = jest.fn();
    });

    it('should fetch medal data and add totals', async () => {
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => mockMedalData
        });

        const { result } = renderHook(() => useMedalData());

        // Initial state should be loading with empty data
        expect(result.current.loading).toBe(true);
        expect(result.current.countries).toEqual([]);
        expect(result.current.error).toBeNull();

        await waitFor(() => expect(result.current.loading).toBe(false));

        // After loading, should have data with totals
        expect(result.current.loading).toBe(false);
        expect(result.current.countries.length).toBe(2);
        expect(result.current.countries[0].total).toBe(28); // 9 + 7 + 12
        expect(result.current.countries[1].total).toBe(26); // 11 + 5 + 10
        expect(result.current.error).toBeNull();

        // Check if fetch was called correctly
        expect(global.fetch).toHaveBeenCalledWith(API_URL);
    });

    it('should handle API error', async () => {
        // Mock API error
        global.fetch = jest.fn().mockRejectedValueOnce(new Error('API Error'));

        const { result } = renderHook(() => useMedalData());

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(result.current.loading).toBe(false);
        expect(result.current.countries).toEqual([]);
        expect(result.current.error).toBe('Failed to load medal data. Please try again later.');
    });

    it('should handle non-ok response', async () => {
        // Mock non-ok response
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: false,
            status: 404,
            statusText: 'Not Found'
        });

        const { result } = renderHook(() => useMedalData());

        await waitFor(() => expect(result.current.loading).toBe(false));

        // Should set error state
        expect(result.current.loading).toBe(false);
        expect(result.current.countries).toEqual([]);
        expect(result.current.error).toBe('Failed to load medal data. Please try again later.');
    });
});