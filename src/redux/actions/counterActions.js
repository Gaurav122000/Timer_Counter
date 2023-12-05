

// define counter action constants here
export const INCREMENT_COUNTER = "Increment Counter";
export const DECREMENT_COUNTER = "Decrement Counter";
export const RESET_COUNTER = "Reset Counter";

// define counter action creators here
export const IncrementCounter = () => ({ type: INCREMENT_COUNTER });
export const DecrementCounter = () => ({ type: DECREMENT_COUNTER });
export const ResetCounter = () => ({ type: RESET_COUNTER });