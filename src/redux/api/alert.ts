import { AppDispatch } from "../store";
import { offAlert, onAlert } from "../slice/alertSlice";

export const setAlert = (msg: (string | null), type: (string | null), timeout = 1) => (dispatch: AppDispatch) => {
    dispatch(onAlert({ msg, type }));
    
    return setTimeout(() => dispatch(offAlert()), timeout);
}