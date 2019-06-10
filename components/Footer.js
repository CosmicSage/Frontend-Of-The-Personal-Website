export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <p>
          <strong>
            © 2019 - 2021 Prabhakar Mishra. All Rights Reserved.
          </strong>
          <p>
            This site(the frontend) is built with Next.js, and hosted (along with other ends (:  ) on Digital Oceans's Cloud Computing Platform get $25 credit with this <a href="To be DOne">Link</a>.
          </p>
        </p>
        <style jsx>{`
          .footer {
            text-align: center;
            padding: 2.5rem 0px;
            color : MintCream;
            background-image: linear-gradient(270deg,#000000,#191919);
          }
          `}</style>
      </footer>
    </div>
  );
}
