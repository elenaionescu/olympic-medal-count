export const FLAG_WIDTH = 20;
export const FLAG_HEIGHT = 13;

// Country codes in alphabetical order as they appear in the flags.png
// This follows the specification: "Flag icons are in alphabetical order according to their country code"
export const COUNTRY_CODES = [
    'AUT', 'BLR', 'CAN', 'CHN', 'FRA', 'GER', 'ITA',
    'NED', 'NOR', 'RUS', 'SUI', 'SWE', 'USA'
].sort();

export const getCountryIndex = (countryCode: string): number => {
    return COUNTRY_CODES.indexOf(countryCode);
}

export const getFlagPosition = (countryCode: string): string => {
    const index = getCountryIndex(countryCode);
    if (index === -1) return '0 0'; //default position if code not found

    return `-${index * FLAG_WIDTH}px 0`;
}