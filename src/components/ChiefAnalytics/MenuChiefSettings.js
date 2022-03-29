import {useHistory} from "react-router-dom";

import Menu from "../../utils/Menu";

export const MenuChiefSettings = () => {
    const history = useHistory()
    const togglePageDashboard = () => {
        history.push('/ChiefAnalytics')
    }

    const togglePageStatistic = () => {
        history.push('/ChiefAnalytics/Statistic')
    }

    const menuItem = [
        {name: 'Dashboard', func: togglePageDashboard},
        {name: 'Statistic', func: togglePageStatistic},
    ];

    return (
        <>
            <Menu menuItem={menuItem}/>
        </>
    )
}