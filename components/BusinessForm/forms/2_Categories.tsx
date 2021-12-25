import Image from "next/image";
import { Field } from "formik";

import { categories } from "@/lib/categoryList";

import styles from "../BusinessForm.module.scss";

const Categories = () => {
  return (
    <>
      <div
        role="group"
        aria-labelledby="categories-group"
        className={`${styles.categories}`}
      >
        {categories.map(({ label, value, imageSrc }) => (
          <label htmlFor={value} key={label} className={styles.label}>
            <Field
              name="category"
              value={label}
              type="radio"
              className={styles.input}
            />

            <div className={styles.categoryImage}>
              <Image src={imageSrc} width={20} height={20} alt={label} />
              <p>{label}</p>
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default Categories;