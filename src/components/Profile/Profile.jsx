import PropTypes from 'prop-types';

export const Profile = ({
    avatar,
    username,
    tag,
    location,
    stats
}) => {
    return (
<div>
     <div>
        <img
            width="200"        
            src={avatar}
            alt={username}
        
       />
       <p>{username}</p>
       <p>@{tag}</p>
       <p>{location}</p>
     </div>

        <ul>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}