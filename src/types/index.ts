export type SortType = 'gold' | 'silver' | 'bronze' | 'total';

export interface Country {
    code: string;
    gold: number;
    silver: number;
    bronze: number;
    total?: number;
}