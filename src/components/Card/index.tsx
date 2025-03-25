import styles from './styles.module.css'

type CardProps = {
  title?: string | React.ReactNode
  content?: string | React.ReactNode
  children?: React.ReactNode
  className?: string
}

const Card = ({ title, content, className, children }: CardProps) => {
  return (
    <div
      className={`${styles.r_card} ${className}`}
      role="region"
      aria-labelledby="card-title"
    >
      <div className={styles.card_header} id="card-title">
        {title}
      </div>
      <div className={styles.card_content}>{children || content}</div>
    </div>
  )
}

export default Card
