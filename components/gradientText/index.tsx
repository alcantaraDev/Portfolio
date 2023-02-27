import styles from "./style.module.css"

type gradientTextProps = {
    children: string
    className?: string
}

export function GradientText({ children, className }:gradientTextProps) {
    return (
        <div className={`${styles.text} ${className}`}>{children}</div>
    )
}