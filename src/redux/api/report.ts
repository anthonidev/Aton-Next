import axios from "axios";
import { report_fail, report_ok } from "../slice/reportSlice";
import { AppDispatch } from "../store";


export const getReports = () => async (dispatch: AppDispatch) => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/report/`,
        {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => {
            
            dispatch(report_ok(res.data));
            console.log(res.data);

        }).catch(err => {
            dispatch(report_fail('fail'));
        })

}