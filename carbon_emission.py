import pandas as pd
fuel_consumption = pd.read_csv("C:\\Users\\user\\Kiwi\\Airline_fuel_consumption.csv")
fuel_consumption = fuel_consumption.groupby('Model')['Seats','Fuel burn (kg/km)','Sector'].mean().round(2)
#adjusted distance (due to earth's spherical shape
#GCD <550 - +50km, between 550 and 5500 - +100 km, >5500 - +125km
def co2calc(dist,model):
    for i in range(len(fuel_consumption)):
        if model == fuel_consumption.index[i]:
            if dist <= 550:
                adjusted_dist = dist+50
                fuel = fuel_consumption['Fuel burn (kg/km)'][i]
                persons_in_flight = fuel_consumption['Seats'][i]
            elif dist > 550 and dist <= 5500:
                adjusted_dist = dist+100
                fuel = fuel_consumption['Fuel burn (kg/km)'][i]
                persons_in_flight = fuel_consumption['Seats'][i]
            elif dist > 5500:
                adjusted_dist = dist+125
                fuel = fuel_consumption['Fuel burn (kg/km)'][i]
                persons_in_flight = fuel_consumption['Seats'][i]
    CO2_per_pax = (3.16 * (adjusted_dist * fuel * 0.85)/(persons_in_flight * 0.8)).round(3)
    total_passengers_CO2_per_journey = (3.16 * (adjusted_dist * fuel * 0.85)).round(3)
    return CO2_per_pax,total_passengers_CO2_per_journey