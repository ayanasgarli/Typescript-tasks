enum VehicleType {
    Car = "Car",
    MotorCycle = "MotorCycle",
}
  
enum EngineType {
    DOHC = "DOHC",
    SOHC = "SOHC",
    TURBO = "TURBO",
}
  
type Capacity = "30" | "40" | "50" | "70" | "100";
  
interface IVehicle<T> {
    brandName: string;
    modelName: string;
    year: number;
    fuelCapacity: Capacity;
    currentFuel: T;
    milage: number;
    fuelFor1KM: number;
    engine: EngineType;
    vehicleType: VehicleType;
    getInfo(): void;
    drive(km: number): T;
}
    
class Car implements IVehicle<number> {
    brandName: string;
    private _modelName: string;
    private _year: number;
    private _fuelCapacity: Capacity;
    private _currentFuel: number;
    private _milage: number;
    private _fuelFor1KM: number;
    private _engine: EngineType;
    private _vehicleType: VehicleType;
  
    constructor(
      brandName: string,
      modelName: string,
      year: number,
      fuelCapacity: Capacity,
      currentFuel: number,
      milage: number,
      fuelFor1KM: number,
      engine: EngineType
    ) {
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
  
    public get modelName(): string {
      return this._modelName;
    }
  
    public get year(): number {
      return this._year;
    }
  
    public get fuelCapacity(): Capacity {
      return this._fuelCapacity;
    }
  
    public get currentFuel(): number {
      return this._currentFuel;
    }
  
    public get milage(): number {
      return this._milage;
    }
  
    public get fuelFor1KM(): number {
      return this._fuelFor1KM;
    }
  
    public get engine(): EngineType {
      return this._engine;
    }
  
    public get vehicleType(): VehicleType {
      return this._vehicleType;
    }
  
    getInfo(): void {
        console.log(`-----Car Datas-----`);
        console.log(`Brand: ${this.brandName}`);
        console.log(`Model: ${this.modelName}`)
        console.log(`Year: ${this._year}`)
        console.log(`Fuel Capacity: ${this._fuelCapacity}`)
        console.log(`Current Fuel: ${this._currentFuel}`)
        console.log(`Milage: ${this._milage}`)
        console.log(`Fuel for 1 KM: ${this._fuelFor1KM}`)
        console.log(`Engine Type: ${this._engine}`)
        console.log(`Vehicle Type: ${this._vehicleType}`)
      }
  
    drive(km: number): number {
      const fuelUsed = km * this._fuelFor1KM;
      if (this._currentFuel >= fuelUsed) {
        this._currentFuel -= fuelUsed;
        this._milage += km;
        return this._currentFuel;
      } else {
        console.log("Not enough fuel!");
        return this._currentFuel;
      }
    }
  }
  
  class Motorcycle implements IVehicle<number> {
    brandName: string;
    private _modelName: string;
    private _year: number;
    private _fuelCapacity: Capacity;
    private _currentFuel: number;
    private _milage: number;
    private _fuelFor1KM: number;
    private _engine: EngineType;
    private _vehicleType: VehicleType;
  
    constructor(
      brandName: string,
      modelName: string,
      year: number,
      fuelCapacity: Capacity,
      currentFuel: number,
      milage: number,
      fuelFor1KM: number,
      engine: EngineType
    ) {
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
  
    public get modelName(): string {
      return this._modelName;
    }
  
    public get year(): number {
      return this._year;
    }
  
    public get fuelCapacity(): Capacity {
      return this._fuelCapacity;
    }
  
    public get currentFuel(): number {
      return this._currentFuel;
    }
  
    public get milage(): number {
      return this._milage;
    }
  
    public get fuelFor1KM(): number {
      return this._fuelFor1KM;
    }
  
    public get engine(): EngineType {
      return this._engine;
    }
  
    public get vehicleType(): VehicleType {
      return this._vehicleType;
    }
    
    getInfo(): void {
        console.log(`-----Motorcycle Datas-----`);
        console.log(`Brand: ${this.brandName}`);
        console.log(`Model: ${this.modelName}`)
        console.log(`Year: ${this._year}`)
        console.log(`Fuel Capacity: ${this._fuelCapacity}`)
        console.log(`Current Fuel: ${this._currentFuel}`)
        console.log(`Milage: ${this._milage}`)
        console.log(`Fuel for 1 KM: ${this._fuelFor1KM}`)
        console.log(`Engine Type: ${this._engine}`)
        console.log(`Vehicle Type: ${this._vehicleType}`)
    }
  
    drive(km: number): number {
      const fuelUsed = km * this._fuelFor1KM;
      if (this._currentFuel >= fuelUsed) {
        this._currentFuel -= fuelUsed;
        this._milage += km;
        return this._currentFuel;
      } else {
        console.log("Not enough fuel!");
        return this._currentFuel;
      }
    }
  
    startEngine(): void {
      console.log(`${this.brandName} ${this._modelName}'s engine is now running.`);
    }
  }
  
  
 const myCar = new Car(
  'Toyota',
  'Corolla',
  2023,
  '50',
  50,
  0,
  10,
  EngineType.DOHC
);
myCar.getInfo(); 

const myMotorcycle = new Motorcycle(
  'Honda',
  'CBR600R',
  2023,
  '40',
  30,
  0,
  15,
  EngineType.SOHC
);
myMotorcycle.getInfo();

const carElement = document.getElementById('carTitle');
const motorcycleElement = document.getElementById('motorcycleTitle');

if (carElement) {
  carElement.textContent += `${myCar.brandName} ${myCar.modelName}`;
}

if (motorcycleElement) {
  motorcycleElement.textContent += `${myMotorcycle.brandName} ${myMotorcycle.modelName}`;
  myMotorcycle.startEngine();
}