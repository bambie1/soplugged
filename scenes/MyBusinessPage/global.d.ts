import "little-state-machine";

import { IBusiness } from "@/types/Business";

declare module "little-state-machine" {
  interface GlobalState {
    businessDetails: IBusiness;
  }
}
