export const universities = [
  {
    name: "Harvard University",
    country: "USA",
    founded: 1636,
    faculties: [
      {
        name: "Engineering",
        departments: [
          { name: "Computer Science", programs: ["AI", "Cybersecurity", "Robotics"] },
          { name: "Electrical Engineering", programs: ["Signal Processing", "Nano Electronics"] }
        ]
      },
      {
        name: "Business",
        departments: [
          { name: "Marketing", programs: ["Digital Marketing", "Brand Strategy"] },
          { name: "Finance", programs: ["Investments", "Quantitative Finance"] }
        ]
      }
    ],
    alumni: [
      { name: "Barack Obama", occupation: "Politician" },
      { name: "Mark Zuckerberg", occupation: "Entrepreneur" }
    ]
  },
  {
    name: "University of Tokyo",
    country: "Japan",
    founded: 1877,
    faculties: [
      {
        name: "Science",
        departments: [
          { name: "Physics", programs: ["Quantum Mechanics", "Astrophysics"] },
          { name: "Biology", programs: ["Genetics", "Molecular Biology"] }
        ]
      }
    ],
    alumni: [
      { name: "Yukio Hatoyama", occupation: "Prime Minister" }
    ]
  }
];

export const techCompanies = [
  {
    name: "Google",
    founded: 1998,
    headquarters: "California, USA",
    products: [
      {
        name: "Search",
        users: 4000000000,
        platforms: ["Web", "Mobile"]
      },
      {
        name: "Android",
        users: 3000000000,
        platforms: ["Phones", "Tablets", "TV"]
      }
    ]
  },
  {
    name: "Apple",
    founded: 1976,
    headquarters: "California, USA",
    products: [
      {
        name: "iPhone",
        users: 1300000000,
        platforms: ["iOS"]
      },
      {
        name: "MacBook",
        users: 200000000,
        platforms: ["macOS"]
      }
    ]
  }
];

export const videoGames = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genres: ["Adventure", "Open World", "Action"],
    platforms: ["Switch", "Wii U"],
    characters: [
      { name: "Link", role: "Protagonist" },
      { name: "Zelda", role: "Princess" }
    ],
    dlcs: [
      {
        name: "The Master Trials",
        features: ["New Dungeon", "Hard Mode"]
      }
    ]
  },
  {
    title: "GTA V",
    developer: "Rockstar Games",
    genres: ["Action", "Open World", "Multiplayer"],
    platforms: ["PS4", "Xbox", "PC"],
    cities: [
      {
        name: "Los Santos",
        mapSize: "126 km²",
        neighborhoods: [
          "Vinewood", "Del Perro", "Sandy Shores"
        ]
      }
    ]
  }
];

export const books = [
  {
    title: "1984",
    author: "George Orwell",
    published: 1949,
    genres: ["Dystopia", "Political Fiction"],
    translations: [
      { language: "French", translator: "Amélie Audiberti" },
      { language: "Russian", translator: "Vera Ganf" }
    ],
    characters: [
      { name: "Winston Smith", role: "Protagonist" },
      { name: "Big Brother", role: "Symbol" }
    ]
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    published: 1997,
    genres: ["Fantasy", "Adventure"],
    characters: [
      { name: "Harry Potter", role: "Main Character" },
      { name: "Hermione Granger", role: "Friend" },
      { name: "Ron Weasley", role: "Friend" }
    ],
    movies: [
      { releaseYear: 2001, director: "Chris Columbus" }
    ]
  }
];

export const airlines = [
  {
    name: "Emirates",
    country: "UAE",
    founded: 1985,
    fleet: [
      {
        model: "Airbus A380",
        capacity: 853,
        images: [
          "https://picsum.photos/id/200/400/250",
          "https://picsum.photos/id/201/400/250",
          "https://picsum.photos/id/202/400/250"
        ]
      },
      {
        model: "Boeing 777",
        capacity: 396,
        images: [
          "https://picsum.photos/id/203/400/250",
          "https://picsum.photos/id/204/400/250",
          "https://i.pinimg.com/originals/98/42/ca/9842ca0387ee43e821e657d8657fdf82.jpg"
        ]
      }
    ],
    routes: [
      {
        from: "Dubai",
        to: "New York",
        duration: "14h 25m"
      },
      {
        from: "Dubai",
        to: "Tokyo",
        duration: "9h 50m"
      }
    ]
  },
  {
    name: "Singapore Airlines",
    country: "Singapore",
    founded: 1947,
    fleet: [
      {
        model: "Airbus A350",
        capacity: 325,
        images: [
          "https://picsum.photos/id/206/400/250",
          "https://avatars.mds.yandex.net/i?id=ca998f91422d9c9b186365bcd663ae0c_l-3452823-images-thumbs&n=13",
          "https://picsum.photos/id/208/400/250"
        ]
      }
    ],
    routes: [
      {
        from: "Singapore",
        to: "San Francisco",
        duration: "15h 30m"
      }
    ]
  }
];

export const nationalParks = [
  {
    name: "Yellowstone",
    country: "USA",
    established: 1872,
    wildlife: ["Bison", "Grizzly Bear", "Wolf"],
    landscapes: [
      {
        type: "Geyser",
        name: "Old Faithful",
        images: [
          "https://picsum.photos/id/209/400/250",
          "https://picsum.photos/id/210/400/250",
          "https://picsum.photos/id/211/400/250"
        ]
      },
      {
        type: "Waterfall",
        name: "Lower Falls",
        images: [
          "https://picsum.photos/id/212/400/250",
          "https://picsum.photos/id/213/400/250",
          "https://picsum.photos/id/214/400/250"
        ]
      }
    ]
  },
  {
    name: "Banff National Park",
    country: "Canada",
    established: 1885,
    wildlife: ["Elk", "Moose", "Mountain Goat"],
    landscapes: [
      {
        type: "Lake",
        name: "Lake Louise",
        images: [
          "https://picsum.photos/id/215/400/250",
          "https://picsum.photos/id/216/400/250",
          "https://picsum.photos/id/217/400/250"
        ]
      }
    ]
  }
];