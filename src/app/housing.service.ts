import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // protected housingLocationList: HousingLocation[] = [
   
  // ];

  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]>{
      const data =  await fetch(this.url);

      return await data.json() ?? [];
  }

 async getHousingLocationById(id: Number): Promise<HousingLocation | undefined>  {

    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id );
  }


  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,);
    }
}
