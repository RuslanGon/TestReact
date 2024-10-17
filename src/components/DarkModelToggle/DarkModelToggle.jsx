import css from '../DarkModelToggle/DarkModelToggle.module.css'

const DarkModelToggle = () => {
  return (
    <div className={css.container} >
    <div className={css.icon}>🌙</div>
    <div className={css.icon}>🔆</div>
    <div className={css.ball}></div>
</div>
  )
}

export default DarkModelToggle