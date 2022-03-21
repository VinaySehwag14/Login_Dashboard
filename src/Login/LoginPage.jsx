import style from "./loginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={style.login}>
      <div className={style.login__upper}>
        <header className={style.header}>Your Logo</header>

        <section className={style.login__main}>
          <div className={style.login__main__left}>
            <header>
              <h1>Sign in to</h1>
            </header>
            <h1>Loren Ipsum is simply</h1>
            <div className={style.login__para}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>

          <span className={style.login__image}>
            <img src="/assets/girl.png" alt="" />
          </span>
        </section>
      </div>
      <div className={style.login__lower}>
        <section className={style.login__lower__content}>
          <h2>Login as</h2>
          <div className={style.login__lower__img__container}>
            <div className={style.login__lower__image}>
              <img src="/assets/male.png" alt="male " />
              <h2>John peter</h2>
              <p>Active 1 days ago</p>
              <span>
                <img src="/assets/cross.png" alt="" />
              </span>
            </div>
            <div className={style.login__lower__image}>
              <img src="/assets/female.png" alt="female " />
              <h2>Alina shmen</h2>
              <p>Active 4 days ago</p>
              <span>
                <img src="/assets/cross.png" alt="" />
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className={style.login__form}>
        <h2 className={style.form__h2}>
          Welcome to <span>LOREM</span>
        </h2>
        <h1 className={style.form__h1}>Sign in</h1>
        <div className={style.login__options}>
          <div className={style.login__options__container}>
            <span className={style.google}>
              <img src="/assets/google.png" alt="google" />
              <span>Sign in with Google</span>
            </span>
          </div>
          <span className={style.fb}>
            <img src="/assets/fb.png" alt="fb" />
          </span>
          <span className={style.apple}>
            <img src="/assets/apple.png" alt="apple" />
          </span>
        </div>
        <form className={style.form}>
          <label htmlFor="username">Enter your username or email address</label>
          <input
            type="text"
            placeholder="Username or email address"
            name="username"
            id="username"
          />
          <label htmlFor="password">Enter your Password</label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            id="password"
          />
          <span className={style.span}>Forgot Password</span>
          <button onClick={onClickHandler} className={style.button}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
