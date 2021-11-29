import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";

import styles from "./SubscribeForm.module.scss";

const SubscribeForm = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Stay Plugged-in</h3>
      <p>
        Join our mailing list to receive news and updates on new service
        features, blog posts, and be in the know!
      </p>
      <form className={styles.subscribeForm}>
        <Input placeholder="John" label="First Name" />
        <Input placeholder="Doe" label="Last Name" />
        <Input placeholder="john@doe.com" label="Email address" type="email" />
        <div className="mb-1">
          <Button type="submit">Subscribe</Button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
