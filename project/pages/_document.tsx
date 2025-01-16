import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="title" content="Trave PC" />
          <meta
            name="description"
            content="조립PC 구매, 상담, 쇼핑 전문 플랫폼"
          />
          <meta property="og:url" content="https://travel-pc.shop" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Trave PC" />
          <meta
            property="og:description"
            content="조립PC 구매, 상담, 쇼핑 전문 플랫폼"
          />
          <meta
            property="og:image"
            content="/images/logo/primary-background.jpg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/logo/dark-background.png"
          />
        </Head>
        <body>
          <title>트래플피씨 | Travel PC</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
