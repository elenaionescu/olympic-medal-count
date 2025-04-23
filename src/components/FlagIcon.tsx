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
            'CAN': 0,
            'USA': 1,
            'RUS': 2,
            'NED': 3,
            'FRA': 4,
            'SWE': 5,
            'ITA': 6,
            'NOR': 7,
            'AUT': 8,
            'BLR': 9,
            'SUI': 10,
            'GER': 11,
            'CHN': 12
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
