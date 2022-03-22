import DUMMY_PROFILES from "../dummyData";
import style from "./Profile.module.css";

const Profile = () => {
  const profiles = DUMMY_PROFILES;

  return (
    <div className={style.profile}>
      {profiles.map((profile) => (
        <section className={style.detail}>
          <div className={style.detail__container}>
            <div className={style.profile__image}>
              <img src={profile.image} alt="coder" />
            </div>
            <div className={style.section}>
              <span>{profile.title}</span>
              <span>{profile.updated}</span>
            </div>
          </div>
          <section className={style.name}>
            <span>{profile.customer}</span>
            <span>{profile.join}</span>
          </section>
          <section className={style.date}>
            <span>{profile.date}</span>
            <span>{profile.time}</span>
          </section>
          <span className={style.priority}>{profile.priority}</span>
          <span className={style.dots}>
            <img src="assets/dots.png" alt="dots" />
          </span>
        </section>
      ))}
    </div>
  );
};

export default Profile;
