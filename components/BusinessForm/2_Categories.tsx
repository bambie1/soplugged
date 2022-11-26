import Image from "next/image";

import { categories } from "@/lib/categoryList";

import styles from "./BusinessForm.module.scss";
import { BusinessForm } from "layouts/BusinessForm";
import { Button } from "@/styled/Button";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

const Categories = () => {
  const { handleNextStep } = useBusinessStore();

  const handleConfirm = () => {
    handleNextStep();
  };

  return (
    <BusinessForm
      title="Category"
      subtitle="Select the most-fitting category for your business"
    >
      <form className="grid">
        <div
          role="group"
          aria-labelledby="categories-group"
          className="flex flex-col flex-wrap justify-center gap-2 md:flex-row"
        >
          {categories.map(({ label, imageSrc }) => (
            <label key={label}>
              <input
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

        <Button onClick={handleConfirm}>Next</Button>
      </form>
    </BusinessForm>
  );
};

export default Categories;
