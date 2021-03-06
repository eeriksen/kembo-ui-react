import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Image.scss";
import { useDropzone } from "react-dropzone";
import { Icon } from "../../graphic/Icon";
import { ProgressCircle } from "../../loader/ProgressCircle";

export const Image = ({
    src,
    percent,
    thumbnail,
    scale,
    mod,
    placeholder,
    onClick,
    onFileSelect,
    alt,
    actions
}) => {
    const { getRootProps, getInputProps, inputRef } = useDropzone({
        onDrop: (files) => onFileSelect(files && files[0]),
        multiple: false,
        accept: "image/*",
        onClick: (evt) => evt.preventDefault(),
        disabled: percent !== null
    });

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (onFileSelect) {
            inputRef.current.click();
        }
    };

    return (
        <div
            className={classNames(styles.base, {
                // Sizes
                [styles.thumbnail]: thumbnail,
                [styles.thumbSmall]: thumbnail === "small",
                [styles.thumbRegular]: thumbnail === "regular",
                [styles.thumbMedium]: thumbnail === "medium",
                [styles.thumbLarge]: thumbnail === "large",

                // Scales
                [styles.scaleFill]: scale === "fill",
                [styles.scaleSquare]: scale === "square",
                [styles.scaleA16_9]: scale === "16:9",

                // Mods
                [styles.modRounded]: mod && mod.indexOf("rounded") >= 0,
                [styles.modOval]: mod && mod.indexOf("oval") >= 0,
                [styles.modGray]: mod && mod.indexOf("gray") >= 0,

                // Clickable
                [styles.isClickable]: onClick || onFileSelect
            })}
            onClick={handleClick}
        >
            {/* Wrapper */}
            <div className={styles.wrapper}>
                {/* Actions */}
                {actions ? <div className={styles.actions}>{actions}</div> : null}

                {/* Percent loaded */}
                {percent ? (
                    <div className={styles.progress}>
                        <div className={styles.progressBox}>
                            <ProgressCircle
                                strong
                                percent={percent}
                                value=" "
                                annotation={null}
                                strokeWidth={8}
                                trailWidth={7}
                            />
                        </div>
                    </div>
                ) : null}

                {/* Image / Placeholder */}
                {src ? (
                    <div className={styles.image}>
                        <img alt={alt} src={src} />
                    </div>
                ) : percent == null ? (
                    <div
                        className={classNames(styles.placeholder, {
                            [styles.default]: !placeholder
                        })}
                    >
                        {placeholder || <Icon name="image" />}
                    </div>
                ) : null}
            </div>

            {/* File select dropzone */}
            {onFileSelect ? (
                <div {...getRootProps()}>
                    <input className={styles.input} {...getInputProps()} />
                </div>
            ) : null}
        </div>
    );
};

Image.defaultProps = {
    percent: null
};

Image.propTypes = {
    /**
     * Image url
     */
    src: PropTypes.string,
    /**
     * Show loading indicator with percent progress
     */
    percent: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
    /**
     * Display thumbnail sized picture
     */
    thumbnail: PropTypes.oneOf(["small", "medium", "regular", "large"]),
    /**
     * Scale picture
     */
    scale: PropTypes.oneOf(["fill", "square", "16:9"]),
    /**
     * Apply modification to image. One or more of "rounded", "oval", "gray".
     */
    mod: PropTypes.string,
    /**
     * Placeholder if no image
     */
    placeholder: PropTypes.any,
    /**
     * Click handler
     */
    onClick: PropTypes.func,
    /**
     * File select on click
     */
    onFileSelect: PropTypes.func,
    /**
     * Buttons / controls to display on top of image
     */
    actions: PropTypes.any,
    /**
     * Image "alt" text
     */
    alt: PropTypes.string
};
