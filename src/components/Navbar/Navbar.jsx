import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

    <img src="./images/logo.png"></img>

    <ul>
        <li>Menu</li>
        <li>Contact</li>
        <li>Home</li>
    </ul>


      
    </nav>
  )
}

export default Navbar
