import { useQuery } from '@apollo/react-hooks';
import gpl from 'graphql-tag';
import { Fragment } from 'react';
import '../../styles/Home.scss';

const GET_GRAPHQL_INFO = gpl`
    {
        userSchemaAssert
    }
`;

function CheckConfig() {
  const { loading, error } = useQuery(GET_GRAPHQL_INFO);

  if (loading) return <span className='status-warning'>LOADING</span>;
  if (error)
    return (
      <span className='status-error'>
        <strong>ERROR</strong>
      </span>
    );
  return (
    <span className='status-ok'>
      <strong>OK</strong>
    </span>
  );
}

export default function Home(props) {
  return (
    <Fragment>
      <div className='Home'>
        <p>
          GraphQL status: <CheckConfig />
        </p>
      </div>
    </Fragment>
  );
}
