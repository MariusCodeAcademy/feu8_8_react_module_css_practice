import SectionTitle from '../UI/sectionTitle/SectionTitle';
import css from './style.module.css';

export default function GainMore() {
  return (
    <section className={css.wrap}>
      <SectionTitle
        left
        pill='features'
        title='Gain more insight into how people use your'
        subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
      />

      <div className={css.grid}>
        <div>left</div>
        <img src='/img/gainMore.jpg' alt='pen and paper' />
      </div>
    </section>
  );
}
