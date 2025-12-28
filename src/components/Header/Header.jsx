import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from '../common/Button/Button';
import styles from './Header.module.css';
import { ZapIcon, SunIcon, MoonIcon, MenuIcon } from '../common/Icons/Icons';
import { currentUser } from '../../utils/mockData';

const Header = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
                <div className={styles.logoSection}>
                    <Link to="/" className={styles.logo}>
                        <span className={styles.logoIcon}><ZapIcon size={28} /></span>
                        SocialDash
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/notifications" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
                        Notifications
                    </NavLink>
                    <NavLink to="/messages" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
                        Messages
                    </NavLink>
                </nav>

                <div className={styles.actions}>
                    <Button
                        variant="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={styles.themeToggle}
                    >
                        {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
                    </Button>

                    <Link to="/profile" className={styles.profileLink}>
                        <img
                            src={currentUser.avatar}
                            alt={currentUser.name}
                            className={styles.avatar}
                        />
                    </Link>

                    <Button
                        variant="icon"
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <MenuIcon size={24} />
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className={styles.mobileNav}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/notifications"
                        className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Notifications
                    </NavLink>
                    <NavLink
                        to="/messages"
                        className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Messages
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Profile
                    </NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
