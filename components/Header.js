import React from "react";
import { Menu } from "semantic-ui-react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <Menu pointing className={styles.menu}>
            <Menu.Item
                name="Crowd Coin"
             />

            <Menu.Menu position="right">
                <Menu.Item>Campaigns</Menu.Item>

                <Menu.Item>+</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Header;