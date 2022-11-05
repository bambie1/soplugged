export type MyEvents = {
  "Edit your business": { "Business name": string; "From suggestion": boolean };
  "Pro page consult": {
    Position: string;
  };
  "Add your business": {
    User: string;
  };
  "Impression on business page": {
    Type: "Instagram" | "Website" | "Phone" | "Contact";
    Business: string;
  };
};
