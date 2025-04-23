import React from 'react';
import { Country } from '@/types';
import FlagIcon from "@/components/FlagIcon";

interface CountryRowProps {
    country: Country;
    rank: number;
}

const CountryRow: React.FC<CountryRowProps> = ({ country, rank }) => {
    return (
        <tr>
            <td className="rank-cell">{rank}</td>
            <td className="country-cell">
                <FlagIcon countryCode={country.code} />
                <span className="country-code">{country.code}</span>
            </td>
            <td className="medal-cell gold-cell">{country.gold}</td>
            <td className="medal-cell silver-cell">{country.silver}</td>
            <td className="medal-cell bronze-cell">{country.bronze}</td>
            <td className="medal-cell total-cell">{country.total}</td>
            <style jsx>{`
                tr {
                  border-bottom: 1px solid #eaeaea;
                }
                tr:hover {
                  background-color: #fafafa;
                }
                td {
                  padding: 16px;
                  text-align: center;
                }
                .rank-cell {
                  color: #888;
                  font-weight: 500;
                }
                .country-cell {
                  text-align: left;
                  font-weight: 500;
                }
                .country-code {
                  vertical-align: middle;
                }
                .medal-cell {
                  font-weight: 500;
                }
                .gold-cell {
                  color: #ffc107;
                }
                .silver-cell {
                  color: #9e9e9e;
                }
                .bronze-cell {
                  color: #a17419;
                }
                .total-cell {
                  font-weight: 600;
                }
              `}</style>
        </tr>
    );
};

export default CountryRow;
