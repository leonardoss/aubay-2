import React from 'react';

import Layout from '../layouts';
import Form from '../components/Form';

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  handleTest = param => {
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

    console.log('test');
  }

  render() {
    return (
      <Layout>
        <Form />
      </Layout>
    );
  }
}
export default Dashboard;
