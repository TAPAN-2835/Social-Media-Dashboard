import styles from './MessagePreview.module.css';
import { formatTimeAgo } from '../../utils/helpers';
import Card from '../common/Card/Card';

const MessagePreview = ({ message, onClick }) => {
    return (
        <div
            className={`${styles.messagePreview} ${message.unread ? styles.unread : ''}`}
            onClick={onClick}
        >
            <img
                src={message.user.avatar}
                alt={message.user.name}
                className={styles.avatar}
            />

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{message.user.name}</h3>
                    <span className={styles.time}>{formatTimeAgo(message.timestamp)}</span>
                </div>
                <p className={styles.lastMessage}>{message.lastMessage}</p>
            </div>

            {message.unread && <div className={styles.dot}></div>}
        </div>
    );
};

export default MessagePreview;
