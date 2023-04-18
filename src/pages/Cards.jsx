import "./card.css"
import Card from "./Card"

const Cards = () => {
    const Data = 
        [
  {
    "_id": "643ef85a4c7d5c77c6ccfe1a",
    "index": 0,
    "guid": "4bb6fc0e-8959-4aa7-a074-51f8f9841532",
    "isActive": true,
    "balance": "$1,316.74",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Beulah Campbell",
    "gender": "female",
    "company": "JAMNATION",
    "email": "beulahcampbell@jamnation.com",
    "phone": "+1 (969) 483-3796",
    "address": "153 Clifton Place, Belfair, Maine, 2149",
    "about": "Cupidatat deserunt cillum ex enim magna. Officia ut ut non do do consequat id proident reprehenderit voluptate incididunt consequat minim. Ut eiusmod ex anim sunt incididunt ad. Ad enim mollit enim reprehenderit amet nisi labore. Nostrud quis consequat pariatur consectetur fugiat tempor laboris qui.\r\n",
    "registered": "2020-03-25T01:50:08 +07:00",
    "latitude": -88.441136,
    "longitude": 170.697684,
    "tags": [
      "non",
      "nulla",
      "ut",
      "nisi",
      "excepteur",
      "nulla",
      "ipsum"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Marlene Jackson"
      },
      {
        "id": 1,
        "name": "Rochelle Norris"
      },
      {
        "id": 2,
        "name": "Hensley Hoover"
      }
    ],
    "greeting": "Hello, Beulah Campbell! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "643ef85ad8584a4bafcd2931",
    "index": 1,
    "guid": "a3c8865c-8e67-4717-be2b-6ce47840e7c2",
    "isActive": false,
    "balance": "$2,666.58",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Priscilla Garza",
    "gender": "female",
    "company": "MEGALL",
    "email": "priscillagarza@megall.com",
    "phone": "+1 (859) 476-2924",
    "address": "253 Verona Street, Carrsville, North Carolina, 2074",
    "about": "Anim voluptate aliquip dolore excepteur consectetur ea. Est laboris et aliquip voluptate adipisicing et enim pariatur voluptate duis elit anim fugiat anim. Pariatur nisi adipisicing irure qui non magna ad excepteur nostrud pariatur. Commodo duis et labore consequat tempor pariatur commodo id mollit deserunt culpa exercitation cupidatat.\r\n",
    "registered": "2023-01-03T06:40:46 +08:00",
    "latitude": 4.245728,
    "longitude": 7.491645,
    "tags": [
      "ea",
      "in",
      "id",
      "amet",
      "minim",
      "magna",
      "qui"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Nannie Hull"
      },
      {
        "id": 1,
        "name": "Nina Rowland"
      },
      {
        "id": 2,
        "name": "Rita Bender"
      }
    ],
    "greeting": "Hello, Priscilla Garza! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "643ef85a3d4f485aae08a8e4",
    "index": 2,
    "guid": "0d22c060-d103-4682-8e60-b6557fc48b32",
    "isActive": true,
    "balance": "$1,009.69",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": "Nash Nelson",
    "gender": "male",
    "company": "GEOSTELE",
    "email": "nashnelson@geostele.com",
    "phone": "+1 (835) 542-3816",
    "address": "220 Elm Place, Gouglersville, Palau, 2126",
    "about": "Officia quis officia anim commodo excepteur eu cillum sint ipsum fugiat fugiat ut. Est irure est eu exercitation laborum aliquip eu occaecat ipsum exercitation sint occaecat. Pariatur labore consectetur ullamco sunt anim aute. Anim est veniam sunt in. Aliquip in aliquip veniam laborum velit ipsum ipsum aliqua. Aliqua esse ea occaecat ipsum ea est adipisicing consectetur. Labore pariatur voluptate ea eiusmod magna consectetur commodo commodo consequat est id.\r\n",
    "registered": "2021-11-04T11:38:16 +07:00",
    "latitude": 40.257106,
    "longitude": 70.912148,
    "tags": [
      "velit",
      "id",
      "aute",
      "exercitation",
      "proident",
      "quis",
      "amet"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Flores Noble"
      },
      {
        "id": 1,
        "name": "Rhodes Fulton"
      },
      {
        "id": 2,
        "name": "Dyer Acevedo"
      }
    ],
    "greeting": "Hello, Nash Nelson! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "643ef85a9854ceeb6b747457",
    "index": 3,
    "guid": "df03b9fa-eb86-42bc-ba52-b85e44055840",
    "isActive": true,
    "balance": "$1,412.80",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": "Small Fletcher",
    "gender": "male",
    "company": "BRAINQUIL",
    "email": "smallfletcher@brainquil.com",
    "phone": "+1 (897) 495-2290",
    "address": "478 Fane Court, Grenelefe, Wisconsin, 2692",
    "about": "Ad consectetur Lorem magna laborum velit voluptate occaecat dolore ullamco enim nulla laboris commodo enim. Eu ipsum et sunt sint. Aute cupidatat cupidatat cillum sint dolor ea quis elit magna. Deserunt Lorem nisi dolore quis aliqua minim. Mollit officia ipsum dolore quis non proident. Consectetur occaecat duis nostrud esse excepteur id irure eu commodo nisi nulla.\r\n",
    "registered": "2015-12-25T09:32:32 +08:00",
    "latitude": 61.609276,
    "longitude": 15.484689,
    "tags": [
      "quis",
      "ex",
      "pariatur",
      "ad",
      "ad",
      "nulla",
      "veniam"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Beverley Johns"
      },
      {
        "id": 1,
        "name": "Wagner Dyer"
      },
      {
        "id": 2,
        "name": "Caitlin Stafford"
      }
    ],
    "greeting": "Hello, Small Fletcher! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "643ef85a39af2f63d974585c",
    "index": 4,
    "guid": "64526796-8bb6-4b18-bef3-77b887ae3eae",
    "isActive": false,
    "balance": "$3,601.27",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Waters Weeks",
    "gender": "male",
    "company": "INVENTURE",
    "email": "watersweeks@inventure.com",
    "phone": "+1 (999) 467-2075",
    "address": "666 Ryder Street, Garberville, Tennessee, 1369",
    "about": "Officia dolor veniam nostrud in occaecat Lorem exercitation. Irure aliqua sit nulla non in dolore laborum aliqua. Labore et aliquip Lorem ad voluptate qui eu id laborum nulla commodo id adipisicing enim. Exercitation sint id labore qui deserunt tempor. Adipisicing cillum pariatur aliqua do laborum sint labore labore. Commodo ex elit excepteur duis nulla id esse laborum consectetur non. Ea eu ex pariatur aute aute aliqua magna id sit eu in voluptate exercitation.\r\n",
    "registered": "2023-03-19T01:57:11 +07:00",
    "latitude": 16.619355,
    "longitude": 22.253103,
    "tags": [
      "mollit",
      "ex",
      "est",
      "et",
      "magna",
      "qui",
      "minim"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Levy Aguilar"
      },
      {
        "id": 1,
        "name": "Lucinda Daniels"
      },
      {
        "id": 2,
        "name": "Etta Patel"
      }
    ],
    "greeting": "Hello, Waters Weeks! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "643ef85a0a9e0e7fc4431ff6",
    "index": 5,
    "guid": "527f5667-ce85-4663-bb08-46c33801c3f5",
    "isActive": false,
    "balance": "$1,160.19",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": "Richardson Gallegos",
    "gender": "male",
    "company": "RAMJOB",
    "email": "richardsongallegos@ramjob.com",
    "phone": "+1 (860) 409-3614",
    "address": "248 Colby Court, Vernon, Mississippi, 8194",
    "about": "Commodo laboris occaecat excepteur anim adipisicing adipisicing consectetur. Exercitation officia do exercitation sunt ea sunt incididunt enim nostrud nulla sint. Consequat nostrud ut adipisicing nostrud est laboris tempor. Sit irure nisi anim ea voluptate do commodo nisi consequat id. Irure nostrud nulla dolore in deserunt. Deserunt fugiat irure Lorem est velit et occaecat laboris minim excepteur ad ullamco do. Est Lorem ipsum qui cillum laborum.\r\n",
    "registered": "2014-01-25T09:27:09 +08:00",
    "latitude": 25.582507,
    "longitude": 14.715465,
    "tags": [
      "occaecat",
      "mollit",
      "id",
      "sint",
      "fugiat",
      "aliqua",
      "non"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Gena Gibson"
      },
      {
        "id": 1,
        "name": "Gould Ortiz"
      },
      {
        "id": 2,
        "name": "Fannie Hale"
      }
    ],
    "greeting": "Hello, Richardson Gallegos! You have 6 unread messages.",
    "favoriteFruit": "banana"
  }
]
    

  return (
      <div className="gridContainer">
          {
              Data.map((object) => (
                  
                  <Card object={object}> 
                               
                  </Card>
              ) )
          }
    </div>
  )
}
export default Cards