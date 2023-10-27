import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Bemni tech. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Figa, Bemni tech. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Bemni tech. Repairs
          <br />
          Figa
          <br />
          Next to Goro City, AA 145
          <br />
          <a href="tel:+15555555555">+251953960756</a>
        </address>
        <br />
        <p>Owner: Chris Tomlin(Bemni)</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
