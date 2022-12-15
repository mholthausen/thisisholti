import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Michael Holthausen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="normalize.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">Something big will come here!</p>
        <p>
          <a href="https://twitter.com/thisisholti" target={'_blank'}>
            <TwitterIcon fontSize='large'/>
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
