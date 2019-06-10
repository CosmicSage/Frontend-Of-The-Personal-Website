import Header from "../components/Header.js";
import Link from 'next/link';
import Footer from "../components/Footer.js";
function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js hello-nextjs HIgehr order functions fdnslkdn powe onwdvs onr poewiqn pwdflkdsnak sjd whpnvksncvp [bdnkw vpbo]f q23[ejofpmn[ 023pjeov =k0j gn]re ]' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
    { id : 'passing function to props with args', title : "Higher Order Functions"}
  ]
}

function PostLink({ post }) {
  return (
    <li>
      <Link as={`/p/${post.id}`} href={`/post?title=${post.id}`}>
        <a className="plainLink"><h2>{post.title}</h2></a>
      </Link>
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: silver;
          font-family: 'Arial';
        }

        a:hover {
          opacity: 0.9;
          color : DarkRed !important;
        }
      `}</style>
    </li>
  )
}

export default function Solutions() {
  return (
    <div>
      <Header/>
      <div className="container-fluid black lessPad">
        <div className="container">
          <h3 className="subTitle whiteTxt">THE GOAL</h3>
          <p className="subText extPad whiteTxt">People keep asking me how do I do that I do. Therefore I created this page where
          I shall share what i've learned
          </p>
      </div>
      </div>
      <div className="container-2">
        <div className="a-main">
          <div className="a-article">
              {getPosts().map(post => (
                <div className="a-article">
                  <time className="a-article-time">Whateves</time>
                  <PostLink key={post.id} post={post} />
                  <p className="whiteTxt" style={{fontFamily : "Gravity-Regular"}}> How to pass additional arguments to onChangeText prop function aksjghldskghalskdhg alkhgkalsdhgl kajsdhghlkshdgqiw;p wequpoeadslposdgh s ewpo ydslhg poiay pw poiu powehg[oesdg posgosu gop ] wpe ewo poweiu orwhrvgu
                  </p>
                  <p>
                    <a href="javascript"><span style={{fontFamily : "Gravity-Regular"}} className="a-article-tag">#
                    Javascript</span></a>
                  </p>
                </div>
              ))}
          </div>
          <div className="a-tags">
            <ul class="a-tags-list"><li class="a-tags-tag"><a href="/tags/css/">css <small>(5)</small></a></li><li class="a-tags-tag"><a className="plainLink whiteTxt" href="/tags/frontend/">frontend <small>(1)</small></a></li><li class="a-tags-tag"><a href="/tags/javascript/">javascript <small>(1)</small></a></li><li class="a-tags-tag"><a href="/tags/react/">react <small>(1)</small></a></li><li class="a-tags-tag"><a href="/tags/webdev/">webdev <small>(1)</small></a></li></ul>
            <h1>PUTT ADD HERE</h1>
          </div>
        </div>
      </div>
      <Footer/>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }

        .a-main {
          display : grid;
          grid-template-columns : 2fr 1fr;
          grid-gap : 5rem;
        }

        .container-2 {
          width: 85%;
          max-width: 1200px;
          margin: 0px auto;
        }

        .lessPad {
          padding-bottom : 0px;
          padding-top : 150px;
        }

        .a-article {
          border-bottom: 1px solid #a1a1a4;
          width: 100%;
          padding: 3rem 0;
        }

        .a-article-tag {
          text-transform: uppercase;
          font-size: 14px;
          color: #666;
          font-weight: 600;
          margin-bottom: 0;
        }

        .a-article-time {
          color : Teal;
        }
        `}</style>
    </div>
  );
}
