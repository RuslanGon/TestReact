import css from '../DarkModelToggle/DarkModelToggle.module.css'

const DarkModelToggle = () => {
    const mode = 'dark'
  return (
    <div className={css.container} >
    <div className={css.icon}>🌙</div>
    <div className={css.icon}>🔆</div>
    <div className={css.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"}}></div>
</div>
  )
}

export default DarkModelToggle