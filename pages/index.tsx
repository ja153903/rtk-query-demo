import type { NextPage } from 'next';

import { useGetPromotionsQuery } from '../api/promotions';
import type { Promotion } from '../types';

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetPromotionsQuery();

  if (isLoading) {
    return <div className="container p-5">Loading data...</div>;
  }

  if (error) {
    return <div className="container p-5">Something went wrong..</div>;
  }

  return (
    <div className="container p-5">
      <h1 className="font-bold text-3xl">Promotions</h1>
      <ul>
        {data?.map((promotion: Promotion) => (
          <li key={promotion.id}>
            {promotion.promotion_code} - {promotion.description}
          </li>
        )) ?? null}
      </ul>
    </div>
  );
};

export default Home;
