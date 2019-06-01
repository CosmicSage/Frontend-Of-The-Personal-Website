import Header from "../components/Header.js";
export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {
    console.log("ieuthsi");
  }
  render() {
    return(
      <div className="container">
      <Header/>
        <div className="homeImg">
            <div className="homeDiv center">
                <h1 className="titleMain">GIBBERISH EXPERIMENT</h1>
                <h3>xkfugvbsodiufhbglodifhbuxzhbloihrg;aouglvnjxhbvloawuf;odshiv</h3>
            </div>
            <div className="homeSouth">
                <h4><a className="stealthLink subPmin padX0" href="#">Read More</a></h4>
                <button className="smoothScrollBtn" type="button"><img src="/images/Down-Arrow-White.png" width="30"/></button>
            </div>
        </div>
        <div className="hench">
          <h1>Work</h1>
        </div>
        <style jsx>{`.hench {
          background-image : url("https://instagram.fbom3-1.fna.fbcdn.net/vp/3327f6a555ab2e5af274efa8223912fe/5D979209/t51.2885-15/sh0.08/e35/s750x750/50717724_2051558481599094_8552240087813895815_n.jpg?_nc_ht=instagram.fbom3-1.fna.fbcdn.net");
          height: 100vh;
          background-size : cover;
          background-position : center;
        }`}</style>
      </div>

    );
  }
}
