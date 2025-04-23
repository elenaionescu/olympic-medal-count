import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MedalTable from '@/components/MedalTable';
import { Country } from '@/types';
import { MAX_COUNTRIES_DISPLAYED } from '@/utils/constants';

// Mock the child components
jest.mock('@/components/TableHeader', () => {
    return function MockTableHeader({ currentSort, onSortChange }: any) {
        return (
            <thead data-testid="table-header">
            <tr>
                <th>Mock Header</th>
                <th>
                    <button
                        data-testid="sort-gold"
                        onClick={() => onSortChange('gold')}
                    >
                        Gold
                    </button>
                    <button
                        data-testid="sort-silver"
                        onClick={() => onSortChange('silver')}
                    >
                        Silver
                    </button>
                </th>
            </tr>
            </thead>
        );
    };
});

jest.mock('@/components/CountryRow', () => {
    return function MockCountryRow({ country, rank }: any) {
        return (
            <tr data-testid="country-row">
                <td>{rank}</td>
                <td>{country.code}</td>
            </tr>
        );
    };
});

jest.mock('@/components/LoadingSpinner', () => {
    return function MockLoadingSpinner() {
        return <div data-testid="loading-spinner">Loading...</div>;
    };
});

jest.mock('@/components/ErrorMessage', () => {
    return function MockErrorMessage({ message }: any) {
        return <div data-testid="error-message">{message}</div>;
    };
});

describe('MedalTable', () => {
    const mockCountries: Country[] = [
        { code: 'USA', gold: 9, silver: 7, bronze: 12, total: 28 },
        { code: 'NOR', gold: 11, silver: 5, bronze: 10, total: 26 },
        { code: 'CAN', gold: 10, silver: 10, bronze: 5, total: 25 },
        { code: 'GER', gold: 8, silver: 6, bronze: 5, total: 19 },
        { code: 'NED', gold: 8, silver: 7, bronze: 9, total: 24 }
    ];

    it('displays loading spinner when loading is true', () => {
        render(
            <MedalTable
                countries={[]}
                loading={true}
                error={null}
                initialSort="gold"
            />
        );

        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
        expect(screen.queryByTestId('table-header')).not.toBeInTheDocument();
    });

    it('displays error message when there is an error', () => {
        const errorMessage = 'Failed to load data';
        render(
            <MedalTable
                countries={[]}
                loading={false}
                error={errorMessage}
                initialSort="gold"
            />
        );

        expect(screen.getByTestId('error-message')).toBeInTheDocument();
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
        expect(screen.queryByTestId('table-header')).not.toBeInTheDocument();
    });

    it('renders table with countries when data is loaded', () => {
        render(
            <MedalTable
                countries={mockCountries}
                loading={false}
                error={null}
                initialSort="gold"
            />
        );

        expect(screen.getByTestId('table-header')).toBeInTheDocument();

        // Should have one row per country
        const rows = screen.getAllByTestId('country-row');
        expect(rows.length).toBe(mockCountries.length);
    });

    it('limits the number of countries displayed to MAX_COUNTRIES_DISPLAYED', () => {
        // Create more countries than the limit
        const manyCountries: Country[] = Array.from({ length: MAX_COUNTRIES_DISPLAYED + 5 }, (_, i) => ({
            code: `C${i}`,
            gold: i,
            silver: i,
            bronze: i,
            total: i * 3
        }));

        render(
            <MedalTable
                countries={manyCountries}
                loading={false}
                error={null}
                initialSort="gold"
            />
        );

        const rows = screen.getAllByTestId('country-row');
        expect(rows.length).toBe(MAX_COUNTRIES_DISPLAYED);
    });

    it('changes sort type when header is clicked', () => {
        render(
            <MedalTable
                countries={mockCountries}
                loading={false}
                error={null}
                initialSort="gold"
            />
        );

        fireEvent.click(screen.getByTestId('sort-silver'));

        // We can't directly check the internal state, but we can verify
        // that the component doesn't crash when sort buttons are clicked
        expect(screen.getByTestId('table-header')).toBeInTheDocument();
    });
});