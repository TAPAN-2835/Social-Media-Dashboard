import styles from './Notification.module.css';
import { formatTimeAgo } from '../../utils/helpers';
import Card from '../common/Card/Card';
import { HeartIcon, MessageIcon, UserIcon, BellIcon, AtSignIcon } from '../common/Icons/Icons';

const getIconForType = (type) => {
    switch (type) {
        case 'like': return <HeartIcon size={20} filled style={{ color: '#ef4444' }} />;
        case 'comment': return <MessageIcon size={20} style={{ color: '#3b82f6' }} />;
        case 'follow': return <UserIcon size={20} style={{ color: '#10b981' }} />;
        case 'mention': return <AtSignIcon size={20} style={{ color: '#f59e0b' }} />;
        default: return <BellIcon size={20} />;
    }
};

const Notification = ({ notification }) => {
    return (
        <div className={`${styles.notification} ${!notification.read ? styles.unread : ''}`}>
            <div className={styles.iconContainer}>
                <span className={styles.icon}>{getIconForType(notification.type)}</span>
            </div>

            <div className={styles.content}>
                <div className={styles.message}>
                    <span className={styles.username}>{notification.user.name}</span>
                    {' '}
                    {notification.content}
                </div>
                <span className={styles.time}>{formatTimeAgo(notification.timestamp)}</span>
            </div>

            {!notification.read && <div className={styles.dot}></div>}
        </div>
    );
};

export default Notification;
