import css from '../pages/HomePage.module.css'

const HomePage = () => {
    return (
      <div>
        <div className={css.text}>
        <h1>Welcome to the Home Page </h1>
        <p>This is the main landing page of our application. Here you can find links to various sections of our website.</p>
        </div>
      </div>
    );
  }
  
  export default HomePage;