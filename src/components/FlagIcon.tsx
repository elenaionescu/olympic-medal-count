import React from 'react';

interface FlagIconProps {
    countryCode: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ countryCode }) => {
    const flagWidth = 28;
    const flagHeight = 17;

    const getBackgroundPosition = (code: string) => {
        // Define the countries in the EXACT order they appear in your sprite image
        const flagPositions: Record<string, number> = {
            'CAN': 2,
            'USA': 12,
            'RUS': 9,
            'NED': 7,
            'FRA': 4,
            'SWE': 11,
            'ITA': 6,
            'NOR': 8,
            'AUT': 0,
            'BLR': 1,
            'SUI': 10,
            'GER': 5,
            'CHN': 3
        };

        const position = flagPositions[code] !== undefined ? flagPositions[code] : 0;

        return `0 -${position * flagHeight}px`;
    };

    return (
        <div className="flag-icon">
            <div className="flag" title={countryCode}></div>
            <style jsx>{`
        .flag-icon {
          display: inline-block;
          margin-right: 8px;
          vertical-align: middle;
        }
        .flag {
          width: ${flagWidth}px;
          height: ${flagHeight}px;
          background-image: url('/flags.png');
          background-position: ${getBackgroundPosition(countryCode)};
          background-repeat: no-repeat;
          border: 1px solid #eaeaea;
        }
      `}</style>
        </div>
    );
};

export default FlagIcon;
