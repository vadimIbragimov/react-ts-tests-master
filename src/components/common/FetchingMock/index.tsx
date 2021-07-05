import React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_TEXT_QUERY = gql`
    query GET_TEXT_QUERY($name: String){
        getText(name: $name){
            text
        }
    }
`;

export const FetchingMock: React.FC = () => {
  const { data, loading, error } = useQuery(GET_TEXT_QUERY, { variables: { name: 'qwe' } });
  if(loading) return <span>Loading...</span>;
  if(error) return <span>Error: {error.message}</span>;
  return (
    <span>
      {data?.getText.text}
    </span>
  );
};