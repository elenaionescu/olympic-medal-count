export const FLAG_WIDTH = 28;
export const FLAG_HEIGHT = 17;

// Country codes in alphabetical order as they appear in the flags.png
// This follows the specification: "Flag icons are in alphabetical order according to their country code"
export const COUNTRY_CODES = [
    'CAN', 'USA', 'RUS', 'NED', 'FRA', 'SWE', 'ITA',
    'NOR', 'AUT', 'BLR', 'SUI', 'GER', 'CHN'
].sort();

export const getCountryIndex = (countryCode: string): number => {
    return COUNTRY_CODES.indexOf(countryCode);
}
