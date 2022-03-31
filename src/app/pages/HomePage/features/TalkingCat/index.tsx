import React from 'react';
import { useTalkingCatSlice } from './slice/.';
import { useSelector, useDispatch } from 'react-redux';
import { talkingCatActions } from './slice/.';
import {
  selectTalkingCatImg,
  selectError,
  selectLoading,
} from './slice/selectors';

export const TalkingCat = () => {
  useTalkingCatSlice();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const img = useSelector(selectTalkingCatImg);

  const [value, setValue] = React.useState('');

  const handleTextChange = e => {
    const text = e.target.value;

    setValue(e.target.value?.trim());
    console.log(text?.trim());
  };

  if (error) return <h3>error</h3>;

  if (loading) return <h3>loading...</h3>;

  const getImage = () => {
    if (!value) return;
    //else fetch here

    dispatch(talkingCatActions.fetchTalkingCat(value));
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleTextChange} />
      <button onClick={getImage}>Get Image</button>
      {img && (
        <img
          src={img}
          alt="talking cat"
          style={{
            width: '200px',
            height: '200',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </div>
  );
};

export default TalkingCat;
