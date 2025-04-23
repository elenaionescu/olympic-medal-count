'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import MedalTable from '../components/MedalTable';
import { useMedalData } from '@/hooks/useMedalData';
import { DEFAULT_SORT } from '@/utils/constants';
import { SortType } from '@/types';

export default function HomePage() {
  const searchParams = useSearchParams();
  const { countries, loading, error } = useMedalData();
  const [initialSort, setInitialSort] = useState<SortType>(DEFAULT_SORT);

  useEffect(() => {
    if (searchParams) {
      // Get the sort parameter from the URL
      const sort = searchParams.get('sort');
      if (sort) {
        const validSort = ['gold', 'silver', 'bronze', 'total'].includes(sort)
            ? (sort as SortType)
            : DEFAULT_SORT;

        setInitialSort(validSort);
      }
    }
  }, [searchParams]);

  return (
      <div className="container">
          <h1 className="table-title">MEDAL COUNT</h1>
          <div className="olympic-rings">
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
          </div>
        <MedalTable
            countries={countries}
            loading={loading}
            error={error}
            initialSort={initialSort}
        />
      </div>
  );
}
