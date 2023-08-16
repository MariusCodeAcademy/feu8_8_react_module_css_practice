import css from './style.module.css';

export default function Btn(props) {
  console.log('css ===', css);
  return <button className={css.btn}>{props.children}</button>;
}
