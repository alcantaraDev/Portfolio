import styles from "./style.module.css"

type gradientTextProps = {
    children: string
}

export function GradientText({ children }:gradientTextProps) {
    return (
        <div className={styles.text}>{children}</div>
    )
}