import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profile}>
      <div className={s.profileCard}>
        <img className={s.profileImg} src={image} alt={name} />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.profileStats}>
        <li className={s.profileItem}>
          <span className={s.profileLabel}>Followers</span>
          <span className={s.profileQuantity}>{followers}</span>
        </li>
        <li className={s.profileItem}>
          <span className={s.profileLabel}>Views</span>
          <span className={s.profileQuantity}>{views}</span>
        </li>
        <li className={s.profileItem}>
          <span className={s.profileLabel}>Likes</span>
          <span className={s.profileQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
