import React, { useState, useEffect } from 'react';
import TableHeader from '@/components/TableHeader';
import CountryRow from '@/components/CountryRow';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import { Country, SortType } from '@/types';
import { sortCountries } from '@/utils/sorting';
import { MAX_COUNTRIES_DISPLAYED } from '@/utils/constants';

interface MedalTableProps {
    countries: Country[];
    loading: boolean;
    error: string | null;
    initialSort: SortType;
}

const MedalTable: React.FC<MedalTableProps> = ({
    countries,
    loading,
    error,
    initialSort = 'gold'
}) => {
    const [sortType, setSortType] = useState<SortType>(initialSort);

    useEffect(() => {
        setSortType(initialSort);
    }, [initialSort]);

    const handleSortChange = (newSortType: SortType) => {
        setSortType(newSortType);
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    const sortedCountries = sortCountries(countries, sortType)
        .slice(0, MAX_COUNTRIES_DISPLAYED);

    return (
        <div className="medal-table-container">
            <table className="medal-table">
                <TableHeader currentSort={sortType} onSortChange={handleSortChange} />
                <tbody>
                {sortedCountries.map((country, index) => (
                    <CountryRow key={country.code} country={country} rank={index + 1} />
                ))}
                </tbody>
            </table>
            <style jsx>{`
                .medal-table-container {
                  max-width: 800px;
                  margin: 40px auto;
                  padding: 0 20px;
                }
                .table-title {
                  text-align: center;
                  color: #757575;
                  font-size: 28px;
                  margin-bottom: 30px;
                  font-weight: 300;
                  letter-spacing: 2px;
                }
                .medal-table {
                  width: 100%;
                  border-collapse: collapse;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                  border-radius: 8px;
                  overflow: hidden;
                }
              `}</style>
        </div>
    );
}

export default MedalTable;