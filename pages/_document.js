import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from 'styles/global.scss';
import generateUrl from '../utils/generateUrl';

const hdJs = generateUrl('/static/js/hd.min.js');
const calJs = generateUrl('/static/js/caculate.js');
const fastCliackPatchJs = generateUrl('/static/js/fastCliackPatch.js');
const normalIzeCss = generateUrl('/static/stylesheet/dev/normalize.css');
const antdCss = generateUrl('/static/stylesheet/dev/antd-mobile.css');

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

          <script src={hdJs} />
          <script src={calJs} />
          <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js" />
          <script src={fastCliackPatchJs} />
          <link rel="stylesheet" type="text/css" href={normalIzeCss} />
          <link rel="stylesheet" type="text/css" href={antdCss} />
        </Head>
        <body style={{ backgroundColor: '#ffffff' }} >
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
