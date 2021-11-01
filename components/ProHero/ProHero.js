import Image from "next/image";
import { Button, Grid } from "@material/mui-components";
import styles from "./ProHeroStyles.module.scss";

const ProHero = () => {
  return (
    <section className={styles.hero}>
      <Grid container className={styles.grid}>
        <Grid item xs={12} md={6}>
          <div className={styles.heroText}>
            <h1>
              Increase visibility,
              <br /> reduce stress
            </h1>
            <p className={styles.tagLine}>
              Everything you need to launch and improve your digital presence as
              a small to medium-sized business
            </p>
            <Button variant="contained" color="secondary">
              Let's Talk
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Image */}
        </Grid>
      </Grid>
    </section>
  );
};

export default ProHero;
