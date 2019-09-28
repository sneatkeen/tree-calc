import pandas as pd

airport_df = pd.read_csv("C:\\Users\\user\\Kiwi\\airport-codes.csv")
#pre-process and clean to keep just the city and code
airport_df = airport_df[['type','name','iso_country','municipality','iata_code','coordinates']]
airport_df = airport_df.dropna(axis=0, subset=['iata_code'])
airport_df = airport_df.reset_index(drop=True)
airport_df.municipality = airport_df.municipality.astype('str')
airport_df.iata_code = airport_df.iata_code.astype('str')
 

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
        code = "Please enter a valid city / airport code."
        coor = 0
        return code,coor