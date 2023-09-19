import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactCards from "./components/ContactCards";
import { useEffect, useState } from "react";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  const data = [
    {
      id: "1",
      gender: "female",
      name: {
        title: "Mrs",
        first: "Penny",
        last: "Davis",
      },
      location: {
        coordinates: {
          latitude: "38.8951",
          longitude: "-77.0364",
        },
        city: "Washington",
        state: "Georgia",
        country: "United States",
        postcode: 55954,
      },
      email: "penny.davis@example.com",

      phone: "(971) 235-5848",
      cell: "(718) 976-1326",

      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
      },
      nat: "US",
    },
    {
      id: "2",
      gender: "male",
      name: {
        title: "Mr",
        first: "Thiemo",
        last: "Moerkerk",
      },
      location: {
        coordinates: {
          latitude: "52.37403",
          longitude: " 4.88969",
        },
        city: "Amsterdam",
        state: "Noord-Holland",
        country: "Netherlands",
        postcode: "8142 LJ",
      },
      email: "moerkerk@example.com",

      dob: {
        date: "1997-10-25T04:34:13.211Z",
        age: 25,
      },

      phone: "(098) 4207377",
      cell: "(06) 36116306",

      picture: {
        large: "https://randomuser.me/api/portraits/men/55.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
      },
      nat: "NL",
    },
    {
      id: "3",
      gender: "male",
      name: {
        title: "Mr",
        first: "Hadrien",
        last: "Richard",
      },
      location: {
        coordinates: {
          latitude: "43.11667",
          longitude: "5.93333",
        },
        city: "Toulon",
        state: "Hautes-Alpes",
        country: "France",
        postcode: 28636,
      },
      email: "hadrien.richard@example.com",

      phone: "04-08-76-37-64",
      cell: "06-45-73-41-29",

      picture: {
        large: "https://randomuser.me/api/portraits/men/81.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg",
      },
      nat: "FR",
    },
    {
      id: "4",
      gender: "male",
      name: {
        title: "Mr",
        first: "Evan",
        last: "Mckinney",
      },
      location: {
        coordinates: {
          latitude: "40.60843",
          longitude: "-75.49018",
        },
        city: "Allentown",
        state: "Idaho",
        country: "United States",
        postcode: 62521,
      },
      email: "evan.mckinney@example.com",

      phone: "(318) 582-7155",
      cell: "(601) 583-8488",

      picture: {
        large: "https://randomuser.me/api/portraits/men/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
      },
      nat: "US",
    },
    {
      id: "5",
      gender: "female",
      name: {
        title: "Mrs",
        first: "Conny",
        last: "Stang",
      },
      location: {
        coordinates: {
          latitude: "48.49616",
          longitude: "10.11849",
        },
        city: "Langenau",
        state: "Rheinland-Pfalz",
        country: "Germany",
        postcode: 14003,
      },
      email: "conny.stang@example.com",

      phone: "0119-1178656",
      cell: "0170-9878796",

      picture: {
        large: "https://randomuser.me/api/portraits/women/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
      },
      nat: "DE",
    },
    {
      id: "6",
      gender: "male",
      name: {
        title: "Mr",
        first: "alex",
        last: "biden",
      },
      location: {
        coordinates: {
          latitude: "36.778259",
          longitude: "-119.417931",
        },

        city: "California",
        state: "Prizren",
        country: "Serbia",
        postcode: 78997,
      },
      email: "alex.biden@example.com",
      phone: "011-6098-166",
      cell: "069-9300-487",

      picture: {
        large: "https://randomuser.me/api/portraits/men/98.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg",
      },
      nat: "RS",
    },
    {
      id: "7",
      gender: "male",
      name: {
        title: "Mr",
        first: "Mingus",
        last: "Van Druten",
      },
      location: {
        coordinates: {
          latitude: "52.70667",
          longitude: "4.94444",
        },
        city: "Opmeer",
        state: "Noord-Holland",
        country: "Netherlands",
        postcode: "0983 HZ",
      },
      email: "vandruten@example.com",
      phone: "(025) 1572263",
      cell: "(06) 03034610",

      picture: {
        large: "https://randomuser.me/api/portraits/men/54.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/54.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/54.jpg",
      },
      nat: "NL",
    },
    {
      id: "8",
      gender: "male",
      name: {
        title: "Mr",
        first: "Olivier",
        last: "Hinna",
      },
      location: {
        coordinates: {
          latitude: "59.91273 ",
          longitude: "10.74609",
        },
        city: "Oslo",
        state: "Troms - Romsa",
        country: "Norway",
        postcode: "8523",
      },
      email: "olivier.hinna@example.com",
      phone: "57154391",
      cell: "48570098",

      picture: {
        large: "https://randomuser.me/api/portraits/men/47.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
      },
      nat: "NO",
    },
    {
      id: "9",
      gender: "female",
      name: {
        title: "Mrs",
        first: "Teddy",
        last: "Tieman",
      },
      location: {
        coordinates: {
          latitude: "59.33258",
          longitude: " 18.0649",
        },
        city: "Stockholem",
        state: "Utrecht",
        country: "Netherlands",
        postcode: "3591 DZ",
      },
      email: "teddy.tieman@example.com",
      phone: "(0117) 982701",
      cell: "(06) 09463141",

      picture: {
        large: "https://randomuser.me/api/portraits/women/5.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
      },
      nat: "NL",
    },
    {
      id: "10",
      gender: "female",
      name: {
        title: "Ms",
        first: "Léa",
        last: "Dumont",
      },
      location: {
        coordinates: {
          latitude: "48.58392",
          longitude: "7.74553",
        },
        city: "Strasbourg",
        state: "Eure-et-Loir",
        country: "France",
        postcode: 63776,
      },
      email: "lea.dumont@example.com",

      phone: "01-58-26-38-00",
      cell: "06-66-82-73-26",

      picture: {
        large: "https://randomuser.me/api/portraits/women/50.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg",
      },
      nat: "FR",
    },
    {
      id: "11",
      gender: "male",
      name: {
        title: "Mr",
        first: "Daniel",
        last: "Tafoya",
      },
      location: {
        coordinates: {
          latitude: "19.42847",
          longitude: "  -99.12766",
        },
        city: "Mexico",
        state: "Nuevo Leon",
        country: "Mexico",
        postcode: 63698,
      },
      email: "daniel.tafoya@example.com",
      phone: "(651) 926 7809",
      cell: "(622) 145 1256",

      picture: {
        large: "https://randomuser.me/api/portraits/men/35.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
      },
      nat: "MX",
    },
    {
      id: "12",
      gender: "male",
      name: {
        title: "Mr",
        first: "Ontin",
        last: "Hmel",
      },
      location: {
        coordinates: {
          latitude: "50.45466",
          longitude: " 30.5238",
        },
        city: "kiev",
        state: "Kiyivska",
        country: "Ukraine",
        postcode: 54153,
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "ontin.hmel@example.com",
      phone: "(066) D02-8747",
      cell: "(067) L46-9224",

      picture: {
        large: "https://randomuser.me/api/portraits/men/82.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/82.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
      },
      nat: "UA",
    },
  ];
  const [contactList, setContactList] = useState(data); // Initialize contactList with data
  const [filterQuery, setFilterQuery] = useState("");
  useEffect(() => {
    if (filterQuery.trim() === "") {
      setContactList(data); // Display all contacts if no filter query
    } else {
      const queryString = filterQuery.toLowerCase().trim();
      const filteredData = data.filter((contact) => {
        const fullName = `${contact.name.first} ${contact.name.last}`;
        return fullName.toLowerCase().includes(queryString);
      });
      setContactList(filteredData);
    }
  }, [data, filterQuery]);
  return (
    <Router>
      <div className="bg-gray-100">
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9069/9069049.png"
                class="h-8 mr-3"
                alt="logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Profile view
              </span>
            </a>
            <form>
              <input
                type={"text"}
                placeholder={"type here to filter..."}
                onChange={(event) => setFilterQuery(event.target.value)}
                className={"ml-20  rounded-md p-2 bg-gray-200"}
              />
            </form>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokelinecap="round"
                      strokelinejoin="round"
                      strokewidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-20">
          <Routes>
            <Route
              path="/"
              element={<ContactCards contactList={contactList} />}
            />
            <Route path="/profile/:id" element={<ProfilePage data={data} />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};
export default App;
