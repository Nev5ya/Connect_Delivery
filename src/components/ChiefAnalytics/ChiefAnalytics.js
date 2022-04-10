import {Route, Routes} from "react-router-dom";

import {Dashboard} from "./Dashboard";
import {Statistic} from "./Statistic";
import {MenuChiefPageHeader} from "./MenuChiefPageHeader";

export const ChiefAnalytics = () => {
    return (
        <>
            <MenuChiefPageHeader/>
            <Routes>
                <Route index element={<Dashboard/>} />
                <Route path="statistic" element={<Statistic/>}/>
            </Routes>
        </>
    )
}
