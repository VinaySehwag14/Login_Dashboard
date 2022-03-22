import Profile from "../profile/Profile";
import style from "./MainDash.module.css";

const MainDash = () => {
  return (
    <div className={style.maindash}>
      <div className={style.maindash__header}>
        <div className={style.maindash__header__upper}>
          <div className={style.maindash__header__headings}>
            <h1>All tickets</h1>
            <div className={style.icon}>
              <img src="/assets/increase.png" alt="inceraese" />
              <span>Sort</span>
              <img src="/assets/filter.png" alt="filter" />
              <span>Filter</span>
            </div>
          </div>
          <div className={style.maindash__details}>
            <span>Ticket details</span>
            <span>Customer name</span>
            <span>Date</span>
            <span>Priority</span>
          </div>
        </div>
      </div>
      <div className={style.maindash__lower}>
        <Profile />
      </div>
      <section className={style.last}>
        <span>
          Rows per page: 8 <img src="/assets/down.png" alt="" />{" "}
        </span>
        <span>1-8 of 1240</span>
        <span className={style.images}>
          <img src="/assets/left.png" alt="leftarrow" />
          <img src="/assets/right.png" alt="rightarrow" />
        </span>
      </section>
    </div>
  );
};

export default MainDash;
