import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';
import Resume from '../../../../assets/Resume.pdf'

import classes from './ResumeButton.module.css';

const ResumeButton = (props) => {
  return (
    <div className={props.className}>
        <IconButton href={Resume} target='_blank'>
          <ArticleIcon/>
          <div className={classes.labelText}>Resume</div>
        </IconButton>
    </div>
  );
};

export default ResumeButton;