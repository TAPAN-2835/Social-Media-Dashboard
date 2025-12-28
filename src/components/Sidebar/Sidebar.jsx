import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Card from '../common/Card/Card';
import { HomeIcon, UserIcon, BellIcon, MessageIcon, SettingsIcon } from '../common/Icons/Icons';
import { currentUser } from '../../utils/mockData';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            {/* Mini Profile Summary */}
            <Card className={styles.miniProfile}>
                <div className={styles.profileHeader}>
                    <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className={styles.avatar}
                    />
                    <div className={styles.userInfo}>
                        <h3 className={styles.name}>{currentUser.name}</h3>
                        <p className={styles.username}>{currentUser.username}</p>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{currentUser.following}</span>
                        <span className={styles.statLabel}>Following</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{currentUser.followers}</span>
                        <span className={styles.statLabel}>Followers</span>
                    </div>
                </div>
            </Card>

            {/* Navigation Menu */}
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
                >
                    <span className={styles.icon}><HomeIcon size={20} /></span>
                    <span>Feed</span>
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
                >
                    <span className={styles.icon}><UserIcon size={20} /></span>
                    <span>Profile</span>
                </NavLink>
                <NavLink
                    to="/notifications"
                    className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
                >
                    <span className={styles.icon}><BellIcon size={20} /></span>
                    <span>Notifications</span>
                </NavLink>
                <NavLink
                    to="/messages"
                    className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
                >
                    <span className={styles.icon}><MessageIcon size={20} /></span>
                    <span>Messages</span>
                </NavLink>
                <div className={styles.separator}></div>
                <button className={styles.navItem}>
                    <span className={styles.icon}><SettingsIcon size={20} /></span>
                    <span>Settings</span>
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
