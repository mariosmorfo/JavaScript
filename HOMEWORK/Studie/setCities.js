let store = [{product: "Apples", city: "Athens"},
              {product: "Oranges", city: "Lamia"},
              {product: "Banana", city: "Nauplio"},
              {product: "Honey", city: "Athens"}
]

let cities = ["all", ...new Set(store.map((product) => product.city))]
let filtered = cities.filter(city => city.startsWith("L"))

console.log(filtered)