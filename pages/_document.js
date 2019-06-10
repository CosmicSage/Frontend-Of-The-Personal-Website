import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="../static/yinyang.ico" rel="icon"/>
          <title className="next-head">Ma Website</title>

          <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
          />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/themes/prism-funky.css" rel="stylesheet"/>
          <script id="prism-script" type='text/javascript' src="https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+python"></script>
          <link href="/static/index.css" type="text/css" rel="stylesheet"/>
          <link href="/static/spacing.css" type="text/css" rel="stylesheet"/>
          <link href="/static/fonts.css" type="text/css" rel="stylesheet" className="next-head"/>
          <link rel="stylesheet" type="text/css" href="/static/nav.css"/>

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
