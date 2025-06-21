import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

export function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/wastardy/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://x.com/your_username" target="_blank">
          <XIcon />
        </a>
        <a href="https://github.com/wastardy" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://t.me/wastardy" target="_blank">
          <TelegramIcon />
        </a>
      </div>
      <p> &copy; 2025 wastardy</p>
    </div>
  );
}
