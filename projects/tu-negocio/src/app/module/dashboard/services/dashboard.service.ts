// Deprecated: This service was a mock of http api call
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Perfil } from '../../../models/perfil';
import { Inventario } from '../../../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements InMemoryDbService {
  createDb() {
    const perfiles = [
      {
        id: 1,
        nombre: 'Jose',
        apellidos: 'Martinez',
        correo: 'j.velez@itesm.mx',
        password: '1234',
        telefono: '12345657',
        admin: true,
        lectura: true,
        escritura: true,
        borrado: true
      },
      {
        id: 2,
        nombre: 'Mario',
        apellidos: 'Velez',
        correo: 'm.velez@itesm.mx',
        password: '1234',
        telefono: '2345678',
        admin: true,
        lectura: true,
        escritura: true,
        borrado: true
      },
      {
        id: 3,
        nombre: 'Ana',
        apellidos: 'Gonzalez',
        correo: 'a.gonzalez@itesm.mx',
        password: '1234',
        telefono: '3456789',
        admin: true,
        lectura: true,
        escritura: true,
        borrado: true
      }
    ];

    const inventarios = [
      {
        id: 1,
        productos: [
          {
            id: 1,
            nombre: 'Island Oasis - Wildberry',
            cantidad: 152,
            caducidad: '11/11/2021',
            precio: '$178.94'
          },
          {
            id: 2,
            nombre: 'Wine - Red, Wolf Blass, Yellow',
            cantidad: 96,
            caducidad: '09/07/2021',
            precio: '$44.99'
          },
          {
            id: 3,
            nombre: 'Water - Mineral, Natural',
            cantidad: 296,
            caducidad: '07/07/2021',
            precio: '$293.90'
          },
          {
            id: 4,
            nombre: 'Flour - Whole Wheat',
            cantidad: 222,
            caducidad: '25/04/2021',
            precio: '$141.14'
          },
          {
            id: 5,
            nombre: 'Oven Mitts - 15 Inch',
            cantidad: 253,
            caducidad: '20/02/2021',
            precio: '$459.72'
          },
          {
            id: 6,
            nombre: 'Table Cloth 90x90 White',
            cantidad: 151,
            caducidad: '13/04/2021',
            precio: '$118.34'
          },
          {
            id: 7,
            nombre: 'Pepper - Chilli Seeds Mild',
            cantidad: 266,
            caducidad: '12/03/2022',
            precio: '$474.24'
          },
          {
            id: 8,
            nombre: 'Coffee - Colombian, Portioned',
            cantidad: 105,
            caducidad: '08/01/2021',
            precio: '$335.09'
          },
          {
            id: 9,
            nombre: 'Bagel - Whole White Sesame',
            cantidad: 200,
            caducidad: '22/03/2022',
            precio: '$181.54'
          },
          {
            id: 10,
            nombre: 'Tomatoes - Heirloom',
            cantidad: 2,
            caducidad: '22/07/2021',
            precio: '$457.82'
          },
          {
            id: 11,
            nombre: 'Soup - Knorr, Chicken Gumbo',
            cantidad: 11,
            caducidad: '22/08/2021',
            precio: '$92.34'
          },
          {
            id: 12,
            nombre: 'White Fish - Filets',
            cantidad: 265,
            caducidad: '25/08/2021',
            precio: '$497.06'
          },
          {
            id: 13,
            nombre: 'Pastry - Plain Baked Croissant',
            cantidad: 220,
            caducidad: '04/07/2021',
            precio: '$294.29'
          },
          {
            id: 14,
            nombre: 'Chef Hat 20cm',
            cantidad: 102,
            caducidad: '02/08/2021',
            precio: '$301.26'
          },
          {
            id: 15,
            nombre: 'Wine - Sake',
            cantidad: 161,
            caducidad: '01/03/2022',
            precio: '$320.72'
          },
          {
            id: 16,
            nombre: 'Lettuce - Red Leaf',
            cantidad: 117,
            caducidad: '14/08/2021',
            precio: '$456.05'
          },
          {
            id: 17,
            nombre: 'Beans - Kidney, Canned',
            cantidad: 163,
            caducidad: '30/01/2022',
            precio: '$26.84'
          },
          {
            id: 18,
            nombre: 'Sesame Seed',
            cantidad: 157,
            caducidad: '07/08/2021',
            precio: '$295.93'
          },
          {
            id: 19,
            nombre: 'Soup - Knorr, Ministrone',
            cantidad: 208,
            caducidad: '19/02/2021',
            precio: '$94.66'
          }
        ]
      },
      {
        id: 2,
        productos: [
          {
            id: 1,
            nombre: 'Wine - Sauvignon Blanc',
            cantidad: 66,
            caducidad: '06/07/2021',
            precio: '$131.72'
          },
          {
            id: 2,
            nombre: 'Juice - Apple, 500 Ml',
            cantidad: 246,
            caducidad: '01/01/2022',
            precio: '$295.17'
          },
          {
            id: 3,
            nombre: 'Beef - Eye Of Round',
            cantidad: 149,
            caducidad: '04/11/2020',
            precio: '$383.85'
          },
          {
            id: 4,
            nombre: 'Cheese - Pont Couvert',
            cantidad: 68,
            caducidad: '13/05/2022',
            precio: '$427.88'
          },
          {
            id: 5,
            nombre: 'Turkey Leg With Drum And Thigh',
            cantidad: 298,
            caducidad: '14/08/2021',
            precio: '$208.62'
          },
          {
            id: 6,
            nombre: 'Wine - Stoneliegh Sauvignon',
            cantidad: 246,
            caducidad: '23/12/2020',
            precio: '$389.46'
          },
          {
            id: 7,
            nombre: 'Cumin - Whole',
            cantidad: 246,
            caducidad: '07/05/2022',
            precio: '$297.33'
          },
          {
            id: 8,
            nombre: 'Bagel - Plain',
            cantidad: 249,
            caducidad: '15/05/2022',
            precio: '$424.33'
          },
          {
            id: 9,
            nombre: 'Iced Tea Concentrate',
            cantidad: 234,
            caducidad: '18/09/2021',
            precio: '$149.31'
          },
          {
            id: 10,
            nombre: 'Pasta - Agnolotti - Butternut',
            cantidad: 215,
            caducidad: '01/12/2021',
            precio: '$90.20'
          },
          {
            id: 11,
            nombre: 'Lemon Pepper',
            cantidad: 121,
            caducidad: '10/07/2021',
            precio: '$22.35'
          },
          {
            id: 12,
            nombre: 'Pork - Butt, Boneless',
            cantidad: 266,
            caducidad: '29/12/2020',
            precio: '$249.95'
          },
          {
            id: 13,
            nombre: 'Huck White Towels',
            cantidad: 40,
            caducidad: '29/08/2021',
            precio: '$214.84'
          },
          {
            id: 14,
            nombre: 'Pears - Bosc',
            cantidad: 91,
            caducidad: '27/12/2020',
            precio: '$417.15'
          },
          {
            id: 15,
            nombre: 'Chinese Foods - Cantonese',
            cantidad: 2,
            caducidad: '26/08/2021',
            precio: '$60.44'
          },
          {
            id: 16,
            nombre: 'Oil - Shortening,liqud, Fry',
            cantidad: 208,
            caducidad: '07/06/2021',
            precio: '$281.16'
          },
          {
            id: 17,
            nombre: 'Garam Marsala',
            cantidad: 237,
            caducidad: '21/09/2021',
            precio: '$40.94'
          },
          {
            id: 18,
            nombre: 'Sesame Seed',
            cantidad: 56,
            caducidad: '07/07/2021',
            precio: '$473.62'
          },
          {
            id: 19,
            nombre: 'Juice - Lemon',
            cantidad: 54,
            caducidad: '01/12/2021',
            precio: '$410.05'
          },
          {
            id: 20,
            nombre: 'Pasta - Fettuccine, Dry',
            cantidad: 253,
            caducidad: '07/11/2021',
            precio: '$92.35'
          }
        ]
      },
      {
        id: 3,
        productos: [
          {
            id: 1,
            nombre: 'Oysters - Smoked',
            cantidad: 275,
            caducidad: '15/10/2021',
            precio: '$300.70'
          },
          {
            id: 2,
            nombre: 'Peppercorns - Pink',
            cantidad: 171,
            caducidad: '10/12/2020',
            precio: '$20.94'
          },
          {
            id: 3,
            nombre: 'Oyster - In Shell',
            cantidad: 45,
            caducidad: '01/07/2021',
            precio: '$294.15'
          },
          {
            id: 4,
            nombre: 'Longos - Grilled Veg Sandwiches',
            cantidad: 123,
            caducidad: '24/11/2021',
            precio: '$449.29'
          },
          {
            id: 5,
            nombre: 'Chocolate - Pistoles, White',
            cantidad: 64,
            caducidad: '09/04/2022',
            precio: '$288.47'
          },
          {
            id: 6,
            nombre: 'Bread - Burger',
            cantidad: 172,
            caducidad: '24/04/2022',
            precio: '$398.99'
          },
          {
            id: 7,
            nombre: 'Kiwano',
            cantidad: 117,
            caducidad: '24/01/2021',
            precio: '$316.03'
          },
          {
            id: 8,
            nombre: 'Chicken Breast Wing On',
            cantidad: 87,
            caducidad: '16/10/2021',
            precio: '$273.00'
          },
          {
            id: 9,
            nombre: 'Cake - Box Window 10x10x2.5',
            cantidad: 123,
            caducidad: '20/11/2020',
            precio: '$117.82'
          },
          {
            id: 10,
            nombre: 'Chips - Doritos',
            cantidad: 251,
            caducidad: '23/10/2021',
            precio: '$19.64'
          },
          {
            id: 11,
            nombre: 'Rice - Brown',
            cantidad: 173,
            caducidad: '20/02/2022',
            precio: '$445.31'
          },
          {
            id: 12,
            nombre: 'Wine - Saint Emilion Calvet',
            cantidad: 171,
            caducidad: '09/05/2022',
            precio: '$296.46'
          },
          {
            id: 13,
            nombre: '7up Diet, 355 Ml',
            cantidad: 295,
            caducidad: '07/03/2022',
            precio: '$110.25'
          },
          {
            id: 14,
            nombre: 'Blouse / Shirt / Sweater',
            cantidad: 78,
            caducidad: '07/12/2020',
            precio: '$135.21'
          },
          {
            id: 15,
            nombre: 'Wine - Shiraz South Eastern',
            cantidad: 55,
            caducidad: '09/06/2021',
            precio: '$166.03'
          },
          {
            id: 16,
            nombre: 'Beer - Paulaner Hefeweisse',
            cantidad: 226,
            caducidad: '23/01/2022',
            precio: '$316.81'
          },
          {
            id: 17,
            nombre: 'Rice - Wild',
            cantidad: 185,
            caducidad: '03/04/2022',
            precio: '$212.37'
          },
          {
            id: 18,
            nombre: 'Piping - Bags Quizna',
            cantidad: 190,
            caducidad: '22/06/2021',
            precio: '$265.42'
          },
          {
            id: 19,
            nombre: 'Cranberries - Frozen',
            cantidad: 40,
            caducidad: '07/05/2022',
            precio: '$430.02'
          },
          {
            id: 20,
            nombre: 'Lidsoupcont Rp12dn',
            cantidad: 108,
            caducidad: '15/02/2022',
            precio: '$499.57'
          },
          {
            id: 21,
            nombre: 'Tomato - Plum With Basil',
            cantidad: 216,
            caducidad: '26/09/2021',
            precio: '$35.02'
          },
          {
            id: 22,
            nombre: 'Rosemary - Dry',
            cantidad: 111,
            caducidad: '05/08/2021',
            precio: '$413.11'
          },
          {
            id: 23,
            nombre: 'Beans - Yellow',
            cantidad: 250,
            caducidad: '12/01/2021',
            precio: '$205.20'
          }
        ]
      },
      {
        id: 4,
        productos: [
          {
            id: 1,
            nombre: 'Oysters - Smoked',
            cantidad: 275,
            caducidad: '15/10/2021',
            precio: '$300.70'
          },
          {
            id: 2,
            nombre: 'Peppercorns - Pink',
            cantidad: 171,
            caducidad: '10/12/2020',
            precio: '$20.94'
          },
          {
            id: 3,
            nombre: 'Oyster - In Shell',
            cantidad: 45,
            caducidad: '01/07/2021',
            precio: '$294.15'
          },
          {
            id: 4,
            nombre: 'Longos - Grilled Veg Sandwiches',
            cantidad: 123,
            caducidad: '24/11/2021',
            precio: '$449.29'
          },
          {
            id: 5,
            nombre: 'Chocolate - Pistoles, White',
            cantidad: 64,
            caducidad: '09/04/2022',
            precio: '$288.47'
          },
          {
            id: 6,
            nombre: 'Bread - Burger',
            cantidad: 172,
            caducidad: '24/04/2022',
            precio: '$398.99'
          },
          {
            id: 7,
            nombre: 'Kiwano',
            cantidad: 117,
            caducidad: '24/01/2021',
            precio: '$316.03'
          },
          {
            id: 8,
            nombre: 'Chicken Breast Wing On',
            cantidad: 87,
            caducidad: '16/10/2021',
            precio: '$273.00'
          },
          {
            id: 9,
            nombre: 'Cake - Box Window 10x10x2.5',
            cantidad: 123,
            caducidad: '20/11/2020',
            precio: '$117.82'
          },
          {
            id: 10,
            nombre: 'Chips - Doritos',
            cantidad: 251,
            caducidad: '23/10/2021',
            precio: '$19.64'
          },
          {
            id: 11,
            nombre: 'Rice - Brown',
            cantidad: 173,
            caducidad: '20/02/2022',
            precio: '$445.31'
          },
          {
            id: 12,
            nombre: 'Wine - Saint Emilion Calvet',
            cantidad: 171,
            caducidad: '09/05/2022',
            precio: '$296.46'
          },
          {
            id: 13,
            nombre: '7up Diet, 355 Ml',
            cantidad: 295,
            caducidad: '07/03/2022',
            precio: '$110.25'
          },
          {
            id: 14,
            nombre: 'Blouse / Shirt / Sweater',
            cantidad: 78,
            caducidad: '07/12/2020',
            precio: '$135.21'
          },
          {
            id: 15,
            nombre: 'Wine - Shiraz South Eastern',
            cantidad: 55,
            caducidad: '09/06/2021',
            precio: '$166.03'
          },
          {
            id: 16,
            nombre: 'Beer - Paulaner Hefeweisse',
            cantidad: 226,
            caducidad: '23/01/2022',
            precio: '$316.81'
          },
          {
            id: 17,
            nombre: 'Rice - Wild',
            cantidad: 185,
            caducidad: '03/04/2022',
            precio: '$212.37'
          },
          {
            id: 18,
            nombre: 'Piping - Bags Quizna',
            cantidad: 190,
            caducidad: '22/06/2021',
            precio: '$265.42'
          },
          {
            id: 19,
            nombre: 'Cranberries - Frozen',
            cantidad: 40,
            caducidad: '07/05/2022',
            precio: '$430.02'
          },
          {
            id: 20,
            nombre: 'Lidsoupcont Rp12dn',
            cantidad: 108,
            caducidad: '15/02/2022',
            precio: '$499.57'
          },
          {
            id: 21,
            nombre: 'Tomato - Plum With Basil',
            cantidad: 216,
            caducidad: '26/09/2021',
            precio: '$35.02'
          },
          {
            id: 22,
            nombre: 'Rosemary - Dry',
            cantidad: 111,
            caducidad: '05/08/2021',
            precio: '$413.11'
          },
          {
            id: 23,
            nombre: 'Beans - Yellow',
            cantidad: 250,
            caducidad: '12/01/2021',
            precio: '$205.20'
          }
        ]
      }
    ];

    return { perfiles, inventarios };
  }

  genId(perfiles: Perfil[]): number {
    return perfiles.length > 0
      ? Math.max(...perfiles.map(perfil => perfil.id)) + 1
      : 3;
  }
}
