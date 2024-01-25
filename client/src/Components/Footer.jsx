import "../Styles/Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


function Footer(){
  return(
    <>
    <footer className="footer d-flex flex-row justify-content-between align-items-center">
      <ul className="d-flex flex-row justify-content-between pt-3 bg-transparent">
        <li className="bg-transparent me-3">
          <a li className="bg-transparent" href="https://github.com/noside44">
            <FaGithub className="footer-icon bg-transparent"/>
          </a>
        </li>
        <li li className="bg-transparent me-3">
          <a li className="bg-transparent" href="https://www.linkedin.com/in/%C3%A9dison-chica-%C3%A1lvarez-930a071b4/">
            <FaLinkedin className="footer-icon bg-transparent"/>
          </a>
        </li>
        <li li className="bg-transparent">
          <FaReact className="footer-icon bg-transparent"/>
        </li>
      </ul>
      <p className="footer-app-name bg-transparent me-5 pt-3">Parce App - 2024</p>
    </footer>
    </>

  )    
}

export { Footer }