export type SortType = keyof Omit<Country, 'code'>;

export interface Country {
    code: string;
    gold: number;
    silver: number;
    bronze: number;
    total?: number;
}