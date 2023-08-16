import css from './GainItem.module.css';

export default function GainItem(props) {
  console.log('css ===', css);
  return (
    <div className={css.grid}>
      <div className={css.rowSpan2}>icon</div>
      <h3>{props.title}</h3>
      <p>{props.descr}</p>
    </div>
  );
}
