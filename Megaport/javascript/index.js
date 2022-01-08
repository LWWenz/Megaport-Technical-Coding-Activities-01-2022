var app = angular.module('app', []);

app.controller("ctrl", function ($scope) {
    $scope.tableOne = [
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Regular Glazed"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Regular Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Regular Powdered Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Regular Chocolate with Sprinkles"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Regular Chocolate"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Regular Maple"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Chocolate None"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Chocolate Glazed"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Chocolate Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Chocolate Powdered Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Chocolate Chocolate with Sprinkles"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Chocolate Chocolate"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Chocolate Maple"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Blueberry None"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Blueberry Glazed"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Blueberry Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Blueberry Powdered Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Blueberry Chocolate with Sprinkles"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Blueberry Chocolate"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Blueberry Maple"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Devil's Food None"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Devil's Food Glazed"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Devil's Food Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Devil's Food Powdered Sugar"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Devil's Food Chocolate with Sprinkles"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Devil's Food Chocolate"
        },
        {
            "id": 0001,
            "type": "donut",
            "name": "Cake",
            "topping": "Devil's Food Maple"
        },
        {
            "id": 0002,
            "type": "donut",
            "name": "Raised",
            "topping": "Regular None"
        },
        {
            "id": 0002,
            "type": "donut",
            "name": "Raised",
            "topping": "Regular Glazed"
        },
        {
            "id": 0002,
            "type": "donut",
            "name": "Raised",
            "topping": "Regular Sugar"
        },
        {
            "id": 0002,
            "type": "donut",
            "name": "Raised",
            "topping": "Regular Chocolate"
        },
        {
            "id": 0002,
            "type": "donut",
            "name": "Raised",
            "topping": "Regular Maple"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Regular None"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Regular Glazed"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Regular Chocolate"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Regular Maple"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Chocolate None"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Chocolate Glazed"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Chocolate Chocolate"
        },
        {
            "id": 0003,
            "type": "donut",
            "name": "Old Fashioned",
            "topping": "Chocolate Maple"
        },
        {
            "id": 0004,
            "type": "bar",
            "name": "Bar",
            "topping": "Regular Chocolate"
        },
        {
            "id": 0004,
            "type": "bar",
            "name": "Bar",
            "topping": "Regular Maple"
        },
        {
            "id": 0005,
            "type": "twist",
            "name": "Twist",
            "topping": "Regular Glazed"
        },
        {
            "id": 0005,
            "type": "twist",
            "name": "Twist",
            "topping": "Regular Sugar"
        },
        {
            "id": 0006,
            "type": "filled",
            "name": "Filled",
            "topping": "Regular Glazed"
        },
        {
            "id": 0006,
            "type": "filled",
            "name": "Filled",
            "topping": "Regular Powdered Sugar"
        },
        {
            "id": 0006,
            "type": "filled",
            "name": "Filled",
            "topping": "Regular Chocolate"
        },
        {
            "id": 0006,
            "type": "filled",
            "name": "Filled",
            "topping": "Regular Maple"
        },
    ];

    
    $scope.propertyName = 'id';
    $scope.reverse = false;
    $scope.strict = false;

    //Used to debug
    window._scope = $scope;

    $scope.init = () => {
        console.log("Initializing...");
        $scope.columnTypes = [];
        for(var ele of $scope.tableOne) {
            for(var type in ele) {
                if(!$scope.columnTypes.includes(type)) {
                    $scope.columnTypes.push(type);
                }
            }
        }

        resetNewArea();
    }

    resetNewArea = () => {
        $scope.newTableRow = {
            "id":"",
            "type":"",
            "name":"",
            "topping":"",
        }
    }

    $scope.addNewOrder = () => {
        $scope.newTableRow.id = parseInt($scope.newTableRow.id);
        $scope.tableOne.push($scope.newTableRow);
        resetNewArea();
    }

    $scope.sortBy = (propertyN) => {
        $scope.reverse = ($scope.propertyName === propertyN) ? !$scope.reverse : false;
        $scope.propertyName = propertyN;
    }

    $scope.init();
})