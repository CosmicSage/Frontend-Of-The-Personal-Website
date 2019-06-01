import Link from 'next/link'
import header from "../components/nav.js";
const linkStyle = {
  marginRight: 15
}
const services_array = ["Solutions", "Projects", "Gear", "Music"];
export default class Header extends React.Component {
  componentDidMount() {
    console.log(`\x1b[36mits fucked ${"the funcntion was called"}\x1b[0m`);
    header();
  }
  render (){
    return (

      <nav className="navbar navbar-dark fixed-top navbar-expand-lg toggle-height" id="global-nav">
      <script type="text/javascript" src="./scripts/nav.js"></script>

      <div className="container">
        <Link href="/">
          <a className="navbar-brand scrollN font">Prabhakar Mishra</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {services_array.map(service => (
              <li>
                <Link href={`/${service}`}>
                    <a className="nav-link scrollN font">{service}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav">
            <li>
              <Link href="/Contact">
                <a className="nav-link scrollN font">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
          </div>
      </nav>
    );
  }
}
