import React from 'react';

interface FlagIconProps {
    countryCode: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ countryCode }) => {
    // Flag dimensions
    const flagWidth = 20;
    const flagHeight = 13;

    const getBackgroundPosition = (code: string) => {
        const countryCodes = [
            'AUT', 'BLR', 'CAN', 'CHN', 'FRA', 'GER', 'ITA',
            'NED', 'NOR', 'RUS', 'SUI', 'SWE', 'USA'
        ].sort();

        const index = countryCodes.indexOf(code);
        if (index === -1) return '0 0';

        return `-${index * flagWidth}px 0`;
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
