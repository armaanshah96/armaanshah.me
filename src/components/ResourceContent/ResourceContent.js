import classes from './ResourceContent.module.css';

const ResourceContent = () => {
  return <div className={classes.resources}>
    <img className={classes.resource} src={process.env.PUBLIC_URL + "/images/tree-of-life-groundskeeper.jpeg"}/>
    <img className={classes.resource} src={process.env.PUBLIC_URL + "/images/tree-of-life-arborist.png"}/>
    <img className={classes.resource} src={process.env.PUBLIC_URL + "/images/tree-of-life-horticulturist.png"}/>
    <img className={classes.resource} src={process.env.PUBLIC_URL + "/images/tree-of-life-crazy-scarecrow.png"}/>
  </div>
}

export default ResourceContent;