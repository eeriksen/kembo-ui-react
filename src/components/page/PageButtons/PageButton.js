import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PageButtons.scss";
import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";
import { AppContext } from "../../layout/AppContext";

export const PageButton = ({ icon, label, count, active, onClick, link }) => {
    const { currentPage, setCurrentPage } = useContext(AppContext);

    useEffect(() => {
        setCurrentPage({
            ...currentPage,
            hasButtons: true
        });

        return () => {
            setCurrentPage({
                ...currentPage,
                hasButtons: false
            });
        };
    }, []);

    return (
        <Clickable
            className={classNames(styles.button, {
                [styles.active]: active
            })}
            link={link}
            onClick={!active ? onClick : null}
            activeClassName={styles.active}
        >
            <span className={styles.icon}>
                <Icon name={icon} />
            </span>
            <span className={styles.label}>{label}</span>

            {count ? (
                <span className={styles.count}>
                    <span className={styles.number}>{count}</span>
                </span>
            ) : null}
        </Clickable>
    );
};

PageButton.propTypes = {
    /**
     * The text label of the button.
     */
    label: PropTypes.string,
    /**
     * The name of an icon to display.
     */
    icon: PropTypes.string,
    /**
     * Display a counter on the button.
     */
    count: PropTypes.number,
    /**
     * The link this button should navigate to.
     */
    link: PropTypes.string,
    /**
     * Click handler.
     */
    onClick: PropTypes.func,
    /**
     * Define manually if button should show as active or not. Used in conjunction with onClick.
     */
    active: PropTypes.bool
};
