import Image from "next/image";
import { Field, useField } from "formik";

import { categories } from "@/lib/categoryList";

import styles from "../BusinessForm.module.scss";

const Categories = () => {
  const [_, meta] = useField("category");

  return (
    <>
      {meta && meta.error && <p className={styles.formError}>{meta.error}</p>}

      <div
        role="group"
        aria-labelledby="categories-group"
        className="flex flex-col flex-wrap justify-center gap-2 md:flex-row"
      >
        {categories.map(({ label, imageSrc }) => (
          <label key={label}>
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
