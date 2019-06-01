export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>
          © 2019 - 2021 Prabhakar Mishra. All Rights Reserved.
        </strong>
        <p>
          This site(the frontend) is built with Next.js, and hosted (along with other ends (:  ) on Digital Oceans's Cloud Computing Platform get $25 credit with this <a href="To be DOne">Link</a>
        </p>
      </p>
      <style jsx>{`
        .footer {
          text-align: center;
          margin-top: 6rem;
          padding: 2.5rem 0px;
          border-top: 1px solid rgb(130, 130, 130);
          color : MintCream;
        }
        `}</style>
    </footer>
  );
}
