import React from 'react';
import styled from 'styled-components';
import { getJSDocTags } from 'typescript';

const CatCard = ({ cat }) => (
  <Container>
    <ul>
      {cat?.tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </Container>
);

const Container = styled.div`
  width: 200px;
  height: 150px;
  border: 1px red solid;
`;

export default CatCard;
