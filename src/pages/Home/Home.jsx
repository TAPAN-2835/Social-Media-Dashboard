import { useState, useEffect } from 'react';
import Post from '../../components/Post/Post';
import Loader from '../../components/common/Loader/Loader';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import styles from './Home.module.css';
import { fetchPosts } from '../../utils/api';
import { currentUser } from '../../utils/mockData';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetchPosts();
                if (response.success) {
                    setPosts(response.data);
                } else {
                    setError(response.error);
                }
            } catch (err) {
                setError('An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    return (
        <div className={styles.home}>
            {/* Create Post Section */}
            <Card className={styles.createPost}>
                <div className={styles.createPostHeader}>
                    <img src={currentUser.avatar} alt="Current User" className={styles.avatar} />
                    <input
                        type="text"
                        placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
                        className={styles.input}
                    />
                </div>
                <div className={styles.createPostActions}>
                    <Button variant="secondary" size="small" className={styles.actionBtn}>
                        📷 Photo
                    </Button>
                    <Button variant="secondary" size="small" className={styles.actionBtn}>
                        🎥 Video
                    </Button>
                    <Button size="small">Post</Button>
                </div>
            </Card>

            {/* Posts Feed */}
            <div className={styles.feed}>
                {loading ? (
                    <>
                        <Loader variant="skeleton" skeletonType="post" />
                        <Loader variant="skeleton" skeletonType="post" />
                        <Loader variant="skeleton" skeletonType="post" />
                    </>
                ) : (
                    posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))
                )}

                {!loading && posts.length === 0 && (
                    <div className={styles.emptyState}>
                        <p>No posts to show yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
