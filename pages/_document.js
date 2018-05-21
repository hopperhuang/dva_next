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

          <script src="/static/js/hd.min.js" />
          <script src="/static/js/caculate.js" />
          <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js" />
          <script src="/static/js/fastCliackPatch.js" />
          <link rel="stylesheet" type="text/css" href="/static/stylesheet/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/static/stylesheet/antd-mobile.css" />
        </Head>
        <body>
          <header style={{ fontSize: '.26rem' }} >这里是一个头部,到底是否需要他呢？我们来思考一下吧</header>
          <Main />
          <footer style={{ fontSize: '.26rem' }} >这里是一个底部，我觉得用来投放个广告也是挺好的，你说对吧</footer>
          <NextScript />
        </body>
      </html>
    );
  }
}
