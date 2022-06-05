import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer d-flex direction-column align-center">
      <p>
        Made with{" "}
        <span role="img" aria-label="Love">
          ❤️
        </span>{" "}
        by Prakash Sakari
      </p>
      <div className="d-flex gap align-center padding-all-8">
        <a
          href="https://github.com/prakashsakari/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/github-logo.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://twitter.com/prakashsakari"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/twitter.png"
            alt="Twitter"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/prakashsakari/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="source-image"
            src="https://therightfit.netlify.app/assets/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
    </footer>
  );
};
