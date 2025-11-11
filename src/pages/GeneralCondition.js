import React from 'react';
import { useState } from 'react';
import { setC1, setC2, setC3, setC4, setC5, setC6, setC7, setC8, setC9, setC10, setC11, setC12, setC13, setC14 } from '../data/generalConditionData'; // Assuming you have a data file for general condition information    
import { getC1, getC2, getC3, getC4, getC5, getC6, getC7, getC8, getC9, getC10, getC11, getC12, getC13, getC14 } from '../data/generalConditionData'; // Assuming you have a data file for general condition information
import '../App.css';

export default function GeneralCondition() {
function C1() {
    const c1 = getC1();
    if (c1 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c1T" name="c1" value="PASS" checked={true} onChange={handleC1}/>PASS</label>
            <label><input type="radio" id="c1F" name="c1" value="FAILED" onChange={handleC1}/>FAILED</label>
            </div>        
        )
    } else if (c1 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c1T" name="c1" value="PASS" onChange={handleC1}/>PASS</label>
            <label><input type="radio" id="c1F" name="c1" value="FAILED" checked={true} onChange={handleC1}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c1T" name="c1" value="PASS" onChange={handleC1}/>PASS</label>
            <label><input type="radio" id="c1F" name="c1" value="FAILED" onChange={handleC1}/>FAILED</label>
            </div>        
        )
    }
}
function C2() {
    const c2 = getC2();
    if (c2 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c2T" name="c2" value="PASS" checked={true} onChange={handleC2}/>PASS</label>
            <label><input type="radio" id="c2F" name="c2" value="FAILED" onChange={handleC2}/>FAILED</label>
            </div>        
        )
    } else if (c2 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c2T" name="c2" value="PASS" onChange={handleC2}/>PASS</label>
            <label><input type="radio" id="c2F" name="c2" value="FAILED" checked={true} onChange={handleC2}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c2T" name="c2" value="PASS" onChange={handleC2}/>PASS</label>
            <label><input type="radio" id="c2F" name="c2" value="FAILED" onChange={handleC2}/>FAILED</label>
            </div>        
        )
    }
}
function C3() {
    const c3 = getC3();
    if (c3 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c3T" name="c3" value="PASS" checked={true} onChange={handleC3}/>PASS</label>
            <label><input type="radio" id="c3F" name="c3" value="FAILED" onChange={handleC3}/>FAILED</label>
            </div>        
        )
    } else if (c3 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c3T" name="c3" value="PASS" onChange={handleC3}/>PASS</label>
            <label><input type="radio" id="c3F" name="c3" value="FAILED" checked={true} onChange={handleC3}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c3T" name="c3" value="PASS" onChange={handleC3}/>PASS</label>
            <label><input type="radio" id="c3F" name="c3" value="FAILED" onChange={handleC3}/>FAILED</label>
            </div>        
        )
    }
}
function C4() {
    const c4 = getC4();
    if (c4 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c4T" name="c4" value="PASS" checked={true} onChange={handleC4}/>PASS</label>
            <label><input type="radio" id="c4F" name="c4" value="FAILED" onChange={handleC4}/>FAILED</label>
            </div>        
        )
    } else if (c4 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c4T" name="c4" value="PASS" onChange={handleC4}/>PASS</label>
            <label><input type="radio" id="c4F" name="c4" value="FAILED" checked={true} onChange={handleC4}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c4T" name="c4" value="PASS" onChange={handleC4}/>PASS</label>
            <label><input type="radio" id="c4F" name="c4" value="FAILED" onChange={handleC4}/>FAILED</label>
            </div>        
        )
    }
}
function C5() {
    const c5 = getC5();
    if (c5 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c5T" name="c5" value="PASS" checked={true} onChange={handleC5}/>PASS</label>
            <label><input type="radio" id="c5F" name="c5" value="FAILED" onChange={handleC5}/>FAILED</label>
            </div>        
        )
    } else if (c5 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c5T" name="c5" value="PASS" onChange={handleC5}/>PASS</label>
            <label><input type="radio" id="c5F" name="c5" value="FAILED" checked={true} onChange={handleC5}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c5T" name="c5" value="PASS" onChange={handleC5}/>PASS</label>
            <label><input type="radio" id="c5F" name="c5" value="FAILED" onChange={handleC5}/>FAILED</label>
            </div>        
        )
    }
}
function C6() {
    const c6 = getC6();
    if (c6 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c6T" name="c6" value="PASS" checked={true} onChange={handleC6}/>PASS</label>
            <label><input type="radio" id="c6F" name="c6" value="FAILED" onChange={handleC6}/>FAILED</label>
            </div>        
        )
    } else if (c6 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c6T" name="c6" value="PASS" onChange={handleC6}/>PASS</label>
            <label><input type="radio" id="c6F" name="c6" value="FAILED" checked={true} onChange={handleC6}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c6T" name="c6" value="PASS" onChange={handleC6}/>PASS</label>
            <label><input type="radio" id="c6F" name="c6" value="FAILED" onChange={handleC6}/>FAILED</label>
            </div>        
        )
    }
}
function C7() {
    const c7 = getC7();
    if (c7 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c7T" name="c7" value="PASS" checked={true} onChange={handleC7}/>PASS</label>
            <label><input type="radio" id="c7F" name="c7" value="FAILED" onChange={handleC7}/>FAILED</label>
            </div>        
        )
    } else if (c7 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c7T" name="c7" value="PASS" onChange={handleC7}/>PASS</label>
            <label><input type="radio" id="c7F" name="c7" value="FAILED" checked={true} onChange={handleC7}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c7T" name="c7" value="PASS" onChange={handleC7}/>PASS</label>
            <label><input type="radio" id="c7F" name="c7" value="FAILED" onChange={handleC7}/>FAILED</label>
            </div>        
        )
    }
}
function C8() {
    const c8 = getC8();
    if (c8 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c8T" name="c8" value="PASS" checked={true} onChange={handleC8}/>PASS</label>
            <label><input type="radio" id="c8F" name="c8" value="FAILED" onChange={handleC8}/>FAILED</label>
            </div>        
        )
    } else if (c8 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c8T" name="c8" value="PASS" onChange={handleC8}/>PASS</label>
            <label><input type="radio" id="c8F" name="c8" value="FAILED" checked={true} onChange={handleC8}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c8T" name="c8" value="PASS" onChange={handleC8}/>PASS</label>
            <label><input type="radio" id="c8F" name="c8" value="FAILED" onChange={handleC8}/>FAILED</label>
            </div>        
        )
    }
}
function C9() {
    const c9= getC9();
    if (c9 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c9T" name="c9" value="PASS" checked={true} onChange={handleC9}/>PASS</label>
            <label><input type="radio" id="c9F" name="c9" value="FAILED" onChange={handleC9}/>FAILED</label>
            </div>        
        )
    } else if (c9 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c9T" name="c9" value="PASS" onChange={handleC9}/>PASS</label>
            <label><input type="radio" id="c9F" name="c9" value="FAILED" checked={true} onChange={handleC9}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c9T" name="c9" value="PASS" onChange={handleC9}/>PASS</label>
            <label><input type="radio" id="c9F" name="c9" value="FAILED" onChange={handleC9}/>FAILED</label>
            </div>        
        )
    }
}
function C10() {
    const c10= getC10();
    if (c10 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c10T" name="c10" value="PASS" checked={true} onChange={handleC10}/>PASS</label>
            <label><input type="radio" id="c10F" name="c10" value="FAILED" onChange={handleC10}/>FAILED</label>
            </div>        
        )
    } else if (c10 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c10T" name="c10" value="PASS" onChange={handleC10}/>PASS</label>
            <label><input type="radio" id="c10F" name="c10" value="FAILED" checked={true} onChange={handleC10}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c10T" name="c10" value="PASS" onChange={handleC10}/>PASS</label>
            <label><input type="radio" id="c10F" name="c10" value="FAILED" onChange={handleC10}/>FAILED</label>
            </div>        
        )
    }
}
function C11() {
    const c11= getC11();
    if (c11 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c11T" name="c11" value="PASS" checked={true} onChange={handleC11}/>PASS</label>
            <label><input type="radio" id="c11F" name="c11" value="FAILED" onChange={handleC11}/>FAILED</label>
            </div>        
        )
    } else if (c11 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c11T" name="c11" value="PASS" onChange={handleC11}/>PASS</label>
            <label><input type="radio" id="c11F" name="c11" value="FAILED" checked={true} onChange={handleC11}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c11T" name="c11" value="PASS" onChange={handleC11}/>PASS</label>
            <label><input type="radio" id="c11F" name="c11" value="FAILED" onChange={handleC11}/>FAILED</label>
            </div>        
        )
    }
}
function C12() {
    const c12= getC12();
    if (c12 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c12T" name="c12" value="PASS" checked={true} onChange={handleC12}/>PASS</label>
            <label><input type="radio" id="c12F" name="c12" value="FAILED" onChange={handleC12}/>FAILED</label>
            </div>        
        )
    } else if (c12 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c12T" name="c12" value="PASS" onChange={handleC12}/>PASS</label>
            <label><input type="radio" id="c12F" name="c12" value="FAILED" checked={true} onChange={handleC12}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c12T" name="c12" value="PASS" onChange={handleC12}/>PASS</label>
            <label><input type="radio" id="c12F" name="c12" value="FAILED" onChange={handleC12}/>FAILED</label>
            </div>        
        )
    }
}
function C13() {
    const c13= getC13();
    if (c13 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c13T" name="c13" value="PASS" checked={true} onChange={handleC13}/>PASS</label>
            <label><input type="radio" id="c13F" name="c13" value="FAILED" onChange={handleC13}/>FAILED</label>
            </div>        
        )
    } else if (c13 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c13T" name="c13" value="PASS" onChange={handleC13}/>PASS</label>
            <label><input type="radio" id="c13F" name="c13" value="FAILED" checked={true} onChange={handleC13}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c13T" name="c13" value="PASS" onChange={handleC13}/>PASS</label>
            <label><input type="radio" id="c13F" name="c13" value="FAILED" onChange={handleC13}/>FAILED</label>
            </div>        
        )
    }
}
function C14() {
    const c14= getC14();
    if (c14 === 'PASS') {
        return (
            <div>
            <label><input type="radio" id="c14T" name="c14" value="PASS" checked={true} onChange={handleC14}/>PASS</label>
            <label><input type="radio" id="c14F" name="c14" value="FAILED" onChange={handleC14}/>FAILED</label>
            </div>        
        )
    } else if (c14 === 'FAILED') {
        return (
            <div>
            <label><input type="radio" id="c14T" name="c14" value="PASS" onChange={handleC14}/>PASS</label>
            <label><input type="radio" id="c14F" name="c14" value="FAILED" checked={true} onChange={handleC14}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="c14T" name="c14" value="PASS" onChange={handleC14}/>PASS</label>
            <label><input type="radio" id="c14F" name="c14" value="FAILED" onChange={handleC14}/>FAILED</label>
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
function handleC1(event) {
    setC1(event.target.value);
    console.log('C1:', event.target.value);
}       
function handleC2(event) {
    setC2(event.target.value);
    console.log('C2:', event.target.value);
}
function handleC3(event) {
    setC3(event.target.value);      
    console.log('C3:', event.target.value);
}
function handleC4(event) {
    setC4(event.target.value);
    console.log('C4:', event.target.value);
}
function handleC5(event) {
    setC5(event.target.value);
    console.log('C5:', event.target.value);
}
function handleC6(event) {
    setC6(event.target.value);
    console.log('C6:', event.target.value);
}   
function handleC7(event) {
    setC7(event.target.value);
    console.log('C7:', event.target.value);
}
function handleC8(event) {
    setC8(event.target.value);
    console.log('C8:', event.target.value);
}
function handleC9(event) {
    setC9(event.target.value);
    console.log('C9:', event.target.value);
}
function handleC10(event) {
    setC10(event.target.value);
    console.log('C10:', event.target.value);
}
function handleC11(event) {
    setC11(event.target.value);
    console.log('C11:', event.target.value);
}
function handleC12(event) {
    setC12(event.target.value);
    console.log('C12:', event.target.value);
}
function handleC13(event) {
    setC13(event.target.value);
    console.log('C13:', event.target.value);
}
function handleC14(event) {
    setC14(event.target.value);
    console.log('C14:', event.target.value);
}

return (
    <div className="App-page"><h1>General Condition Page</h1><table>

        <tbody>
            <tr>
                <td>C1</td>
                <C1/>
                <td>Exterior Decals</td>
                <td>C8</td>
                <C8/>
                <td>Emergency Triangles/Flares/Reflectors</td>
            </tr>
            <tr>
                <td>C2</td>
                <C2/>
                <td>General Interior Cleanliness</td>
                <td>C9</td>
                <C9/>
                <td>First Aid Kit (check expiration)</td>
            </tr>
            <tr>
                <td>C3</td>
                <C3/>
                <td>General Exterior Cleanliness</td>
                <td>C10</td>
                <C10/>
                <td>Biohazard/COVID Kit</td>
            </tr>
            <tr>
                <td>C4</td>
                <C4/>
                <td>Upholstery/Flooring/Floor Space</td>
                <td>C11</td>
                <C11/>
                <td>Flashlight</td>
            </tr>
            <tr>
                <td>C5</td>
                <C5/>
                <td>Walls and Windows </td>
                <td>C12</td>
                <C12/>
                <td>Fire Extinguisher</td>
            </tr>
            <tr>
                <td>C6</td>
                <C6/>
                <td>Overhead and Interior Lighting</td>
                <td>C13</td>
                <C13/>
                <td>Map or GPS</td>
            </tr>
            <tr>
                <td>C7</td>
                <C7/>
                <td>Overhead and Interior Lighting</td>
                <td>C14</td>
                <C14/>
                <td>Incident Accident Form/Medical Waiver</td>
            </tr>
        </tbody>
    </table></div>
);
}
