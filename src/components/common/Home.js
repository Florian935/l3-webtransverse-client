import { useQuery } from '@apollo/react-hooks';
import gpl from 'graphql-tag';
import { Fragment } from 'react';

const GET_GRAPHQL_INFO = gpl`
    {
        userSchemaAssert
    }
`;

function CheckConfig() {
  const { loading, error } = useQuery(GET_GRAPHQL_INFO);

  if (loading) return <span className='status-warning'>LOADING</span>;
  if (error) return <span className='status-error'>ERROR</span>;
  return <span className='status-ok'>OK</span>;
}

export default function Home(props) {
  return (
    <Fragment>
      <p>
        GraphQL status: <CheckConfig />
      </p>
    </Fragment>
  );
}
