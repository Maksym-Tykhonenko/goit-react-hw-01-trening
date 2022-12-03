import PropTypes from 'prop-types';

export const FriendListItem = ({
    isOnline,
    avatar,
    name }) => {
    return (
        <div>
            <span>{isOnline }</span>
            <img src={avatar } alt={name } width="100px" />
            <p>{name }</p>
        </div>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}