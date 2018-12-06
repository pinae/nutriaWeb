nutriaURL = 'http://localhost:8000'
const vOb = new Vue({
    el: 'main',
    data: {
        searchStr: '',
        searchResults: [
            ['01', 'Mehl: Weizenmehl Type 550'],
            ['010', 'Ei: Hühnerei'],
            ['11274', 'Pasta: Nudelauflauf mit Grillgemüse und Tofu'],
            ['0845', 'Gewürz: Koriander']
        ],
        foodDetails: {
            'name': "Mehl: Weizenmehl Type 550",
            "author": "Pina Merkert",
            "creation_date": "2018-12-04 14:53:12.932332+00:00",
            "manufacturer": "Crownfield (Lidl)",
            "reference_amount": 100.0,
            "calories": 352.0,
            "total_fat": 1.13,
            "saturated_fat": 0.17,
            "cholesterol": 0.0,
            "protein": 10.6,
            "total_carbs": 72.0,
            "sugar": 1.08,
            "dietary_fiber": 3.5,
            "salt": 0.0,
            "sodium": 2.0,
            "potassium": 150.0,
            "copper": 0.14,
            "iron": 1.0,
            "magnesium": 23.0,
            "manganese": 0.687,
            "zinc": 0.78,
            "phosphorous": 107.0,
            "sulphur": 100.0,
            "chloro": 50.0,
            "fluoric": 50.0,
            "vitamin_b1": 0.11,
            "vitamin_b12": 0.0,
            "vitamin_b6": 0.1,
            "vitamin_c": 0.0,
            "vitamin_d": 0.0,
            "vitamin_e": 0.2
        }
    },
    methods: {
        handleSearchRequest: function() {
            if (this.searchStr.length > 0) {
                var reqObj = new XMLHttpRequest();
                reqObj.open('GET', nutriaURL + '/json/find?name=' + this.searchStr + '&count=15');
                reqObj.onload = function() {
                    vOb.searchResults = JSON.parse(reqObj.responseText)['food'];
                };
                reqObj.send();
            }
        },
        selectFood: function(foodId) {
            var reqObj = new XMLHttpRequest();
            reqObj.open('GET', nutriaURL + '/json/food/' + foodId);
            reqObj.onload = function() {
                vOb.foodDetails = JSON.parse(reqObj.responseText);
            }
            reqObj.send();
        }
    }
})