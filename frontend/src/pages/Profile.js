import React from 'react';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import man from './man.jpeg';
const styles = {
  row: {
    display: 'flex',
    justifyContent: 'right',
  },
  avatar: {
    margin: 10,
    float: 'right',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

const Profile = (props) => {
  const {className, classes} = props;
  return(
      <div><Avatar
         alt="Tim Harris"
         src={man}
         className={classNames(classes.avatar, classes.bigAvatar)}
       />

      </div>
  )
}

export default withStyles(styles)(Profile);
