export interface IBusiness {
  business_name: string;
  category: string;
  verified: boolean;
  slug: string;
  business_description: string;
  business_location: string;
  id?: 144;
  creator?: {
    id: 5;
    full_name: "Jane Doe";
    email: "jdoe6@gmail.com";
  };
  services?: string[];
  phone_number?: string;
  website_url?: string;
  ig_handle?: string;
  street_address?: string;
  fixed_to_one_location?: boolean;
  logo_url?: string;
  sample_images?: string;
  tags?: string;
  number_of_likes?: number;
  created_at?: string;
}
