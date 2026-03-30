import GithubIcon from "../../components/icons/GithubIcon";
import FullLogoIcon from "../../components/icons/FullLogoIcon";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s["home-container"]}>
      <FullLogoIcon className={s["logo"]} />
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
