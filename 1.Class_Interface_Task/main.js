var VehicleType;
(function (VehicleType) {
    VehicleType["Car"] = "Car";
    VehicleType["MotorCycle"] = "MotorCycle";
})(VehicleType || (VehicleType = {}));
var EngineType;
(function (EngineType) {
    EngineType["DOHC"] = "DOHC";
    EngineType["SOHC"] = "SOHC";
    EngineType["TURBO"] = "TURBO";
})(EngineType || (EngineType = {}));
var Car = /** @class */ (function () {
    function Car(brandName, modelName, year, fuelCapacity, currentFuel, milage, fuelFor1KM, engine) {
        this.brandName = brandName;
        this._modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._milage = milage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = VehicleType.Car;
    }
    Object.defineProperty(Car.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "milage", {
        get: function () {
            return this._milage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getInfo = function () {
        console.log("-----Car Datas-----");
        console.log("Brand: ".concat(this.brandName));
        console.log("Model: ".concat(this.modelName));
        console.log("Year: ".concat(this._year));
        console.log("Fuel Capacity: ".concat(this._fuelCapacity));
        console.log("Current Fuel: ".concat(this._currentFuel));
        console.log("Milage: ".concat(this._milage));
        console.log("Fuel for 1 KM: ".concat(this._fuelFor1KM));
        console.log("Engine Type: ".concat(this._engine));
        console.log("Vehicle Type: ".concat(this._vehicleType));
    };
    Car.prototype.drive = function (km) {
        var fuelUsed = km * this._fuelFor1KM;
        if (this._currentFuel >= fuelUsed) {
            this._currentFuel -= fuelUsed;
            this._milage += km;
            return this._currentFuel;
        }
        else {
            console.log("Not enough fuel!");
            return this._currentFuel;
        }
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(brandName, modelName, year, fuelCapacity, currentFuel, milage, fuelFor1KM, engine) {
        this.brandName = brandName;
        this._modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._milage = milage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = VehicleType.MotorCycle;
    }
    Object.defineProperty(Motorcycle.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "milage", {
        get: function () {
            return this._milage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.getInfo = function () {
        console.log("-----Motorcycle Datas-----");
        console.log("Brand: ".concat(this.brandName));
        console.log("Model: ".concat(this.modelName));
        console.log("Year: ".concat(this._year));
        console.log("Fuel Capacity: ".concat(this._fuelCapacity));
        console.log("Current Fuel: ".concat(this._currentFuel));
        console.log("Milage: ".concat(this._milage));
        console.log("Fuel for 1 KM: ".concat(this._fuelFor1KM));
        console.log("Engine Type: ".concat(this._engine));
        console.log("Vehicle Type: ".concat(this._vehicleType));
    };
    Motorcycle.prototype.drive = function (km) {
        var fuelUsed = km * this._fuelFor1KM;
        if (this._currentFuel >= fuelUsed) {
            this._currentFuel -= fuelUsed;
            this._milage += km;
            return this._currentFuel;
        }
        else {
            console.log("Not enough fuel!");
            return this._currentFuel;
        }
    };
    Motorcycle.prototype.startEngine = function () {
        console.log("".concat(this.brandName, " ").concat(this._modelName, "'s engine is now running."));
    };
    return Motorcycle;
}());
var myCar = new Car('Toyota', 'Corolla', 2023, '50', 50, 0, 10, EngineType.DOHC);
myCar.getInfo();
var myMotorcycle = new Motorcycle('Honda', 'CBR600R', 2023, '40', 30, 0, 15, EngineType.SOHC);
myMotorcycle.getInfo();
var carElement = document.getElementById('carTitle');
var motorcycleElement = document.getElementById('motorcycleTitle');
if (carElement) {
    carElement.textContent += "".concat(myCar.brandName, " ").concat(myCar.modelName);
}
if (motorcycleElement) {
    motorcycleElement.textContent += "".concat(myMotorcycle.brandName, " ").concat(myMotorcycle.modelName);
    myMotorcycle.startEngine();
}
