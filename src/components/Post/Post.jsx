import { useState } from 'react';
import Card from '../common/Card/Card';
import Button from '../common/Button/Button';
import styles from './Post.module.css';
import { HeartIcon, MessageIcon, ShareIcon, VerifiedIcon } from '../common/Icons/Icons';
import { formatTimeAgo } from '../../utils/helpers';

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(post.liked);
    const [comments, setComments] = useState(post.comments || 0);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleComment = () => {
        // Determine action - for now just UI toggle or alert
        console.log('Open comment section');
    };

    return (
        <Card className={styles.post}>
            {/* Post Header */}
            <div className={styles.header}>
                <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className={styles.avatar}
                />
                <div className={styles.meta}>
                    <div className={styles.authorLine}>
                        <span className={styles.name}>{post.author.name}</span>
                        {post.author.verified && <VerifiedIcon size={16} className={styles.verified} />}
                        <span className={styles.username}>{post.author.username}</span>
                    </div>
                    <span className={styles.timestamp}>{formatTimeAgo(post.timestamp)}</span>
                </div>
            </div>

            {/* Post Content */}
            <div className={styles.content}>
                <p className={styles.text}>{post.content}</p>

                {post.image && (
                    <div className={styles.imageContainer}>
                        <img src={post.image} alt="Post content" className={styles.image} loading="lazy" />
                    </div>
                )}
            </div>

            {/* Post Actions */}
            <div className={styles.actions}>
                <Button
                    variant="icon"
                    className={`${styles.actionButton} ${isLiked ? styles.liked : ''}`}
                    onClick={handleLike}
                    aria-label={isLiked ? "Unlike post" : "Like post"}
                >
                    <span className={styles.icon}>
                        <HeartIcon size={20} filled={isLiked} />
                    </span>
                    <span>{likes}</span>
                </Button>

                <Button
                    variant="icon"
                    className={styles.actionButton}
                    onClick={handleComment}
                    aria-label="Comment on post"
                >
                    <span className={styles.icon}><MessageIcon size={20} /></span>
                    <span>{comments}</span>
                </Button>

                <Button
                    variant="icon"
                    className={styles.actionButton}
                    aria-label="Share post"
                >
                    <span className={styles.icon}><ShareIcon size={20} /></span>
                </Button>
            </div>
        </Card>
    );
};

export default Post;
