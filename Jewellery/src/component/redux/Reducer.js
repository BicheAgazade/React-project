import { combineReducers } from "redux"
import { ADD_TO_BASKET } from "./ActionsNames"

const initial_state_pages = {

    rings: [{
            index: 0,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-c.jpg",
            name: "Diamonds white gold ring",
            price: "1 505$"
        },
        {
            index: 1,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-02-c.jpg",
            name: "Icon thin band",
            price: "2 200$"
        },
        {
            index: 2,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-c.jpg",
            name: "White gold and diamond ring",
            price: "1 300$"
        },
        {
            index: 3,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-04-c.jpg",
            name: "White gold ring Liens  ",
            price: "750$"
        },
        {
            index: 4,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-05-c.jpg",
            name: "Vine Ring with diamonds ",
            price: "1 700$"
        },
        {
            index: 5,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-06-c.jpg",
            name: "Joséphine Duo Eternel ring",
            price: "900$"
        }
    ],

    bracelets: [{
            index: 6,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-c.jpg",
            name: " Bee My Love bracelet",
            price: "1 785$"
        }, {
            index: 7,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-02-c.jpg",
            name: "Diamonds embellished bracelet",
            price: "2 400$"
        },
        {
            index: 8,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-03-c.jpg",
            name: "Rose gold bracelet with diamonds",
            price: "1 350$"
        },
        {
            index: 9,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-c.jpg",
            name: "Logo detail bracelet",
            price: "1 750$"
        },
        {
            index: 10,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-05-c.jpg",
            name: "Chain bracelet Jeux De Liens",
            price: "700$"
        },
        {
            index: 11,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-06-c-768x960.jpg",
            name: "D.Side gold, diamonds bracelet",
            price: "1 780$"
        }
    ],

    earrings: [{
            index: 12,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-c.jpg",
            name: " Bee My Love earrings",
            price: "2 705$"
        }, {
            index: 13,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-c.jpg",
            name: "Diamonds embellished earrings",
            price: "1 450$"
        },
        {
            index: 14,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-c.jpg",
            name: "Ciottolo earrings",
            price: "350$"
        },
        {
            index: 15,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-01-c.jpg",
            name: "Yellow gold earrings",
            price: "950$"
        },
        {
            index: 16,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-02-c.jpg",
            name: "Earrings Jeux De Star gold ",
            price: "750$"
        },
        {
            index: 17,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-03-c.jpg",
            name: "Geometric  design hoop earrings",
            price: "850$"
        }
    ],

    necklaces: [{
            index: 18,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-c.jpg",
            name: "Logo detail necklace",
            price: "2 455$"
        }, {
            index: 19,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-02-c.jpg",
            name: "Logo detail necklace",
            price: "1 250$"
        },
        {
            index: 20,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-03-c.jpg",
            name: "Emerald embellishment necklace",
            price: "1 350$"
        },
        {
            index: 21,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-c.jpg",
            name: "Diamonds embellished necklace",
            price: "2 950$"
        },
        {
            index: 22,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-05-c.jpg",
            name: "Liens Evidence ecklace",
            price: "1 950$"
        },
        {
            index: 23,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-06-c.jpg",
            name: "Thick striped design necklace",
            price: "950$"
        }
    ],
    trending: [{
            index: 18,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-b.jpg",
            name: "Logo detail necklace",
            price: "2 455$"
        },
        {
            index: 12,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-c.jpg",
            name: " Bee My Love earrings",
            price: "2 705$"
        },
        {
            index: 0,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-c.jpg",
            name: "Diamonds white gold ring",
            price: "1 505$"
        },
        {
            index: 9,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-c.jpg",
            name: "Logo detail bracelet",
            price: "1 750$"
        }

    ],
    bestseller: [{
            index: 2,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-c.jpg",
            name: "White gold and diamond ring",
            price: "1 300$"
        }, {
            index: 21,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-c.jpg",
            name: "Diamonds embellished necklace",
            price: "2 950$"
        }, {
            index: 14,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-c.jpg",
            name: "Ciottolo earrings",
            price: "350$"
        }, {
            index: 8,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-03-c.jpg",
            name: "Rose gold bracelet with diamonds",
            price: "1 350$"
        },
        {
            index: 9,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-c.jpg",
            name: "Logo detail bracelet",
            price: "1 750$"
        }
    ],
    baskets: []
}

const initial_state_shop = {
    shop: [{
            index: 0,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-01-c.jpg",
            name: "Diamonds white gold ring",
            price: "1 505$"
        },
        {
            index: 1,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-02-c.jpg",
            name: "Icon thin band",
            price: "2 200$"
        },
        {
            index: 2,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-03-c.jpg",
            name: "White gold and diamond ring",
            price: "1 300$"
        },
        {
            index: 3,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-04-c.jpg",
            name: "White gold ring Liens  ",
            price: "750$"
        },
        {
            index: 4,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-05-c.jpg",
            name: "Vine Ring with diamonds ",
            price: "1 700$"
        },
        {
            index: 5,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/ring-06-c.jpg",
            name: "Joséphine Duo Eternel ring",
            price: "900$"
        },
        {
            index: 6,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-01-c.jpg",
            name: " Bee My Love bracelet",
            price: "1 785$"
        }, {
            index: 7,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-02-c.jpg",
            name: "Diamonds embellished bracelet",
            price: "2 400$"
        },
        {
            index: 8,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-03-c.jpg",
            name: "Rose gold bracelet with diamonds",
            price: "1 350$"
        },
        {
            index: 9,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-04-c.jpg",
            name: "Logo detail bracelet",
            price: "1 750$"
        },
        {
            index: 10,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-05-c.jpg",
            name: "Chain bracelet Jeux De Liens",
            price: "700$"
        },
        {
            index: 11,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bracelet-06-c-768x960.jpg",
            name: "D.Side gold, diamonds bracelet",
            price: "1 780$"
        },
        {
            index: 12,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-04-c.jpg",
            name: " Bee My Love earrings",
            price: "2 705$"
        }, {
            index: 13,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-05-c.jpg",
            name: "Diamonds embellished earrings",
            price: "1 450$"
        },
        {
            index: 14,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-06-c.jpg",
            name: "Ciottolo earrings",
            price: "350$"
        },
        {
            index: 15,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-01-c.jpg",
            name: "Yellow gold earrings",
            price: "950$"
        },
        {
            index: 16,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-02-c.jpg",
            name: "Earrings Jeux De Star gold ",
            price: "750$"
        },
        {
            index: 17,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/earrings-03-c.jpg",
            name: "Geometric  design hoop earrings",
            price: "850$"
        },
        {
            index: 18,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-01-c.jpg",
            name: "Logo detail necklace",
            price: "2 455$"
        }, {
            index: 19,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-02-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-02-c.jpg",
            name: "Logo detail necklace",
            price: "1 250$"
        },
        {
            index: 20,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-03-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-03-c.jpg",
            name: "Emerald embellishment necklace",
            price: "1 350$"
        },
        {
            index: 21,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-04-c.jpg",
            name: "Diamonds embellished necklace",
            price: "2 950$"
        },
        {
            index: 22,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-05-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-05-c.jpg",
            name: "Liens Evidence ecklace",
            price: "1 950$"
        },
        {
            index: 23,
            img_url: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-06-a.jpg",
            img_url_2: "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/necklace-06-c.jpg",
            name: "Thick striped design necklace",
            price: "950$"
        }

    ],
    basket: []
}

const reducer_pages = (state = initial_state_pages, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                baskets: [...state.baskets, state[action.index]]
            }

        default:
            return state;
    }

}
const reducer_shop = (state = initial_state_shop, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, state.shop[action.index]]
            }


        default:
            return state;

    }
}

const reducer = combineReducers({
    pages: reducer_pages,
    shop: reducer_shop
})


export default reducer