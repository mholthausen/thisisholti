import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>thisisholti &#183; Welcome</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="normalize.css"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="lines">
        <div className="big"></div>
        <div className="small"></div>
      </div>

      <main>
        <Header title="Welcome!" />
        <p className="description">
          🤠
          <br />
          <br /> Something big will come here! <br />
          Keep y'all updated:
        </p>
        <p>
          <a
            href="https://twitter.com/thisisholti/"
            target={'_blank'}
            title={'Click here to see the Twitter profile of @thisisholti'}
          >
            <TwitterIcon fontSize="large" />
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
