const PROJECTS = [{Title : "Movie Browser", Description : "Movie Browser Mobile App in React Native Works on both Android & IOS", Language : "Javascript", Stars : "10", link : "https://github.com/CosmicSage/Project2.git"}];

export default class Table extends React.Component {
  render() {
    return (
      <div className="react-bootstrap-table">
      <table className="table">
        <thead>
          <tr>
            {Object.keys(PROJECTS[0]).map((head, index) => {
              if (head ==="link") return null;
              return <th key={index} className='T' scope="col">{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map(object => {
            const link = object.link;
            return (
              <tr>
                {Object.entries(object).map(( [ key,value ], index ) => {
                    if (key === "link") return null;
                    if (key ==="Title") return <td className='T'><a key={index} className="whiteTxt plainLink" target="_blank" href={`${link}`}>{value}</a></td>;
                    return <td key={index} className='T'>{value}</td>;
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        tbody, thead {
          color : white;
        }

        .T {
          padding-top : 15px;
          padding-bottom : 20px;
          border-color : #707070;
        }

        .plainLink {
          color: white;
          font-family: "Gravity-Regular";
          display : table;
        }
        `}</style>
      </div>
    );
  }
}
