import { useState, useEffect } from 'react';
import Profile from '../../components/Profile/Profile';
import Post from '../../components/Post/Post';
import Loader from '../../components/common/Loader/Loader';
import styles from './ProfilePage.module.css';
import { fetchUserProfile, fetchPosts } from '../../utils/api';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Fetch user and their posts
                const [userRes, postsRes] = await Promise.all([
                    fetchUserProfile(),
                    fetchPosts()
                ]);

                if (userRes.success) setUser(userRes.data);
                if (postsRes.success) {
                    // Filter posts for this user (mocking filter)
                    setPosts(postsRes.data.filter(p => p.author.id === userRes.data.id || Math.random() > 0.5));
                }
            } catch (error) {
                console.error("Failed to load profile data", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <Loader variant="spinner" />
            </div>
        );
    }

    return (
        <div className={styles.profilePage}>
            <Profile user={user} />

            <h2 className={styles.sectionTitle}>Recent Posts</h2>
            <div className={styles.postsList}>
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
                {posts.length === 0 && (
                    <p className={styles.emptyState}>No posts yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
