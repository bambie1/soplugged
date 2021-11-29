import { GlobalState } from "little-state-machine";

import { IBusiness } from "@/types/Business";

export function updateAction(
  state: GlobalState,
  payload: {
    businessDetails: IBusiness;
  }
): GlobalState {
  return {
    ...state,
    ...payload,
  };
}
