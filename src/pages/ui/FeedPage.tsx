import { type FC } from 'react';

import CatCard from '@entities/cat/ui/CatCard';
import { useCat } from '@entities/cat/model/useCat';
import { useAppDispatch } from '@shared/store/hooks';
import { addToMatches } from '@entities/user/model/matchesSlice';

const FeedPage: FC = () => {
   const { data, isLoading, isError } = useCat();
   const dispatch = useAppDispatch();

   if (isLoading) {
      return <p>Загрузка...</p>
   }

   if (isError || !data) {
      return <p>Произошла ошибка</p>
   }

   return (
      <CatCard 
         catItem={data} 
         onMatch={() => dispatch(addToMatches({ cat: data }))} 
         onMessage={() => {}}
         onSkip={() => {}}
      />
   )
}

export default FeedPage;