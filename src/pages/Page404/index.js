import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function Page404() {
  return (
    <PageDefault>
      <h1>Page 404</h1>
      
      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default Page404;
