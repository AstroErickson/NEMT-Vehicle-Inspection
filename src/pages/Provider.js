import { useState } from 'react';
import { setProviderName, setProviderRepresentative, setInspectionType, getProviderName } from '../data/providerData'; // Assuming you have a data file for provider information
import { setVehicleType, setVehicleLicensePlate, setVin, setMileage, setVehicleNumber, setYear, setMake, setModel } from '../data/providerData';    
import { getProviderRepresentative, getVehicleLicensePlate, getVin } from '../data/providerData'; // Assuming you have a data file for provider information    
import { getVehicleNumber, getMileage, getYear, getMake, getModel } from '../data/providerData';
import { getInspectionType } from '../data/providerData';
import '../App.css';

export default function Provider() {
const [proName, setProName] = useState('');    
const [repName, setRepName] = useState('');
const [vehLicense, setVehLicense] = useState('');
const [vehVin, setVehVin] = useState('');
const [vehMileage, setVehMileage] = useState('');
const [vehNumber, setVehNumber] = useState('');
const [vehYear, setVehYear] = useState('');
const [vehMake, setVehMake] = useState('');
const [vehModel, setVehModel] = useState('');
const [vehType, setVehType] = useState('');
function VehicleTypes() {
    if (vehType === 'Bus') {
    return (
            <div>
                <br/>
                <label><input type="radio" id="bus" name="vehicletype" value="Bus" onChange={handleVehicleType} checked={true}/>Bus</label>
                <br/>
                <label><input type="radio" id="stretchervan" name="vehicletype" value="Stretcher" onChange={handleVehicleType} />Stretcher</label>
                <br/>
                <label><input type="radio" id="van" name="vehicletype" value="Van (Regular" onChange={handleVehicleType} />Van (Regular)</label>
                <br/>
                <label><input type="radio" id="vanwc"  name="vehicletype" value="Van (Wheelchair)" onChange={handleVehicleType} />Van (Wheelchair)</label>   
                <br/>
                <label><input type="radio" id="vanwcxl" name="vehicletype" value="Van (Wheelchair Lift)" onChange={handleVehicleType} />Van (Wheelchair Lift)</label>
                <br/>
            </div>
    )    
    } else if (vehType === 'Stretcher') {
    return (
        <div>
            <br />
            <label><input type="radio" id="bus" name="vehicletype" value="Bus" onChange={handleVehicleType} />Bus</label>
            <br />
            <label><input type="radio" id="stretchervan" name="vehicletype" value="Stretcher" onChange={handleVehicleType} checked={true} />Stretcher</label>
            <br />
            <label><input type="radio" id="van" name="vehicletype" value="Van (Regular" onChange={handleVehicleType} />Van (Regular)</label>
            <br />
            <label><input type="radio" id="vanwc" name="vehicletype" value="Van (Wheelchair)" onChange={handleVehicleType} />Van (Wheelchair)</label>
            <br />
            <label><input type="radio" id="vanwcxl" name="vehicletype" value="Van (Wheelchair Lift)" onChange={handleVehicleType} />Van (Wheelchair Lift)</label>
            <br />
            </div>
    )
    } else if (vehType === 'Van (Regular') {
        return (
            <div>
            <br/>
            <label><input type="radio" id="bus" name="vehicletype" value="Bus" onChange={handleVehicleType} />Bus</label>
            <br/>
            <label><input type="radio" id="stretchervan" name="vehicletype" value="Stretcher" onChange={handleVehicleType} />Stretcher</label>
            <br/>
            <label><input type="radio" id="van" name="vehicletype" value="Van (Regular" onChange={handleVehicleType} checked={true}/>Van (Regular)</label>
            <br/>
            <label><input type="radio" id="vanwc"  name="vehicletype" value="Van (Wheelchair)" onChange={handleVehicleType} />Van (Wheelchair)</label>   
            <br/>
            <label><input type="radio" id="vanwcxl" name="vehicletype" value="Van (Wheelchair Lift)" onChange={handleVehicleType} />Van (Wheelchair Lift)</label>
            <br/>
            </div>
        )
    } else if (vehType === 'Van (Wheelchair)') {
        return (
        <div>  
        <br/>
        <label><input type="radio" id="bus" name="vehicletype" value="Bus" onChange={handleVehicleType} />Bus</label>
        <br/>
        <label><input type="radio" id="stretchervan" name="vehicletype" value="Stretcher" onChange={handleVehicleType} />Stretcher</label>
        <br/>
        <label><input type="radio" id="van" name="vehicletype" value="Van (Regular" onChange={handleVehicleType} />Van (Regular)</label>
        <br/>
        <label><input type="radio" id="vanwc"  name="vehicletype" value="Van (Wheelchair)" onChange={handleVehicleType} checked={true}/>Van (Wheelchair)</label>   
        <br/>
        <label><input type="radio" id="vanwcxl" name="vehicletype" value="Van (Wheelchair Lift)" onChange={handleVehicleType} />Van (Wheelchair Lift)</label>
        <br/>
        </div>  
    ) 
    } else if (vehType === 'Van (Wheelchair Lift)') {
    return (
        <div>
        <br/>
        <label><input type="radio" id="bus" name="vehicletype" value="Bus" onChange={handleVehicleType} />Bus</label>
        <br/>
        <label><input type="radio" id="stretchervan" name="vehicletype" value="Stretcher" onChange={handleVehicleType} />Stretcher</label>
        <br/>
        <label><input type="radio" id="van" name="vehicletype" value="Van (Regular" onChange={handleVehicleType} />Van (Regular)</label>
        <br/>
        <label><input type="radio" id="vanwc"  name="vehicletype" value="Van (Wheelchair)" onChange={handleVehicleType} />Van (Wheelchair)</label>   
        <br/>
        <label><input type="radio" id="vanwcxl" name="vehicletype" value="Van (Wheelchair Lift)" onChange={handleVehicleType} checked={true}/>Van (Wheelchair Lift)</label>
        <br/>
        </div>
    )
    } else {
    return (
        <div>
        <br/>
        <label><input type="radio" id="bus" name="vehicletype" value="Bus" onChange={handleVehicleType} />Bus</label>
        <br/>
        <label><input type="radio" id="stretchervan" name="vehicletype" value="Stretcher" onChange={handleVehicleType} />Stretcher</label>
        <br/>
        <label><input type="radio" id="van" name="vehicletype" value="Van (Regular" onChange={handleVehicleType} />Van (Regular)</label>
        <br/>
        <label><input type="radio" id="vanwc"  name="vehicletype" value="Van (Wheelchair)" onChange={handleVehicleType} />Van (Wheelchair)</label>   
        <br/>
        <label><input type="radio" id="vanwcxl" name="vehicletype" value="Van (Wheelchair Lift)" onChange={handleVehicleType} />Van (Wheelchair Lift)</label>
        <br/>
        </div>
    )
}
}
function InspectionTypes() {
  const type = getInspectionType();  
  if (type === 'initial') {
    console.log('Inspection Type on Load:', type);
    return (
        <div>
        <label><input type="radio" id="initial" name="inspectiontype" value="initial" checked={true} onChange={handleInspectionType} />Initial</label>
        <br/>
        <label><input type="radio" id="random" name="inspectiontype" value="random" onChange={handleInspectionType} />Random</label>
        <br/>
        <label><input type="radio" id="reinspection" name="inspectiontype" value="reinspection" onChange={handleInspectionType} />Re-inspection</label>
        <br/>
        <label><input type="radio" id="complaint" name="inspectiontype" value="complaint" onChange={handleInspectionType} />Complaint</label>    
        </div>
  )    
  } else if (type === 'random') {
    console.log('Inspection Type on Load:', type);
    return (
        <div>
        <label><input type="radio" id="initial" name="inspectiontype" value="initial" onChange={handleInspectionType} />Initial</label>
        <br/>
        <label><input type="radio" id="random" name="inspectiontype" value="random" checked={true} onChange={handleInspectionType} />Random</label>
        <br/>
        <label><input type="radio" id="reinspection" name="inspectiontype" value="reinspection" onChange={handleInspectionType} />Re-inspection</label>
        <br/>
        <label><input type="radio" id="complaint" name="inspectiontype" value="complaint" onChange={handleInspectionType} />Complaint</label>    
        </div>
  )    
  } else if (type === 'reinspection') {
    console.log('Inspection Type on Load:', type);
    return (
        <div>
        <label><input type="radio" id="initial" name="inspectiontype" value="initial" onChange={handleInspectionType} />Initial</label>
        <br/>
        <label><input type="radio" id="random" name="inspectiontype" value="random" onChange={handleInspectionType} />Random</label>
        <br/>
        <label><input type="radio" id="reinspection" name="inspectiontype" value="reinspection" checked={true} onChange={handleInspectionType} />Re-inspection</label>
        <br/>
        <label><input type="radio" id="complaint" name="inspectiontype" value="complaint" onChange={handleInspectionType} />Complaint</label>    
        </div>
  )    
  } else if (type === 'complaint') {
    console.log('Inspection Type on Load:', type);
    return (
        <div>
        <label><input type="radio" id="initial" name="inspectiontype" value="initial" onChange={handleInspectionType} />Initial</label>
        <br/>
        <label><input type="radio" id="random" name="inspectiontype" value="random" onChange={handleInspectionType} />Random</label>
        <br/>
        <label><input type="radio" id="reinspection" name="inspectiontype" value="reinspection" onChange={handleInspectionType} />Re-inspection</label>
        <br/>
        <label><input type="radio" id="complaint" name="inspectiontype" value="complaint" checked={true} onChange={handleInspectionType} />Complaint</label>    
        </div>
  )
  } else {
  return (
    <div>
        <label><input type="radio" id="initial" name="inspectiontype" value="initial" onChange={handleInspectionType} />Initial</label>
        <br/>
        <label><input type="radio" id="random" name="inspectiontype" value="random" onChange={handleInspectionType} />Random</label>
        <br/>
        <label><input type="radio" id="reinspection" name="inspectiontype" value="reinspection" onChange={handleInspectionType} />Re-inspection</label>
        <br/>
        <label><input type="radio" id="complaint" name="inspectiontype" value="complaint" onChange={handleInspectionType} />Complaint</label>    
    </div>
    )
}

}
function handleProviderName(event) {
   setProviderName(event.target.value); // Use the setter function
   setProName(event.target.value); // Update local state
   console.log('Provider Name:', event.target.value);
}
function handleProviderRepresentative(event) {
    setProviderRepresentative(event.target.value);
    setRepName(event.target.value);
    console.log('Provider Representative:', event.target.value);
}
function handleInspectionType(event) {
    setInspectionType(event.target.value);
    console.log('Inspection Type:', event.target.value);
}
function handleVehicleType(event) {
    setVehicleType(event.target.value);
    setVehType(event.target.value);
    console.log('Vehicle Type:', event.target.value);
}
function handleVehicleLicensePlate(event) {
    setVehicleLicensePlate(event.target.value);
    setVehLicense(event.target.value);
    console.log('Vehicle License Plate:', event.target.value);
}
function handleVin(event) {     
    setVin(event.target.value);
    setVehVin(event.target.value);
    console.log('VIN:', event.target.value);
}
function handleMileage(event) {
    setMileage(event.target.value);
    setVehMileage(event.target.value);
    console.log('Mileage:', event.target.value);
}
function handleVehicleNumber(event) {
    setVehicleNumber(event.target.value);
    setVehNumber(event.target.value);
    console.log('Vehicle Number:', event.target.value);
}
function handleYear(event) {
    setYear(event.target.value);
    setVehYear(event.target.value);
    console.log('Year:', event.target.value);
}
function handleMake(event) {
    setMake(event.target.value);
    setVehMake(event.target.value);
    console.log('Make:', event.target.value);
}
function handleModel(event) {
    setModel(event.target.value);
    setVehModel(event.target.value);
    console.log('Model:', event.target.value);
}   
return (
    <div className='App-page'>
        <h1>Provider Page</h1>
        <table>
            <tbody>
                <tr>
                    <td>Provider Name:</td>
                    <td><input id="providername" type="text" name="providername" value={getProviderName()} onChange={handleProviderName}/></td>
                    <td>Provider Representative:</td>
                    <td><input id="representative" type="text" name="providerrepresentative" value={getProviderRepresentative()} onChange={handleProviderRepresentative} /></td>
                </tr>
                <tr>
                    <td>Inspection Type:</td>
                    <InspectionTypes />
                    <td>Vehicle Type:</td>
                    <VehicleTypes />
                </tr>
                <tr>
                    <td>Vehicle License Plate:</td>
                    <td><input id="licenseplate" type="text" name="vehiclelicenseplate" value={getVehicleLicensePlate()} onChange={handleVehicleLicensePlate} /></td>
                    <td>VIN:</td>
                    <td><input id="vin" type="text" name="vehiclevin" value={getVin()} onChange={handleVin} /></td>
                    <td>Mileage:</td>
                    <td><input id="mileage" type="text" name="vehiclemileage" value={getMileage()} onChange={handleMileage} /> </td>
                </tr>
                <tr>
                <td>Vehicle #:</td>
                <td><input id="vehiclenumber" type="text" name="vehicleid" value={getVehicleNumber()} onChange={handleVehicleNumber} /></td>
                <td>Year:</td>
                <td><input id="year" type="text" name="vehicleyear" value={getYear()} onChange={handleYear} /></td>
                <td>Make:</td>
                <td><input id="make" type="text" name="vehiclemake" value={getMake()} onChange={handleMake} /></td>
                <td>Model:</td>
                <td><input id="model" type="text" name="vehiclemodel" value={getModel()} onChange={handleModel} /></td>
                </tr>
            </tbody>
        </table>    
    </div>
);
}
