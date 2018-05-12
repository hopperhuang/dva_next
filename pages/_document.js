import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
    // eslint-disable-next-line
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="format-detection" content="email=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />

          <script src="/static/hd.min.js" />
          <script src="/static/caculate.js" />
          <link rel="stylesheet" type="text/css" href="//unpkg.com/antd-mobile/dist/antd-mobile.min.css" />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
