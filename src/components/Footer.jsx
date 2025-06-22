import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="socialMedia">
            <a
              href="https://www.instagram.com/wastardy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <XIcon />
            </a>
            <a
              href="https://github.com/wastardy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://t.me/wastardy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Pedro's Pizzeria. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
