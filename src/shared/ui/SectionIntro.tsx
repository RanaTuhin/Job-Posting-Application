interface Props {
  title: string;
  subtitle: string;
  kicker?: string;
}

const SectionIntro = ({ title, subtitle, kicker }: Props) => {
  return (
    <div className="section-intro animate-fade-up">
      {kicker && <span className="section-kicker">{kicker}</span>}
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
};

export default SectionIntro;
