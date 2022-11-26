import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { BusinessForm } from "layouts/BusinessForm";

const Contact = () => {
  return (
    <BusinessForm
      title="Contact"
      subtitle="Add helpful contact info for your potential customers"
    >
      <Input
        label="Website Url"
        prefix="https://"
        placeholder="www.soplugged.com"
        name="business_url"
      />
      <Input
        label="Phone Number"
        placeholder="6131234567"
        name="phone_number"
        type="tel"
      />
      <Input label="IG Handle" placeholder="sopluggd" name="ig_handle" />

      <Button>Next</Button>
    </BusinessForm>
  );
};

export default Contact;
