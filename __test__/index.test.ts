import csc from '../index';
import { ICountry, ICity, IState } from '../index';

const executeAllTests = function(csc: any) {
  test('Check for Country By Id ', () => {
    const id = '38';
    let country = csc.getCountryById(id);
    expect(country).toEqual({
      id: '38',
      name: 'Canada',
      phonecode: '1',
      sortname: 'CA'
    })
  })

  test('Check for Country By Code ', () => {
    const code = 'CA';
    let country = csc.getCountryByCode(code);
    expect(country).toEqual({
      id: '38',
      name: 'Canada',
      phonecode: '1',
      sortname: 'CA'
    })
  })

  test('Check for State By Id ', () => {
    const code = '32';
    let state = csc.getStateById(code);
    expect(state).toEqual({ country_id: '101', id: '32', name: 'Punjab' });
  })

  test('Check for City By Id ', () => {
    const code = '31439';
    let city = csc.getCityById(code);
    expect(city).toEqual({ id: '31439', name: 'Lahore', state_id: '2728' });
  })

  test('Check for Canada States', () => {
    const code = '38';
    let country = csc.getCountryById(code);
    let states = csc.getStatesOfCountry(country.id);
    let names = states.map((state: IState) => state.name);
    expect(names).toEqual([
      'Alberta',
      'British Columbia',
      'Manitoba',
      'New Brunswick',
      'Newfoundland and Labrador',
      'Northwest Territories',
      'Nova Scotia',
      'Nunavut',
      'Ontario',
      'Prince Edward Island',
      'Quebec',
      'Saskatchewan',
      'Yukon'
    ])
  })

  test('Check All States for United States Of America', () => {
    const code = '231';
    let country = csc.getCountryById(code);
    let states = csc.getStatesOfCountry(country.id);
    let names = states.map((state: IState) => state.name);
    expect(names).toEqual([
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ])
  })

}
export default executeAllTests;
executeAllTests(csc);
