import { YMaps, Placemark, Map } from 'react-yandex-maps';
import {useState, useRef} from "react";
import {colorLabel} from "../../utils/constants";

function MyMap({name, couriers, orders, clickOnMap, zoom = 9, sizeWidth= '800px', sizeHeight = '800px'}) {
    //console.log('map', couriers, orders)
    const map = useRef(null);

    const mapData = (coord = [55.752485, 37.627795]) => {
        //console.log('mapData')
        return {
            center: coord,
            zoom: zoom
        }
    };

    const  [coordinates, setCoordinates] = useState([{typeLabel:'', name:'', status:'', description:'', address:'', coordinates: [0, 0]}]);

    const showCouriers = () => {
        couriers.forEach(label => {
            setCoordinates((prev) => {
                label.typeLabel = label.role_title;
                label.address = '';
                label.status = label.user_status;
                label.coordinates = label.coords.split(',')
                return [...prev, label];
            })
        })
    };

    const showOrders = (ymaps) => {
        orders.forEach(label => {
                ymaps.geocode(label.address)
                    .then(result => {
                        setCoordinates((prev) => {
                            label.typeLabel = 'order';
                            label.coordinates = result.geoObjects.get(0).geometry.getCoordinates()
                            return [...prev, label];
                        })
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
        console.log('this.route', multiRoute)
        map.current.geoObjects.add(multiRoute);
    };

    const showLabels = (ymaps) => {
        console.log('showLabels', orders)
        if (couriers.length !== 0) showCouriers();
        if (orders.length !== 0) showOrders(ymaps);
        if (couriers.length === 1 && orders.length === 1) addRoute(ymaps);
    }

    return (
        <>
            <h3>{name}</h3>
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
                            console.log('coordinates', coordinates)
                           return  <Placemark
                                key={Math.random()}
                                geometry={label.coordinates}
                                properties={{
                                    balloonContentBody: label.description,
                                    iconContent: label.name,
                                }}
                                options={{
                                    preset: `islands#${colorLabel(label.typeLabel, label.status)}StretchyIcon`
                                }}
                            />
                        })
                    }
                </Map>
            </YMaps>
        </>
    );
};


export default MyMap;

