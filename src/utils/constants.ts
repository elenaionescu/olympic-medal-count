export const MEDAL_TYPES = ['gold', 'silver', 'bronze', 'total'] as const;
export const MEDAL_LABELS = {
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
    total: 'Total',
};
export const DEFAULT_SORT = 'gold';
export const MAX_COUNTRIES_DISPLAYED = 10;
export const API_URL = '/api/medals'; // Ths would be the endpoint in a real app