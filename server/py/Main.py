import sys
#import subprocess
from city_code import city_to_airport_code
from airport_distances import distance
from carbon_emission import co2calc

city1 = sys.argv[1]
city2 = sys.argv[2] 
model = sys.argv[3]

#calling city_to_airport_code for city1
code,coordinate = city_to_airport_code(city1)
if code == "Please enter a valid city / airport code.":
    code = "Please enter a valid city / airport code for "+city1+"."
    sys.exit(code)
else:
    lat1,lon1 = coordinate.strip().split(",",1)
    lon1 = lon1.strip()
    lon1 = float(lon1)
    lat1 = lat1.strip()
    lat1 = float(lat1)


#calling city_to_airport_code for city2
code,coordinate = city_to_airport_code(city2)
if code == "Please enter a valid city / airport code.":
    code = "Please enter a valid city / airport code for "+city2+"."
    sys.exit(code)
else:
    lat2,lon2 = coordinate.strip().split(",",1)
    lon2 = lon2.strip()
    lon2 = float(lon2)
    lat2 = lat2.strip()
    lat2 = float(lat2)


#calling distances between airports
dist_km = distance(lat1,lon1,lat2,lon2) 


#find carbon emissions 
CO2_per_pax,total_passengers_CO2_per_journey = co2calc(dist_km,model)
CO2_per_pax = CO2_per_pax.astype('str')
total_passengers_CO2_per_journey = total_passengers_CO2_per_journey.astype('str')

print("CO2_per_pax:", CO2_per_pax)
print("Total_passengers_CO2_per_journey:", total_passengers_CO2_per_journey)

#p = subprocess.Popen(CO2_per_pax, stdout=subprocess.PIPE, shell=True)
#(output, err) = p.communicate()
#q = subprocess.Popen(total_passengers_CO2_per_journey, stdout=subprocess.PIPE, shell=True)
#(output, err) = q.communicate()
