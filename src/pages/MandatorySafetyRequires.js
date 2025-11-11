import React from 'react';
import { setS1, setS2, setS3, setS4, setS5, setS6, setS7, setS8, setS9, setS10, setS11, setS12, setS13, setS14 } from '../data/mandatorySafetyData'; // Assuming you have a data file for mandatory safety information  
import { getS1, getS2, getS3, getS4, getS5, getS6, getS7, getS8, getS9, getS10, getS11, getS12, getS13, getS14 } from '../data/mandatorySafetyData'; // Assuming you have a data file for mandatory safety information
import { getInsurance, getRegistration, getState } from '../data/mandatorySafetyData';
import { setRegistration, setInsurance } from '../data/mandatorySafetyData'; // Assuming you have a data file for mandatory safety information  
import { setState } from '../data/mandatorySafetyData'; // Assuming you have a data file for mandatory safety information
import '../App.css';

export default function MandatorySafetyRequires() {
 const [registionexpdate, setRegistionexpdate] = React.useState(getRegistration());
 const [insuranceexpdate, setInsuranceexpdate] = React.useState(getInsurance());
 const [stateexpdate, setStateexpdate] = React.useState(getState());     
function S1() {
    const s1 = getS1();
    if (s1 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="s1T" name="s1" value="true" checked={true} onChange={handleS1} />PASS</label>
            <label><input type="radio" id="s1F" name="s1" value="false" onChange={handleS1} />FAILED</label>
            </div>        
        )
    } else if (s1 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="s1T" name="s1" value="true" onChange={handleS1} />PASS</label>
            <label><input type="radio" id="s1F" name="s1" value="false" checked={true} onChange={handleS1} />FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="s1T" name="s1" value="true" onChange={handleS1} />PASS</label>
            <label><input type="radio" id="s1F" name="s1" value="false" onChange={handleS1} />FAILED</label>
            </div>        
        )
    }       
}   
function S2() {
    const s2 = getS2();
    if (s2 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="s2T" name="s2" value="true" checked={true} onChange={handleS2} />PASS</label>
            <label><input type="radio" id="s2F" name="s2" value="false" onChange={handleS2} />FAILED</label>
            </div>        
        )
    } else if (s2 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="s2T" name="s2" value="true" onChange={handleS2} />PASS</label>
            <label><input type="radio" id="s2F" name="s2" value="false" checked={true} onChange={handleS2} />FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="s2T" name="s2" value="true" onChange={handleS2} />PASS</label>
            <label><input type="radio" id="s2F" name="s2" value="false" onChange={handleS2} />FAILED</label>
            </div>        
        )
    }       
}
function S3() {
    const s3 = getS3();
    if (s3 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="s3T" name="s3" value="true" checked={true} onChange={handleS3} />PASS</label>
            <label><input type="radio" id="s3F" name="s3    " value="false" onChange={handleS3} />FAILED</label>
            </div>        
        )
    } else if (s3 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="s3T" name="s3" value="true" onChange={handleS3} />PASS</label>
            <label><input type="radio" id="s3F" name="s3" value="false" checked={true} onChange={handleS3} />FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="s3T" name="s3" value="true" onChange={handleS3} />PASS</label>
            <label><input type="radio" id="s3F" name="s3" value="false" onChange={handleS3} />FAILED</label>
            </div>        
        )
    }       
}
function S4() {
    const s4 = getS4();
    if (s4 === 'Pass') {
        return (
            <div> 
            <label><input type="radio" id="s4T" name="s4" value="true" checked={true} onChange={handleS4} />PASS</label>
            <label><input type="radio" id="s4F" name="s4" value="false" onChange={handleS4} />FAILED</label>
            </div>        
        )
    } else if (s4 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="s4T" name="s4" value="true" onChange={handleS4} />PASS</label>
            <label><input type="radio" id="s4F" name="s4" value="false" checked={true} onChange={handleS4} />FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="s4T" name="s4" value="true" onChange={handleS4} />PASS</label>
            <label><input type="radio" id="s4F" name="s4" value="false" onChange={handleS4} />FAILED</label>
            </div>        
        )
    }       
}
function S5() { 
    const s5 = getS5();
    if (s5 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="s5T" name="s5" value="true" checked={true} onChange={handleS5} />PASS</label>
            <label><input type="radio" id="s5F" name="s5" value="false" onChange={handleS5} />FAILED</label>
            </div>        
        )
    } else if (s5 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="s5T" name="s5" value="true" onChange={handleS5} />PASS</label>
            <label><input type="radio" id="s5F" name="s5" value="false" checked={true} onChange={handleS5} />FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="s5T" name="s5" value="true" onChange={handleS5} />PASS</label>
            <label><input type="radio" id="s5F" name="s5" value="false" onChange={handleS5} />FAILED</label>
            </div>        
        )
    }       
}
function S6() {
    const s6 = getS6();
    if (s6 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="s6T" name="s6" value="true" checked={true} onChange={handleS6} />PASS</label>
            <label><input type="radio" id="s6F" name="s6" value="false" onChange={handleS6} />FAILED</label>
            </div>        
        )
    } else if (s6 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="s6T" name="s6" value="true" onChange={handleS6} />PASS</label>
            <label><input type="radio" id="s6F" name="s6" value="false" checked={true} onChange={handleS6} />FAILED</label>
            </div>        
        )
    } else {     
        return (        
            <div>
            <label><input type="radio" id="s6T" name="s6" value="true" onChange={handleS6} />PASS</label>

            <label><input type="radio" id="s6F" name="s6" value="false" onChange={handleS6} />FAILED</label>
            </div>
        )   
    }
}
function S7() { 
    const s7 = getS7();
    if (s7 === 'Pass') {    
        return (
            <div>   
            <label><input type="radio" id="s7T" name="s7" value="true" checked={true} onChange={handleS7} />PASS</label>    
            <label><input type="radio" id="s7F" name="s7" value="false" onChange={handleS7} />FAILED</label>
            </div>
        )
    } else if (s7 === 'Fail') {
        return (
            <div>   
            <label><input type="radio" id="s7T" name="s7" value="true" onChange={handleS7} />PASS</label>

            <label><input type="radio" id="s7F" name="s7" value="false" checked={true} onChange={handleS7} />FAILED</label>
            </div>
        )
    } else {
        return (
            <div>

            <label><input type="radio" id="s7T" name="s7" value="true" onChange={handleS7} />PASS</label>       
            <label><input type="radio" id="s7F" name="s7" value="false" onChange={handleS7} />FAILED</label>
            </div>
        )
    }
}
function S8() { 
    const s8 = getS8();
    if (s8 === 'Pass') {
        return (
            <div>

            <label><input type="radio" id="s8T" name="s8" value="true" checked={true} onChange={handleS8} />PASS</label>        
            <label><input type="radio" id="s8F" name="s8" value="false" onChange={handleS8} />FAILED</label>    
            </div>
        )   
    } else if (s8 === 'Fail') { 
        return (
            <div>   
            <label><input type="radio" id="s8T" name="s8" value="true" onChange={handleS8} />PASS</label>

            <label><input type="radio" id="s8F" name="s8" value="false" checked={true} onChange={handleS8} />FAILED</label>
            </div>
        )           
    } else {
        return (    
            <div>
            <label><input type="radio" id="s8T" name="s8" value="true" onChange={handleS8} />PASS</label>   
            <label><input type="radio" id="s8F" name="s8" value="false" onChange={handleS8} />FAILED</label>
            </div>
        )
    }
}
function S9() {
    const s9 = getS9();
        
    if (s9 === 'Pass') {
        return (    
            <div>
            <label><input type="radio" id="s9T" name="s9" value="true" checked={true} onChange={handleS9} />PASS</label>
            <label><input type="radio" id="s9F" name="s9" value="false" onChange={handleS9} />FAILED</label>
            </div>
        )
    } else if (s9 === 'Fail') {

        return (    
            <div>
            <label><input type="radio" id="s9T" name="s9" value="true" onChange={handleS9} />PASS</label>

            <label><input type="radio" id="s9F" name="s9" value="false" checked={true} onChange={handleS9} />FAILED</label> 
            </div>
        )
    } else {
        return (    
            <div>
            <label><input type="radio" id="s9T" name="s9" value="true" onChange={handleS9} />PASS</label>   
            <label><input type="radio" id="s9F" name="s9" value="false" onChange={handleS9} />FAILED</label>
            </div>
        )
    }
}
function S10() {

    const s10 = getS10();
    if (s10 === 'Pass') {
        return (    
            <div>
            <label><input type="radio" id="s10T" name="s10" value="true" checked={true} onChange={handleS10} />PASS</label>
            <label><input type="radio" id="s10F" name="s10" value="false" onChange={handleS10} />FAILED</label>
            </div>
        )
    } else if (s10 === 'Fail') {
        return (    
            <div>
            <label><input type="radio" id="s10T" name="s10" value="true" onChange={handleS10} />PASS</label>
            <label><input type="radio" id="s10F" name="s10" value="false" checked={true} onChange={handleS10} />FAILED</label>
            </div>
        )
    } else {
        return (    
            <div>
            <label><input type="radio" id="s10T" name="s10" value="true" onChange={handleS10} />PASS</label>   
            <label><input type="radio" id="s10F" name="s10" value="false" onChange={handleS10} />FAILED</label>
            </div>
        )   
    }
}
function S11() {
    const s11 = getS11();
    if (s11 === 'Pass') {
        return (    
            <div>
            <label><input type="radio" id="s11T" name="s11" value="true" checked={true} onChange={handleS11} />PASS</label>
            <label><input type="radio" id="s11F" name="s11" value="false" onChange={handleS11} />FAILED</label>
            </div>
        )
    } else if (s11 === 'Fail') {
        return (    
            <div>
            <label><input type="radio" id="s11T" name="s11" value="true" onChange={handleS11} />PASS</label>
            <label><input type="radio" id="s11F" name="s11" value="false" checked={true} onChange={handleS11} />FAILED</label>
            </div>
        )
    } else {
        return (    
            <div>
            <label><input type="radio" id="s11T" name="s11" value="true" onChange={handleS11} />PASS</label>   
            <label><input type="radio" id="s11F" name="s11" value="false" onChange={handleS11} />FAILED</label>
            </div>
        )   
    }
}
function S12() {
    const s12 = getS12();
    if (s12 === 'Pass') {
        return (    
            <div>
            <label><input type="radio" id="s12T" name="s12" value="true" checked={true} onChange={handleS12} />PASS</label>
            <label><input type="radio" id="s12F" name="s12" value="false" onChange={handleS12} />FAILED</label>
            </div>
        )
    } else if (s12 === 'Fail') {
        return (    
            <div>
            <label><input type="radio" id="s12T" name="s12" value="true" onChange={handleS12} />PASS</label>
            <label><input type="radio" id="s12F" name="s12" value="false" checked={true} onChange={handleS12} />FAILED</label>
            </div>
        )
    } else {
        return (    
            <div>
            <label><input type="radio" id="s12T" name="s12" value="true" onChange={handleS12} />PASS</label>   
            <label><input type="radio" id="s12F" name="s12" value="false" onChange={handleS12} />FAILED</label>
            </div>
        )   
    }
}
function S13() {
    const s13 = getS13();
    if (s13 === 'Pass') {
        return (    
            <div>
            <label><input type="radio" id="s13T" name="s13" value="true" checked={true} onChange={handleS13} />PASS</label>
            <label><input type="radio" id="s13F" name="s13" value="false" onChange={handleS13} />FAILED</label>
            </div>
        )
    } else if (s13 === 'Fail') {
        return (    
            <div>
            <label><input type="radio" id="s13T" name="s13" value="true" onChange={handleS13} />PASS</label>
            <label><input type="radio" id="s13F" name="s13" value="false" checked={true} onChange={handleS13} />FAILED</label>
            </div>
        )
    } else {
        return (    
            <div>
            <label><input type="radio" id="s13T" name="s13" value="true" onChange={handleS13} />PASS</label>   
            <label><input type="radio" id="s13F" name="s13" value="false" onChange={handleS13} />FAILED</label>
            </div>
        )   
    }
}
function S14() {
    const s14 = getS14();
    if (s14 === 'Pass') {
        return (    
            <div>
            <label><input type="radio" id="s14T" name="s14" value="true" checked={true} onChange={handleS14} />PASS</label>
            <label><input type="radio" id="s14F" name="s14" value="false" onChange={handleS14} />FAILED</label>
            </div>
        )
    } else if (s14 === 'Fail') {
        return (    
            <div>
            <label><input type="radio" id="s14T" name="s14" value="true" onChange={handleS14} />PASS</label>
            <label><input type="radio" id="s14F" name="s14" value="false" checked={true} onChange={handleS14} />FAILED</label>
            </div>
        )
    } else {
        return (    
            <div>
            <label><input type="radio" id="s14T" name="s14" value="true" onChange={handleS14} />PASS</label>   
            <label><input type="radio" id="s14F" name="s14" value="false" onChange={handleS14} />FAILED</label>
            </div>
        )   
    }
}

function convertValue(value) {
    if (value === 'true') {
        return "Pass";
    } 
    return "Fail";      
}
function handleS1(event) {
    setS1(convertValue(event.target.value));
    console.log('S1:', event.target.value);    
}
function handleS2(event) {
    setS2(convertValue(event.target.value));
    console.log('S2:', event.target.value);
}
function handleS3(event) {
    setS3(convertValue(event.target.value));
    console.log('S3:', event.target.value);
}
function handleS4(event) {
    setS4(convertValue(event.target.value));
    console.log('S4:', event.target.value);
}
function handleS5(event) {
    setS5(convertValue(event.target.value));
    console.log('S5:', event.target.value);
}
function handleS6(event) {
    setS6(convertValue(event.target.value));
    console.log('S6:', event.target.value);
}
function handleS7(event) {
    setS7(convertValue(event.target.value));
    console.log('S7:', event.target.value);
}
function handleS8(event) {
    setS8(convertValue(event.target.value));
    console.log('S8:', event.target.value);
}
function handleS9(event) {
    setS9(convertValue(event.target.value));
    console.log('S9:', event.target.value);
}
function handleS10(event) {
    setS10(convertValue(event.target.value));
    console.log('S10:', event.target.value);
}
function handleS11(event) {
    setS11(convertValue(event.target.value));
    console.log('S11:', event.target.value);
}
function handleS12(event) {
    setS12(convertValue(event.target.value));
    console.log('S12:', event.target.value);
}
function handleS13(event) {
    setS13(convertValue(event.target.value));
    console.log('S13:', event.target.value);
}
function handleS14(event) {
    setS14(convertValue(event.target.value));
    console.log('S14:', event.target.value);
}
function handleRegistion(event) {
    setRegistration(event.target.value);
    setRegistionexpdate(event.target.value);
    console.log('Registration Exp Date:', event.target.value);
}
function handleInsurance(event) {
    setInsurance(event.target.value);
    setInsuranceexpdate(event.target.value);
    console.log('Insurance Exp Date:', event.target.value);
}
function handleState(event) {    
    setState(event.target.value);
    setStateexpdate(event.target.value);
    console.log('State Sticker Exp Date:', event.target.value);
}      
return (
    <div className="App-page"><h1>Mandatory Safety Requirements Page</h1><table>
        <tbody>
            <tr>
                <td>S1</td>
                <S1/>
                <td>Mirrors (side, rearview, interior)</td>
                <td>S8</td>
                <S8/>
                <td>Horn</td>
            </tr>
            <tr>
                <td>S2</td>
                <S2/>
                <td>Windshield (free of obstruction) / Wipers</td>
                <td>S9</td>
                <S9/>
                <td>Windows (must be fully functional)</td>
            </tr>
            <tr>
                <td>S3</td>
                <S3/>
                <td>Tires (treads, lugs, inflation) </td>
                <td>S10</td>
                <S10/>
                <td>Signage (Business name/Phone/PUC Number) both sides</td>
            </tr>
            <tr>
                <td>S4</td>
                <S4/>
                <td>Lights (head, brake, turn signal, hazards)</td>
                <td>S11</td>
                <S11/>
                <td>Tire Tread (check all 4 tires)</td>
            </tr>
            <tr>
                <td>S5</td>
                <S5/>
                <td>Seat Belts for Each Passenger/2 Extensions</td>
                <td>S12</td>
                <S12/>
                <td>Vehicle Registration Exp Date: <input type="date" id="registionexpdate" name="registionexpdate" value={getRegistration()} onChange={handleRegistion} /></td>
            </tr>
            <tr>
                <td>S6</td>
                <S6/>
                <td>A/C & Heating</td>
                <td>S13</td>
                <S13/>
                <td>Insurance Card Exp Date: <input type="date" id="insuranceexpdate" name="insuranceexpdate" value={getInsurance()} onChange={handleInsurance}/></td>
            </tr>
            <tr>
                <td>S7</td>
                <S7/>
                <td>Operational Radio/Phone/Tablet</td>
                <td>S14</td>
                <S14/>
                <td>State Sticker Exp Date: <input type="date" id="stateexpdate" name="stateexpdate" value={getState()} onChange={handleState}/></td>
            </tr>
        </tbody>
    </table></div>
);
}
