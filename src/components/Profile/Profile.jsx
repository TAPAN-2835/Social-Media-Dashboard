import Card from '../common/Card/Card';
import Button from '../common/Button/Button';
import styles from './Profile.module.css';
import { VerifiedIcon } from '../common/Icons/Icons';

const Profile = ({ user }) => {
    if (!user) return null;

    return (
        <Card className={styles.profileCard}>
            <div className={styles.coverImage}>
                {/* Placeholder for cover image */}
            </div>

            <div className={styles.profileContent}>
                <div className={styles.header}>
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className={styles.avatar}
                    />
                    <div className={styles.actions}>
                        <Button variant="secondary" size="small">Edit Profile</Button>
                    </div>
                </div>

                <div className={styles.info}>
                    <h1 className={styles.name}>
                        {user.name}
                        {user.verified && <VerifiedIcon size={24} className={styles.verified} />}
                    </h1>
                    <p className={styles.username}>{user.username}</p>
                    <p className={styles.bio}>{user.bio}</p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{user.posts}</span>
                        <span className={styles.statLabel}>Posts</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{user.following}</span>
                        <span className={styles.statLabel}>Following</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{user.followers}</span>
                        <span className={styles.statLabel}>Followers</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Profile;
