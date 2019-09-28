import pandas as pd

iata = pd.read_csv("Kiwi\\iata_airport_list.txt")
iata.head()
#pre-process and clean to keep just the city and code
new = iata['city_code^city_name^state_code^country_code^tz_code^stv^por_code^por_name^loc_id^loc_type'].str.split("^",2,expand = True)
new.head()
iata['city'] = new[1]
iata['code'] = new[0]
iata.drop(columns=['city_code^city_name^state_code^country_code^tz_code^stv^por_code^por_name^loc_id^loc_type'],inplace=True)
iata.head()


#enter the nodejs endpoint as a parameter=city

city_to_airport_code(city)

#function 
def city_to_airport_code(cityname):
    for i in range(len(iata)):
        iata.city[i] = iata.city[i].lower()
        cityname = cityname.lower()
        airport_code = ''
        #import pdb
        #pdb.set_trace()
        if cityname == iata.city[i]:
            airport_code = iata.code[i]
            return airport_code

