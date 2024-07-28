'use client';
import React, { useState } from 'react';
import { Menu } from '@mui/base/Menu';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { MenuButton } from '@mui/base/MenuButton';
import { Dropdown } from '@mui/base/Dropdown';
import styles from './style.module.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Image } from '@/design-system/Atoms';

interface MenuDropdownProps {
  buttonLabel: string;
  menuItems: { label: string; icon?: React.ReactNode; onClick: () => void }[];
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  menuItemClassName?: string;
  srcImage?: string;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  buttonLabel,
  menuItems,
  className,
  buttonClassName,
  menuClassName,
  menuItemClassName,
  srcImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const createHandleMenuClick = (onClick: () => void) => {
    return () => {
      onClick();
      setIsOpen(false);
    };
  };

  return (
    <Dropdown onOpenChange={handleMenuClick}>
      <MenuButton
        className={`${styles.triggerButtonSimple} ${buttonClassName}`}
      >
        <span>
          {' '}
          {/* <Image   alt='img' src={srcImage}  height={10} width={10}/>{' '} */}
        </span>
        {buttonLabel}
        {isOpen ? (
          <MdOutlineKeyboardArrowDown size={25} />
        ) : (
          <MdOutlineKeyboardArrowUp size={25} />
        )}
      </MenuButton>

      <Menu
        className={`${styles.customMenuSimple} ${menuClassName}`}
        slotProps={{
          listbox: { className: `${styles.customMenuSimpleListbox}` },
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            className={`${styles.customMenuSimpleItem} ${menuItemClassName}`}
            onClick={createHandleMenuClick(item.onClick)}
          >
            {item.icon && (
              <span className={styles.menuItemIcon}>{item.icon}</span>
            )}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
      <Styles />
    </Dropdown>
  );
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

function Styles() {
  return (
    <style>{`
    .${styles.customMenuSimpleListbox} {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      padding: 6px;
      margin: 12px 0;
      min-width: 200px;
      border-radius: 12px;
      overflow: auto;
      outline: 0px;
      background: #fff;
      border: 1px solid #e0e0e0;
      color: #333;
      box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    }

    .${styles.customMenuSimpleItem} {
      list-style: none;
      padding: 8px;
      border-radius: 8px;
      cursor: default;
      user-select: none;
      display: flex;
      align-items: center;
    }

    .${styles.menuItemIcon} {
      margin-right: 8px;
    }

    .${styles.customMenuSimpleItem}:last-of-type {
      border-bottom: none;
    }

    .${styles.customMenuSimpleItem}:focus {
      outline: 3px solid #94a3b8;
      background-color: #e2e8f0;
      color: #333;
    }

    .${menuItemClasses.disabled} {
      color: #9ca3af;
    }

    .${styles.triggerButtonSimple} {
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 150ms ease;
      cursor: pointer;
      background: #fff;
      border: 1px solid #e0e0e0;
      color: #333;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: #f3f4f6;
        border-color: #d1d5db;
      }

      &:active {
        background: #e5e7eb;
      }

      &:focus-visible {
        box-shadow: 0 0 0 4px #cbd5e1;
        outline: none;
      }
    }

    .${styles.customMenuSimple} {
      z-index: 1;
    }
    `}</style>
  );
}

export default MenuDropdown;
