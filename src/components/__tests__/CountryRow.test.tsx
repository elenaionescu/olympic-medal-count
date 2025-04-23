import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryRow from '../CountryRow';
import { Country } from '@/types';
import {describe, it} from "node:test";
import expect from "expect";

// Mock the FlagIcon component
jest.mock('../FlagIcon', () => {
    return function MockFlagIcon({ countryCode }: { countryCode: string }) {
        return <div data-testid="flag-icon" data-country={countryCode}>Flag</div>;
    };
});

describe('CountryRow', () => {
    const mockCountry: Country = {
        code: 'USA',
        gold: 9,
        silver: 7,
        bronze: 12,
        total: 28
    };

    it('renders correctly with all data', () => {
        render(<CountryRow country={mockCountry} rank={1} />);

        // Check rank
        expect(screen.getByText('1')).toBeInTheDocument();

        // Check country code
        expect(screen.getByText('USA')).toBeInTheDocument();

        // Check flag icon
        const flagIcon = screen.getByTestId('flag-icon');
        expect(flagIcon).toBeInTheDocument();
        expect(flagIcon).toHaveAttribute('data-country', 'USA');

        // Check medal counts
        expect(screen.getByText('9')).toBeInTheDocument(); // gold
        expect(screen.getByText('7')).toBeInTheDocument(); // silver
        expect(screen.getByText('12')).toBeInTheDocument(); // bronze
        expect(screen.getByText('28')).toBeInTheDocument(); // total
    });

    it('applies correct CSS classes to cells', () => {
        const { container } = render(<CountryRow country={mockCountry} rank={1} />);

        // Check for specific cell classes
        const cells = container.querySelectorAll('td');

        expect(cells[0]).toHaveClass('rank-cell');
        expect(cells[1]).toHaveClass('country-cell');
        expect(cells[2]).toHaveClass('medal-cell');
        expect(cells[2]).toHaveClass('gold-cell');
        expect(cells[3]).toHaveClass('medal-cell');
        expect(cells[3]).toHaveClass('silver-cell');
        expect(cells[4]).toHaveClass('medal-cell');
        expect(cells[4]).toHaveClass('bronze-cell');
        expect(cells[5]).toHaveClass('medal-cell');
        expect(cells[5]).toHaveClass('total-cell');
    });
});