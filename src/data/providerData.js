var providerName = '';
var providerRepresentative = '';
var inspectionType = '';
var complaintNumber = '';
var vehicleType = '';
var vehicleLicensePlate = '';
var vin = '';
var mileage = '';
var vehicleNumber = '';
var year = '';
var make = '';
var model = '';

export function setComplaintNumber(value) {
    complaintNumber = value;
}
export function getComplaintNumber() {
    return complaintNumber;
}
export function setProviderRepresentative(value) {
    providerRepresentative = value;
}
export function getProviderRepresentative() {
    return providerRepresentative;
}
export function setInspectionType(value) {
    inspectionType = value;
}
export function getInspectionType() {
    return inspectionType;
}
export function setVehicleType(value) {
    vehicleType = value;
}
export function getVehicleType() {
    return vehicleType;
}
export function setVehicleLicensePlate(value) {
    vehicleLicensePlate = value;
}
export function getVehicleLicensePlate() {
    return vehicleLicensePlate;
}
export function setVin(value) {
    vin = value;
}
export function getVin() {
    return vin;
}
export function setMileage(value) {
    mileage = value;
}
export function getMileage() {
    return mileage;
}
export function setVehicleNumber(value) {
    vehicleNumber = value;
}
export function getVehicleNumber() {
    return vehicleNumber;
}
export function setYear(value) {
    year = value;
}
export function getYear() {
    return year;
}
export function setMake(value) {
    make = value;
}
export function getMake() {
    return make;
}
export function setModel(value) {
    model = value;
}
export function getModel() {
    return model;
}   
export function setProviderName(value) {
    console.log('Setting Provider Name:', value);
    providerName = value;
}
export function getProviderName() {
    console.log('Getting Provider Name:', providerName);
    return providerName;
}   
