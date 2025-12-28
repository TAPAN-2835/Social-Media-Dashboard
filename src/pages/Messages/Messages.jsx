import { useState, useEffect } from 'react';
import MessagePreview from '../../components/MessagePreview/MessagePreview';
import Loader from '../../components/common/Loader/Loader';
import Card from '../../components/common/Card/Card';
import styles from './Messages.module.css';
import { fetchMessages } from '../../utils/api';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMessages = async () => {
            const response = await fetchMessages();
            if (response.success) {
                setMessages(response.data);
            }
            setLoading(false);
        };

        loadMessages();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Messages</h1>

            <Card className={styles.messagesCard}>
                {loading ? (
                    <div className={styles.loading}>
                        <Loader variant="spinner" />
                    </div>
                ) : messages.length > 0 ? (
                    <div className={styles.list}>
                        {messages.map(message => (
                            <MessagePreview
                                key={message.id}
                                message={message}
                                onClick={() => console.log('Open conversation', message.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <p>No messages yet.</p>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default Messages;
