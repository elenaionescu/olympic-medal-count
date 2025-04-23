import {useState, useEffect, use} from 'react';
import { Country } from '@/types';
import { addTotalMedals} from "@/utils/sorting";
import { API_URL } from "@/utils/constants";

// Actual API call
const fetchMedalData = async (): Promise<Country[]> => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch medal data: ${response.status}`);
    }

    return response.json();
};

export const useMedalData = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchMedalData();
                const dataWithTotals = addTotalMedals(data);
                setCountries(dataWithTotals);
                setError(null);
            } catch (err) {
                setError('Failed to load medal data. Please try again later.');
                console.error('Error fetching medal data:', err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);
  return { countries, loading, error };
};
