import React from 'react';

import Layout from '../layouts';
import Form from '../components/Form';

class Dashboard extends React.Component {
  constructor() {
    super();
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
