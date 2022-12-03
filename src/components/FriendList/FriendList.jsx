import PropTypes from 'prop-types';
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";


export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={css.item} key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline }/>
                </li>
            ))}
            
        </ul>
    )
}



FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}