import Layout from '../components/MyLayout.js'
import Link from 'next/link';
import Header from "../components/Header.js";
import Table from "../components/Table.js";
import Footer from "../components/Footer.js";
const WORK = [{title : "Mobile Applications",
              bullets : [`Vanila Javascript`, "REACT NATIVE", "REACT NAVIGATION", "REDUX", "EXPO: CLI & library"]},
              {title : "Web Applications",
              bullets : ["Python: Flask, Django", "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
              "REACT.js + NEXT.js", "DOCKER, KUBERNETES, APIs & MICROSERVICES", "FULL STACK WEB"]},
              {title : "Music Production & DJ",
              bullets : [{head : `FL STUDIO`}, {head : "NI Komplete & Rekordbox\n(only this works;i'm kinda lazy)", link : "https://rekordbox.com/en/"}]}
            ];
const FUTURE = ["Write software for any platform"];

export default class Index extends React.Component {

  render() {
    return (
      <div >
      {console.log(`\x1b[36mits fucked ${Date()}\x1b[0m`)}
      <Header/>
      <div className="homeImg">
        <div className="homeDiv center">
          <h1 className="titleMain">PRABHAKAR MISHRA</h1>
          <h3 className="intro">Self-Learning Software Engineering & Music Production/DJing through Research and Development</h3>
        </div>
      </div>
      <div className="container-fluid white">
        <div className="container">
          <h3 className="subTitle">MY WORK</h3>
          <p className="subText extPad">Hey Im Prabhakar, i spend most of my waking hours
          (about 95%) in deep state of meditation(or atleast try to) and within that i
          incorporate programming which i thoroughly enjoy(and also other social activites).
          I enjoy bending technology to my will and therfore-with big curosity- strive for deep understanding
          of it. I bulit this website to cement my knowledge of web programming as i move on to
          other things.
          </p>
          <p className="subText extPad">I started programming in May 2018 with an online course where
          I started with & gained deep knowledge of C programming and then moved on to Web &
          Mobile Application development
          </p>
          <div className="row">
          {WORK.map((object, index) => {
            let className = "rowElement";
            if (index === 1) className = "rowElement1";
            return (
            <div className={`${className}`}>
              <h5>{object.title}</h5>
              <ul>
                {object.bullets.map(bullet => (
                  <li><a rel="noopener noreferrer" className="plainLink" target="_blank" href={`${bullet.link || "#"}`}>{bullet.head || bullet}</a></li>
                ))}
              </ul>
            </div>
          );
        })}
          </div>
        </div>
      </div>
      <div className="container-fluid black">
        <div className="container">
        <h3 className="subTitle whiteTxt">Projects</h3>
        <div>
          <Table />
        </div>
        <div>
          <h5 className="whiteTxt">Future Ventures (Teach myself in 2019)</h5>
          <ul>
            {FUTURE.map(element => <li><span className="whiteTxt">{element}</span></li>)}
          </ul>
        </div>
      </div>
      </div>
        <Footer />
      </div>
    )
  }
}
