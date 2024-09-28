import styles from "./Item.module.css";

const Item = (props,bought) => {
    let {foodItem}=props;
return   <li className={`${styles ['kg-item']} list-group-item ${bought && 'active'}`}><span className={styles['kg-span']}>{foodItem}</span>
<button className={`${styles.button} btn btn-info`}
onClick={() => console.log(`${foodItem} being bought.`)}
>Buy</button>
</li>
}
export default Item;