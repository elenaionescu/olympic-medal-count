import { Country, SortType } from "@/types";

export const addTotalMedals = (countries: Country[]): Country[] => {
    return countries.map((country) => ({
        ...country,
        total: country.gold + country.silver + country.bronze,
    }));
};

export const sortCountries = (countries: Country[], sortType: SortType): Country[] => {
    return [...countries].sort((a, b) => {
        if (b[sortType] !== a[sortType]) {
            return b[sortType]! - a[sortType]!;
        }

        switch (sortType) {
            case 'total':
                return b.gold - a.gold;
            case 'gold':
                return b.silver - a.silver;
            case 'silver':
                return b.gold - a.gold;
            case 'bronze':
                return b.gold - a.gold;
            default:
                return 0;
        }
    });
};