import pandas as pd
from math import sin, cos, sqrt, atan2, radians


airport_df = pd.read_csv("./airport-codes.csv")
#pre-process and clean to keep just the city and code
airport_df = airport_df[['type','name','iso_country','municipality','iata_code','coordinates']]
airport_df = airport_df.dropna(axis=0, subset=['iata_code'])
new = airport_df['coordinates'].str.split(",",1,expand = True)
airport_df['lat'] = new[0]
airport_df['lon'] = new[1]
airport_df = airport_df.reset_index(drop=True)
airport_df.drop(columns=['coordinates'],inplace=True)

#function 
def city_to_airport_code(cityname):
    #airport_df.municipality = map(lambda x: str(x).lowercase(), airport_df.municipality)
    for i in range(len(airport_df)):
        airport_df.municipality[i] = airport_df.municipality[i].lower()
        cityname = cityname.lower()
        airport_code = ''
        if cityname == airport_df.municipality[i]:
            airport_code = airport_df.iata_code[i]
            coor = airport_df.coordinates[i]
            #return {'airport_code':airport_code,'coor':coor}
            return airport_code,coor
        elif cityname == airport_df.iata_code[i]:
            airport_code = airport_df.iata_code[i]
            coor = airport_df.coordinates[i]
            #return {'airport_code':airport_code,'coor':coor}
            return airport_code,coor
    if airport_code == '':
        print("Please enter a valid city / airport code.")

def distance(lat1,lon1,lat2,lon2):
    # approximate radius of earth in km
    R = 6373.0
    lat1 = radians(lat1)
    lat2 = radians(lat2)
    lon1 = radians(lon1)
    lon2 = radians(lon2)
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    dist = R * c
    return dist

#enter the nodejs endpoint as a parameter2=city1,city2 
if city1:
    code,coordinate = city_to_airport_code(city1)
    lat,lon = coor.strip().split(",",1)
    lon1 = lon.strip()
    lat1 = lat.strip()
    lat1 = float(lat1)
    lon1 = float(lon1)
    if code == "Please enter a valid city / airport code.":
        code = "Please enter a valid city / airport code for "+city1+"."
    else:
        
if city2:
    code = city_to_airport_code(city2)
    code,coordinate = city_to_airport_code(city1)
    lat,lon = coor.strip().split(",",1)
    lon2 = lon.strip()
    lat2 = lat.strip()
    lat2 = float(lat2)
    lon2 = float(lon2)
    if code == "Please enter a valid city / airport code.":
        code = "Please enter a valid city / airport code for "+city2+"."

dist_km = distance(lat1,lon1,lat2,lon2) 