export const FLAG_WIDTH = 28;
export const FLAG_HEIGHT = 17;

// Country codes in alphabetical order as they appear in the flags.png
// This follows the specification: "Flag icons are in alphabetical order according to their country code"
export const COUNTRY_CODES = [
    'AUT', 'BLR', 'CAN', 'CHN', 'FRA', 'GER', 'ITA',
    'NED', 'NOR', 'RUS', 'SUI', 'SWE', 'USA'
].sort();

export const getCountryIndex = (countryCode: string): number => {
    return COUNTRY_CODES.indexOf(countryCode);
}
