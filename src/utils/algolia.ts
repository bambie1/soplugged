import qs from "qs";

export const createURL = (state: any) => `?${qs.stringify(state)}`;
