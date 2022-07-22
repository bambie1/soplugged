import styles from "./Stats.module.scss";

const content = [
  { number: 90, text: "Businesses" },
  { number: 10, text: "Cities" },
  { number: "10", text: "Categories" },
  { number: 1, text: "Platform" },
];

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <ul className={styles.statsList}>
          {content.map(({ number, text }) => (
            <li key={text} className={styles.statGroup}>
              <h3>{number}+</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stats;
