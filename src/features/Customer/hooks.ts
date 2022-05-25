import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as actions from "./reducers";
import {RootState} from "../../store";

export const useRegionListStatus = () => useSelector((state:RootState) => state.customers.regions.status)

export const useRegionList=() => {
    const dispatch=useDispatch();
    useEffect(()=> {
        dispatch(actions.loadRegions())
    },[dispatch]);
    return useSelector((state : RootState) => state.customers.regions.regions)
}
