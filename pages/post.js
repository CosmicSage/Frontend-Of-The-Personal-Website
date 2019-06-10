import Header from '../components/Header.js';
import { withRouter } from 'next/router';
import Markdown from 'react-markdown';
import Head from "next/head";
import Prism from "prismjs";
const code = `function escapeTxtInCodeTag($txt) {
 $callback = function($matches) {
   return '<code' . $matches[1] . '>' . htmlentities($matches[2], ENT_QUOTES, 'UTF-8') . '</code>';
 };
 $txt = preg_replace_callback('#\<\s*code(.*?)>(.+?)<\s*\/code\s*>#', $callback, $txt);
 return $txt;
}`;
var test = '';
(async () => {var test =  await fetch("http://localhost:5000/api");})();
console.log(test);
const X = withRouter(props => (
  <div>
    <Header />
    <div className="container-2">
      <div className="ab">
        <div className="ab-content">
          <h1>{`${props.router.query.title} HIgehr order functions fdnslkdn powe onwdvs onr poewiqn pwdflkdsnak sjd whpnvksncvp [bdnkw vpbo]f q23[ejofpmn[ 023pjeov =k0j
          gn]re ]`}</h1>
            <div style={{ paddingTop : 200 }}>
              <p> shlhsadk gdh;fig dsh nglk ds ikewng;dslglka ads;gh w;ogl ns d;gohsd g;lwelg k</p>
              <div className="code" data-language="js">
                <pre><code className="language-javascript">{code}</code></pre>
              </div>
            </div>
        </div>
        <aside>
          <h1>Puut ADD HERE</h1>
        </aside>
      </div>
      <style jsx global>{`

        .ab {
          margin-top: 4rem;
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-gap: 5rem;
        }

        .ab-content {
          font-size: 18px;
          line-height: 1.5;
          color : white;
          padding-top : 100px;
        }

        .container-2 {
          width: 85%;
          max-width: 1200px;
          margin: 0px auto;
        }

        @media all and (orientation:landscape)
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
          text-align: justify;
        }

        `}</style>
    </div>
  </div>
))

export default class Post extends React.Component {
  componentDidMount() {
    var prism = document.getElementById("prism-script");
    console.log(prism);
    var me = document.querySelector('script[src="https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+python"]');
    console.log(me);
    return (
      <Head>
      <script type='text/javascript' src="http://prismjs.com/prism.js"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/themes/prism-tomorrow.css" rel="stylesheet"/>
    </Head>
  );
  }
  render() {
    return (
      <X/>
    )
  }
}
