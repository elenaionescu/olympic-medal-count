import { NextApiRequest, NextApiResponse } from "next";
import { Country } from "@/types";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Country[] | { error: string }>
) {
    try {
        // in a real application, this would fetch from a database
        const medalsData : Country[] = [
            { code: 'USA', gold: 9, silver: 7, bronze: 12, total: 28 },
            { code: 'NOR', gold: 11, silver: 5, bronze: 10, total: 26 },
            { code: 'RUS', gold: 13, silver: 11, bronze: 9, total: 33 },
            { code: 'NED', gold: 8, silver: 7, bronze: 9, total: 24 },
            { code: 'FRA', gold: 4, silver: 4, bronze: 7, total: 15 },
            { code: 'SWE', gold: 2, silver: 7, bronze: 6, total: 15 },
            { code: 'ITA', gold: 0, silver: 2, bronze: 6, total: 8 },
            { code: 'CAN', gold: 10, silver: 10, bronze: 5, total: 25 },
            { code: 'SUI', gold: 6, silver: 3, bronze: 2, total: 11 },
            { code: 'BLR', gold: 5, silver: 0, bronze: 1, total: 6 },
            { code: 'GER', gold: 8, silver: 6, bronze: 5, total: 19 },
            { code: 'AUT', gold: 4, silver: 8, bronze: 5, total: 17 },
            { code: 'CHN', gold: 3, silver: 4, bronze: 2, total: 9 }
        ];

        // Uncomment to simulate an occasional API error for testing
        // if (Math.random() < 0.1) throw new Error('Random server error');
        res.status(200).json(medalsData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch medal data' });
    }
}
