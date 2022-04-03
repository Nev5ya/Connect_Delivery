import {useNavigate} from "react-router-dom";

import Menu from "../../utils/Menu";

export const MenuChiefSettings = () => {
    // const history = useHistory()
    const navigate = useNavigate();
    const togglePageDashboard = () => {
        navigate('/ChiefAnalytics')
    }

    const togglePageStatistic = () => {
        navigate('/ChiefAnalytics/Statistic')
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