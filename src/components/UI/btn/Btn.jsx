import css from './style.module.css';

export default function Btn(props) {
  console.log('css ===', css);
  const genClasses = props.secondary ? `${css.btn} ${css.gray}` : css.btn;
  return <button className={genClasses}>{props.children}</button>;
}
