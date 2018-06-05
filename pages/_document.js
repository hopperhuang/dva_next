import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from 'styles/global.scss';
import generateUrl from '../utils/generateUrl';

const isProduction = process.env.NODE_ENV === 'production';
const hd = isProduction ? '/static/js/min/hd.min.js' : '/static/js/hd.js';
const cal = isProduction ? '/static/js/min/caculate.min.js' : '/static/js/caculate.js';
const fastCliackPatch = isProduction ? '/static/js/min/fastCliackPatch.min.js' : '/static/js/fastCliackPatch.js';
const fastClick = isProduction ? '/static/js/min/fastClick.min.js' : '/static/js/fastClick.js';
const normalize = isProduction ? '/static/stylesheet/min/normalize.css' : '/static/stylesheet/dev/normalize.css';
const antd = isProduction ? '/static/stylesheet/min/antd-mobile.css' : '/static/stylesheet/dev/antd-mobile.css';

const hdJs = generateUrl(hd);
const calJs = generateUrl(cal);
const fastCliackPatchJs = generateUrl(fastCliackPatch);
const fastClickJs = generateUrl(fastClick);
const normalIzeCss = generateUrl(normalize);
const antdCss = generateUrl(antd);

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
          <script src={fastClickJs} />
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
