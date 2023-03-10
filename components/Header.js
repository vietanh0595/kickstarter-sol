import React from "react";
import { Menu } from "semantic-ui-react";
import styles from './Header.module.css';
import { Link } from "../routes";
const Header = () => {
    return (
        <Menu pointing className={styles.menu}>
            <Link route="/">
                <a className="item">
                    Crowd Coin
                </a>
            </Link>
            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">
                        Campaigns
                    </a>
                </Link>

                <Link route="/campaigns/new">
                    <a className="item">
                        +
                    </a>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}

export default Header;