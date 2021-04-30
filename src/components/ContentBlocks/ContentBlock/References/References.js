import classes from './References.module.css'
const References = (props) => {
  return props.links
    ? props.links.map((item) => <a className={classes.url} href={item.url}>{item.name}</a>)
    : null;
};

export default References;
