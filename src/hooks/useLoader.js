import {useSelector} from "react-redux";
import {loadingData} from "../containers/selector";

export const useLoader = (name, index = '') => {
    const {isLoading}  = useSelector(state => loadingData(state, {name, index}))
    return isLoading
}
