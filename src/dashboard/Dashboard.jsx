import style from "./dashBoard.module.css";

const Dashboard = () => {
  return (
    <div className={style.dashboard}>
      <div className={style.dashboard__wrapper}>
        <div className={style.dashboard__left}>
          <header className={style.dashBoard__header}>
            <img src="/assets/logo.png" alt="" />
            <h1> Dashboard Kit</h1>
          </header>
          <section className={style.dashboard__left__list}>
            <ul>
              <li>
                <img src="/assets/pie.png" alt="" /> Overview
              </li>
              <li className={style.dashboard__left__active}>
                <img src="/assets/ticket.png" alt="" />
                Tickets
              </li>
              <li>
                <img src="/assets/bulb.png" alt="" />
                Ideas
              </li>
              <li>
                <img src="/assets/people.png" alt="" />
                Contacts
              </li>
              <li>
                <img src="/assets/person.png" alt="" />
                Agents
              </li>
              <li>
                <img src="/assets/book.png" alt="" />
                Articles
              </li>
              <li>
                <img src="/assets/setting.png" alt="" />
                Settings
              </li>
              <li>
                <img src="/assets/stamp.png" alt="" />
                Subscription
              </li>
            </ul>
          </section>
        </div>
        <div className={style.dashboard__right}>
          <nav className={style.navbar}>
            <div className={style.navbar__heading}>
              <h2>Tickets</h2>
            </div>
            <div className={style.navbar__icons}>
              <img src="/assets/search.png" alt="search" />
              <img src="/assets/bell.png" alt="notification" />
            </div>
            <div className={style.navbar__pic}>
              <span> Jones Ferdinand</span>
              <img src="/assets/men.png" alt="men" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
