import s from "./FilterSection.module.css";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FilterSection = (props: FilterSectionProps) => {
  return (
    <section className={s["section"]}>
      <p className={s["title"]}>{props.title}</p>
      {props.children}
    </section>
  );
};

export default FilterSection;
