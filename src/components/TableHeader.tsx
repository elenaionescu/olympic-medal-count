import React from 'react';
import { SortType } from '@/types';
import { MEDAL_LABELS } from '@/utils/constants';

interface TableHeaderProps {
    currentSort: SortType;
    onSortChange: (sortType: SortType) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ currentSort, onSortChange }) => {
    return (
        <thead>
            <tr>
                <th className="rank-column">#</th>
                <th className="country-column">Column</th>

                {( ['gold', 'silver', 'bronze', 'total'] as SortType[]).map((type) => (
                    <th
                        key={type}
                        className={`medal-column ${type === currentSort ? 'active' : ''}`}
                        onClick={() => onSortChange(type)}
                    >
                        {MEDAL_LABELS[type]}
                        {type === currentSort && <span className="sort-indicator">▼</span>}
                    </th>
                ))}
            </tr>
            <style jsx>{`
                thead th {
                  padding: 16px;
                  text-align: center;
                  border-bottom: 2px solid #eaeaea;
                  cursor: pointer;
                  position: relative;
                }
                .rank-column, .country-column {
                  cursor: default;
                }
                .country-column {
                  text-align: left;
                }
                .medal-column {
                  transition: background-color 0.2s;
                }
                .medal-column:hover {
                  background-color: #f5f5f5;
                }
                .medal-column.active {
                  background-color: #f0f7ff;
                }
                .sort-indicator {
                  margin-left: 4px;
                  font-size: 10px;
                }
              `}</style>
        </thead>
    );
};

export default TableHeader;