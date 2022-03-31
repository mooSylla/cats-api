import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { selectCats, selectError, selectLoading } from './slice/selectors';
import { catsActions } from './slice';
import { useCatsSlice } from './slice';
import CatCard from 'app/components/CatCard';
import styled from 'styled-components';
import TalkingCat from './features/TalkingCat';

export function HomePage() {
  useCatsSlice();
  const dispatch = useDispatch();
  const cats = useSelector(selectCats);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  React.useEffect(() => {
    dispatch(catsActions.fetchCats());
  }, [dispatch]);
  console.log({ cats });

  if (error) {
    return <h2>error</h2>;
  }

  if (loading) return <h2>loading</h2>;

  return (
    <>
      <Helmet>
        <title>cats</title>
      </Helmet>
      <TalkingCat />
      <br />
      <CatsContainer>
        {cats.map(cat => (
          <CatCard cat={cat} key={cat?.id} />
        ))}
      </CatsContainer>
    </>
  );
}

const CatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
