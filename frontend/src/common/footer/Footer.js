import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerText}>
        Copyright &copy; 2025 Justin Xing
      </div>
    </div>
  );
}

export default Footer;