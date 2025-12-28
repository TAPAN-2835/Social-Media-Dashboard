import styles from './Loader.module.css';

/**
 * Loader component with multiple variants
 * @param {object} props
 * @param {string} props.variant - Loader variant: 'spinner', 'skeleton'
 * @param {string} props.skeletonType - Skeleton type: 'text', 'circle', 'rect', 'post'
 */
const Loader = ({ variant = 'spinner', skeletonType = 'rect' }) => {
    if (variant === 'spinner') {
        return (
            <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    if (variant === 'skeleton') {
        if (skeletonType === 'post') {
            return (
                <div className={styles.postSkeleton}>
                    <div className={styles.skeletonHeader}>
                        <div className={`${styles.skeleton} ${styles.circle}`}></div>
                        <div className={styles.skeletonHeaderText}>
                            <div className={`${styles.skeleton} ${styles.text}`} style={{ width: '150px' }}></div>
                            <div className={`${styles.skeleton} ${styles.text}`} style={{ width: '100px' }}></div>
                        </div>
                    </div>
                    <div className={`${styles.skeleton} ${styles.text}`} style={{ width: '100%', height: '60px' }}></div>
                    <div className={`${styles.skeleton} ${styles.rect}`} style={{ width: '100%', height: '300px' }}></div>
                </div>
            );
        }

        return (
            <div className={`${styles.skeleton} ${styles[skeletonType]}`}></div>
        );
    }

    return null;
};

export default Loader;
