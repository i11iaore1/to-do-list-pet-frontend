import GithubIcon from "../../components/icons/GithubIcon";
import LogoIcon from "../../components/icons/LogoIcon";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s["home-container"]}>
      <LogoIcon className={s["logo"]} />
      <p className={s["description"]}>
        Pet project by
        <a
          className={s["link"]}
          href="https://github.com/i11iaore1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          Orel Illia
        </a>
      </p>
    </div>
  );
};

export default Home;
