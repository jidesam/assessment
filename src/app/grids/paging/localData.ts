export interface Employee {
  EmployeeID: string;
  FirstName: string;
  LastName: string;
  Country: string;
  Age: number;
  RegistererDate: Date;
  IsActive: boolean;
}

const lastYear = new Date().getFullYear() - 1;
export const employeesData: Employee[] = [
  {
    EmployeeID: '56250fa57ab1535722e564a6',
    FirstName: 'Downs',
    LastName: 'Holcomb',
    Country: 'Italy',
    Age: 35,
    RegistererDate: new Date(lastYear, 7, 25),
    IsActive: false
  },
  {
    EmployeeID: '56250fa5c0fd04f12555d44d',
    FirstName: 'Mckenzie',
    LastName: 'Calderon',
    Country: 'USA',
    Age: 26,
    RegistererDate: new Date(lastYear - 1, 9, 22),
    IsActive: false
  },
  {
    EmployeeID: '56250fa565a7bcc21f6bd15e',
    FirstName: 'Howell',
    LastName: 'Hawkins',
    Country: 'Canada',
    Age: 25,
    RegistererDate: new Date(lastYear, 8, 8),
    IsActive: false
  },
  {
    EmployeeID: '56250fa5d71a83c33f3f6479',
    FirstName: 'Sheppard',
    LastName: 'Nicholson',
    Country: 'Italy',
    Age: 49,
    RegistererDate: new Date(lastYear - 1, 6, 28),
    IsActive: false
  },
  {
    EmployeeID: '56250fa546abbe8c616d37eb',
    FirstName: 'Bettye',
    LastName: 'Trujillo',
    Country: 'Canada',
    Age: 37,
    RegistererDate: new Date(new Date().setDate(-20)),
    IsActive: false
  },
  {
    EmployeeID: '56250fa535809820f2c44291',
    FirstName: 'Joyce',
    LastName: 'Vaughan',
    Country: 'USA',
    Age: 48,
    RegistererDate: new Date(lastYear - 1, 4, 24),
    IsActive: false
  },
  {
    EmployeeID: '56250fa5732f6adc0b52ace0',
    FirstName: 'Janine',
    LastName: 'Munoz',
    Country: 'USA',
    Age: 59,
    RegistererDate: new Date(lastYear - 1, 2, 9),
    IsActive: true
  },
  {
    EmployeeID: '56250fa540b15dfd507cffb9',
    FirstName: 'Betsy',
    LastName: 'Short',
    Country: 'USA',
    Age: 26,
    RegistererDate: new Date(new Date().setMonth(-1)),
    IsActive: true
  },
  {
    EmployeeID: '56250fa5a33146a85fdeda66',
    FirstName: 'Tanisha',
    LastName: 'Harrington',
    Country: 'USA',
    Age: 31,
    RegistererDate: new Date(lastYear - 1, 11, 25),
    IsActive: false
  },
  {
    EmployeeID: '56250fa572bea435113bb3be',
    FirstName: 'French',
    LastName: 'Sullivan',
    Country: 'Italy',
    Age: 37,
    RegistererDate: new Date(new Date().setMonth(-2)),
    IsActive: true
  },
  {
    EmployeeID: '56250fa55f17965b7b19e3cf',
    FirstName: 'Gomez',
    LastName: 'Sandoval',
    Country: 'Italy',
    Age: 24,
    RegistererDate: new Date(lastYear - 1, 6, 19),
    IsActive: true
  },
  {
    EmployeeID: '56250fa5f630e559e163de06',
    FirstName: 'Estes',
    LastName: 'Soto',
    Country: 'Canada',
    Age: 24,
    RegistererDate: new Date(new Date().setDate(-2)),
    IsActive: true
  },
  {
    EmployeeID: '56250fa5c797f025a835abd4',
    FirstName: 'Newman',
    LastName: 'Mathews',
    Country: 'Italy',
    Age: 60,
    RegistererDate: new Date(lastYear - 1, 10, 9),
    IsActive: true
  },
  {
    EmployeeID: '56250fa5fd5cd14418a9c790',
    FirstName: 'Paul',
    LastName: 'Harper',
    Country: 'USA',
    Age: 52,
    RegistererDate: new Date(lastYear - 1, 5, 9),
    IsActive: true
  },
  {
    EmployeeID: '56250fa56a88b994f0925d7c',
    FirstName: 'Sharpe',
    LastName: 'Blair',
    Country: 'Canada',
    Age: 41,
    RegistererDate: new Date(new Date().setMonth(-3)),
    IsActive: false
  },
  {
    EmployeeID: '56250fa53793e85f499fbf8b',
    FirstName: 'Kirk',
    LastName: 'Downs',
    Country: 'USA',
    Age: 58,
    RegistererDate: new Date(lastYear, 7, 10),
    IsActive: false
  },
  {
    EmployeeID: '56250fa581c03d4c735c0e8b',
    FirstName: 'Abby',
    LastName: 'Wheeler',
    Country: 'Canada',
    Age: 42,
    RegistererDate: new Date(lastYear, 3, 28),
    IsActive: false
  },
  {
    EmployeeID: '56250fa576d7ce7293fc09c6',
    FirstName: 'Walter',
    LastName: 'Roth',
    Country: 'Canada',
    Age: 36,
    RegistererDate: new Date(lastYear, 7, 24),
    IsActive: true
  },
  {
    EmployeeID: '56250fa5d88119d49b29d8ce',
    FirstName: 'Pratt',
    LastName: 'Mann',
    Country: 'Canada',
    Age: 40,
    RegistererDate: new Date(lastYear, 7, 3),
    IsActive: true
  },
  {
    EmployeeID: '56250fa52152c985dfbfcccb',
    FirstName: 'Blackwell',
    LastName: 'Randall',
    Country: 'Italy',
    Age: 20,
    RegistererDate: new Date(new Date().setDate(-1)),
    IsActive: true
  }
];
