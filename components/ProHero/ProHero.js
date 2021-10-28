import Image from "next/image";
import { Button, Grid, Typography } from "@material/mui-components";
import styles from "./ProHeroStyles.module.scss";

const ProHero = () => {
  return (
    <section className={styles.hero}>
      <Grid container className={styles.grid}>
        <Grid item xs={12} md={6}>
          <div className={styles.heroText}>
            <Typography variant="h1">
              Increase visibility,
              <br /> reduce stress
            </Typography>
            <Typography className={styles.tagLine}>
              Everything you need to launch and improve your digital presence as
              a small to medium-sized business
            </Typography>
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
