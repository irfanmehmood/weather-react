import { Cookie } from './Cookie';

    const initialState = {

        SelectedCityID: Cookie.cities[0].id, 
        WeatherData: [],
        StoredCities: Cookie.cities, 
        ShowCityFinder: false,
        AddCityToCookie: false,
        AjaxLoading: true
    };
  
    function reducer(state, action) {

        switch (action.type) {

            case 'setAjaxLoading':

                return {
                    SelectedCityID: state.SelectedCityID, 
                    WeatherData: state.WeatherData,
                    StoredCities: state.StoredCities, 
                    ShowCityFinder: state.ShowCityFinder,
                    AddCityToCookie: state.AddCityToCookie,
                    AjaxLoading: action.payload
                };   
                
            case 'showCityFinder':

                return {
                    SelectedCityID: state.SelectedCityID, 
                    WeatherData: state.WeatherData,
                    StoredCities: state.StoredCities, 
                    ShowCityFinder: true,
                    AddCityToCookie: state.AddCityToCookie,
                    AjaxLoading: state.AjaxLoading
                };
            
            case 'removeCityFromList':

                    if (state.StoredCities.length > 1) {

                        let lastCityInList;
                        let afterCityRemFromList = [];
                
                        state.StoredCities.forEach((city) => {
                            if(city.id !== state.SelectedCityID) {
                            afterCityRemFromList.push(city);
                            }
                        });

                        lastCityInList = afterCityRemFromList[afterCityRemFromList.length-1];
                        Cookie.cities = afterCityRemFromList;

                        return {
                            SelectedCityID: lastCityInList.id, 
                            WeatherData: state.WeatherData,
                            StoredCities: afterCityRemFromList, 
                            ShowCityFinder: state.ShowCityFinder,
                            AddCityToCookie: state.AddCityToCookie,
                            AjaxLoading: state.AjaxLoading
                        };
                    }
                    break;

            case 'setWeatherData':

                let AddCityToListAndCookie = false;
                AddCityToListAndCookie = state.StoredCities.length > 5 ? false : true;
                AddCityToListAndCookie = state.AddCityToCookie;

                
                if (AddCityToListAndCookie) {
                    AddCityToListAndCookie = state.StoredCities.some((city) => !city.id === action.payload.city.id);
                }

                if (AddCityToListAndCookie) {
                    Cookie.cities = [...state.StoredCities, action.payload.city];
                }


                return {
                    SelectedCityID: state.SelectedCityID, 
                    WeatherData: action.payload.data,
                    StoredCities: ( AddCityToListAndCookie ? [...state.StoredCities, action.payload.city] : state.StoredCities),                 
                    ShowCityFinder: false,
                    AddCityToCookie: false,
                    AjaxLoading: false
                };

            case 'setSelectedCityID':
                /**
                 * No need to change state if user is clicking same button,
                 * As it will keep on firing API requeset
                 */
                if (state.SelectedCityID !== action.payload.cityId) {
                    return {
                        SelectedCityID: action.payload.cityId, 
                        WeatherData: state.WeatherData,
                        StoredCities: state.StoredCities, 
                        ShowCityFinder: state.ShowCityFinder,
                        AddCityToCookie: action.payload.AddCityNameToCookieList,
                        AjaxLoading: state.AjaxLoading
                    };
                } else {
                    return state;
                }

            default:
                break;
        }
    }

  export default {reducer, initialState};