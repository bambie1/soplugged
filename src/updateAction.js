export default function updateAction(state, payload) {
  return {
    ...state,
    businessInfo: {
      ...state.businessInfo,
      ...payload,
    },
  };
}
