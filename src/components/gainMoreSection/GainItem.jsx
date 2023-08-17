import Icon from '../UI/icon/Icon';
import css from './GainItem.module.css';

export default function GainItem(props) {
  // console.log('css ===', css);
  return (
    <div className={css.grid}>
      <div className={css.rowSpan2}>
        <Icon>{props.icon}</Icon>
      </div>
      <h3>{props.title}</h3>
      <p>{props.descr}</p>
    </div>
  );
}
