export interface IBusiness {
  id?: 144;
  creator?: {
    id: 5;
    full_name: "Jane Doe";
    email: "jdoe6@gmail.com";
  };
  services?: string[];
  phone_number: string;
  business_name: string;
  business_url: string;
  ig_handle: string;
  street_address: string;
  business_location: string;
  fixed_to_one_location: boolean;
  business_description: string;
  logo_url: string;
  sample_images: string;
  category: string;
  tags: string;
  slug: string;
  number_of_likes: number;
  verified: boolean;
  created_at?: string;
}
