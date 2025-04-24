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
            <th className="country-column">Country</th>
            {(['gold', 'silver', 'bronze', 'total'] as SortType[]).map((type) => (
                <th
                    key={type}
                    className={`medal-column ${type === currentSort ? 'active' : ''}`}
                    onClick={() => onSortChange(type)}
                >
                    {type !== 'total' && (
                        <span className={`medal-icon ${type}-medal-icon`}></span>
                    )}
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
          .medal-icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 6px;
            position: relative;
            top: 1px;
          }
          .gold-medal-icon {
            background-color: #ffc107;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          }
          .silver-medal-icon {
            background-color: #bdbdbd;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          }
          .bronze-medal-icon {
            background-color: #cd7f32;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          }
        `}</style>
        </thead>
    );
};

export default TableHeader;