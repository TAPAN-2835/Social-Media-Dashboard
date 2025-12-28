import styles from './Card.module.css';

/**
 * Reusable Card component for wrapping content
 * @param {object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {function} props.onClick - Optional click handler
 */
const Card = ({ children, className = '', onClick, ...props }) => {
    const cardClass = `${styles.card} ${className} ${onClick ? styles.clickable : ''}`;

    return (
        <div className={cardClass} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

export default Card;
