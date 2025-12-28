import { useState, useEffect } from 'react';
import Notification from '../../components/Notification/Notification';
import Loader from '../../components/common/Loader/Loader';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import styles from './Notifications.module.css';
import { fetchNotifications } from '../../utils/api';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // all, unread

    useEffect(() => {
        const loadNotifications = async () => {
            const response = await fetchNotifications();
            if (response.success) {
                setNotifications(response.data);
            }
            setLoading(false);
        };

        loadNotifications();
    }, []);

    const filteredNotifications = filter === 'all'
        ? notifications
        : notifications.filter(n => !n.read);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Notifications</h1>
                <div className={styles.actions}>
                    <Button
                        variant={filter === 'all' ? 'primary' : 'secondary'}
                        size="small"
                        onClick={() => setFilter('all')}
                    >
                        All
                    </Button>
                    <Button
                        variant={filter === 'unread' ? 'primary' : 'secondary'}
                        size="small"
                        onClick={() => setFilter('unread')}
                    >
                        Unread
                    </Button>
                    <Button variant="secondary" size="small" onClick={markAllAsRead}>
                        Mark all read
                    </Button>
                </div>
            </div>

            <Card className={styles.listCard}>
                {loading ? (
                    <div className={styles.loading}>
                        <Loader variant="spinner" />
                    </div>
                ) : filteredNotifications.length > 0 ? (
                    filteredNotifications.map(notification => (
                        <Notification key={notification.id} notification={notification} />
                    ))
                ) : (
                    <div className={styles.emptyState}>
                        <p>No notifications to show.</p>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default Notifications;
