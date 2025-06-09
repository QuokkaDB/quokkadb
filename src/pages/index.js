import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`QuokkaDB Documentation`}
      description="Documentation for the QuokkaDB.">
      <main>
        return <Redirect to="/docs/Introduction/"></Redirect>
      </main>
    </Layout>
  );
}
