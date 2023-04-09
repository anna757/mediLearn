import React from 'react'
import styles from './Header.module.css';

// Header.tsx
type HeaderProps = {
  onSearchChange?: (search: string) => void;
};

const Header = ({ onSearchChange  }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MediLearn</h1>
      <input
        type="text"
        className={styles.search}
        placeholder="Search for a course..."
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
      />
    </header>
  );
};

export default Header;