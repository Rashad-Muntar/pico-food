import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../assets/styles/footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.foodIconWrapper}>
      <FastfoodIcon className={styles.foodIcon} />
    </div>
    <div className={styles.contentWrapper}>
      <div className={styles.section}>
        <h5 className={styles.footerTitles}>Subscribe to our new letter</h5>
        <div>
          <TextField id="standard-basic" label="Enter your email" variant="standard" />
          <Button><ArrowForwardIcon className={styles.emailSendBtn} /></Button>
        </div>
        <FacebookOutlinedIcon className={styles.footerSocial} />
        <TwitterIcon className={styles.footerSocial} />
        <InstagramIcon className={styles.footerSocial} />
        <YouTubeIcon className={styles.footerSocial} />
      </div>
      <div className={styles.section}>
        <h5 className={styles.footerTitles}>Services</h5>
        <div className={styles.linksWrapper}>
          <p className={styles.footerLinks}>Online Order</p>
          <p className={styles.footerLinks}>Pre Reservation</p>
          <p className={styles.footerLinks}>24/7 Service</p>
          <p className={styles.footerLinks}>Organized Foodie Place</p>
          <p className={styles.footerLinks}>Clean Kitchen</p>
          <p className={styles.footerLinks}>Super Chefs</p>
        </div>
      </div>
      <div className={styles.section}>
        <h5 className={styles.footerTitles}>Quick links</h5>
        <div className={styles.linksWrapper}>
          <p className={styles.footerLinks}>Menu</p>
          <p className={styles.footerLinks}>Reviews</p>
          <p className={styles.footerLinks}>Blog</p>
          <p className={styles.footerLinks}>Reserve table</p>
          <p className={styles.footerLinks}>Order foods</p>
        </div>
      </div>
      <div className={styles.section}>
        <h5 className={styles.footerTitles}>About</h5>
        <div className={styles.linksWrapper}>
          <p className={styles.footerLinks}>Our Story</p>
          <p className={styles.footerLinks}>Benefit</p>
          <p className={styles.footerLinks}>Career</p>
          <p className={styles.footerLinks}>Our Chef</p>
        </div>
      </div>
      <div className={styles.section}>
        <h5 className={styles.footerTitles}>Contact</h5>
        <div className={styles.linksWrapper}>
          <p className={styles.footerLinks}>Contact</p>
          <p className={styles.footerLinks}>Support</p>
          <p className={styles.footerLinks}>FAQ</p>
        </div>
      </div>

    </div>
    <div className={styles.developerSection}>
      <small className={styles.myname}>Design and developed by Rashad Muntar</small>
      <div>
        <a href="https://github.com/Rashad-Muntar" target="_blank" aria-label="github" rel="noreferrer"><GitHubIcon className={styles.footerSocial} /></a>
        <a href="https://www.linkedin.com/in/rashad-muntar/" target="_blank" aria-label="linkedIn" rel="noreferrer"><LinkedInIcon className={styles.footerSocial} /></a>
        <a href="https://twitter.com/RashadToure" target="_blank" aria-label="twitter" rel="noreferrer"><TwitterIcon className={styles.footerSocial} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
