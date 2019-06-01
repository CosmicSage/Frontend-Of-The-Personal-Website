import Header from '../components/Header.js';
import { withRouter } from 'next/router';
import Markdown from 'react-markdown';

export default withRouter(props => (
  <div>
    <script src="prism.js"></script>
    <Header />
    <div className="container-2">
      <div className="ab">
        <div className="ab-content">
          <h1>{`${props.router.query.title} HIgehr order functions fdnslkdn powe onwdvs onr poewiqn pwdflkdsnak sjd whpnvksncvp [bdnkw vpbo]f q23[ejofpmn[ 023pjeov =k0j
          gn]re ]`}</h1>
            <div style={{ paddingTop : 200 }}>
                <p> shlhsadk gdh;fig dsh nglk ds ikewng;dslglka ads;gh w;ogl ns d;gohsd g;lwelg k
                </p>

          </div>
        </div>
        <aside>
        <h1>Puut ADD HERE</h1>
        </aside>
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
        `}</style>
      </div>
    </div>
  </div>
))
