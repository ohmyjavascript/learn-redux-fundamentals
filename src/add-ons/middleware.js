// S ---> N --> ACK
export const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching an action', action);
  let result = next(action);
  console.log('Next state is ', store.getState());
  return result;
};
