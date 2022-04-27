import {useState, useRef} from "react";

import { YMaps, Placemark, Map } from 'react-yandex-maps';
import {colorLabel} from "../../utils/constants";
import {Typography, Paper} from "@mui/material";

function MyMap({name, couriers, orders, clickOnMap, zoom = 9, sizeWidth= '100%', sizeHeight = '600px'}) {
    console.log('map', couriers, orders)
    const map = useRef(null);

    const mapData = (coord = [55.752485, 37.627795]) => {
        //console.log('mapData')
        return {
            center: coord,
            zoom: zoom
        }
    };

    const  [coordinates, setCoordinates] = useState([{typeLabel:'', name:'', status_id:'', description:'', address:'', coordinates: [0, 0]}]);

    const showCouriers = () => {
        couriers.forEach(label => {
            setCoordinates((prev) => {
                label.typeLabel = label.role_title;
                label.address = '';
                label.status_id = label.user_status_id;
                label.coordinates = (label.coords) ? label.coords.split(',') : null;
                return [...prev, label];
            })
        })
    };

    const showOrders = (ymaps) => {
        orders.forEach(label => {
            console.log('map showOrders',label, ymaps.geocode(label.address))
                ymaps.geocode(label.address)
                    .then(result => {

                        setCoordinates((prev) => {
                            label.typeLabel = 'order';
                            label.status_id = label.order_status_id;
                            // console.log('map result',label, result.geoObjects.get(0), result )
                            label.coordinates = (result.geoObjects.get(0) !== undefined) ? result.geoObjects.get(0).geometry.getCoordinates() : ''
                            // console.log('map setCoordinates label', label.name, label.coordinates)
                            return [...prev, label];
                        })
                        console.log('map setCoordinates',coordinates)
                    })
        })
    };

    const addRoute = (ymaps) => {
        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: [couriers[0].coordinates, orders[0].address],
                params: {
                    routingMode: "pedestrian"
                }
            },
            {
                boundsAutoApply: true
            }
        );
        map.current.geoObjects.add(multiRoute);
    };

    const showLabels = (ymaps) => {
        if (couriers.length !== 0) showCouriers();
        if (orders.length !== 0) showOrders(ymaps);
        // if (couriers.length === 1 && orders.length === 1) addRoute(ymaps);
        if (couriers.length === 1 && orders.length !== 0) addRoute(ymaps);
    };

    return (
        <>
            <Typography variant='h4' sx={{my:2}}>{name}</Typography>
            <Paper elevation={3}>
            <YMaps
                query={{
                    apikey: "91ca985a-ff80-4ef6-b511-c2b5e1758f10",
                }}
            >
                <Map
                    modules={['geocode', 'route', 'multiRouter.MultiRoute']}
                    instanceRef={map}
                    defaultState={mapData()}
                    width={sizeWidth}
                    height={sizeHeight}
                    onLoad={showLabels}
                    onClick={clickOnMap}
                >
                    {
                        coordinates.map(label => {
                           return  <Placemark
                                key={Math.random()}
                                geometry={label.coordinates}
                                properties={{
                                    balloonContentBody: label.description,
                                    iconContent: label.name,
                                }}
                                options={{
                                    preset: `islands#${colorLabel(label.typeLabel, label.status_id)}StretchyIcon`
                                }}
                            />
                        })
                    }
                </Map>
            </YMaps>
            </Paper>
        </>
    );
};


export default MyMap;

