import React from 'react';
import { useState } from 'react';
import { setW1, setW2, setW3, setW4, setW5, setW6, setW7, setW8, setW9, setW10, setW11, setW12, setW13, setW14, setW15, setW16, setW17, setW18, setW19 } from '../data/mandatoryWheelchairData'; // Assuming you have a data file for mandatory wheelchair information  
import { getW1, getW2, getW3, getW4, getW5, getW6, getW7, getW8, getW9, getW10, getW11, getW12, getW13, getW14, getW15, getW16, getW17, getW18, getW19 } from '../data/mandatoryWheelchairData'; // Assuming you have a data file for mandatory wheelchair information
import '../App.css';
export default function MandatoryWheelchairRequirements() {
function W1() {
    const w1 = getW1();
    if (w1 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w1T" name="w1" value="true" checked={true} onChange={handleW1}/>PASS</label>
            <label><input type="radio" id="w1F" name="w1" value="false" onChange={handleW1}/>FAILED</label>
            </div>        
        )
    } else if (w1 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="w1T" name="w1" value="true" onChange={handleW1}/>PASS</label>
            <label><input type="radio" id="w1F" name="w1" value="false" checked={true} onChange={handleW1}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="w1T" name="w1" value="true" onChange={handleW1}/>PASS</label>
            <label><input type="radio" id="w1F" name="w1" value="false" onChange={handleW1}/>FAILED</label>
            </div>        
        )
    }       
}
function W2() {
    const w2 = getW2();
    if (w2 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w2T" name="w2" value="true" checked={true} onChange={handleW2}/>PASS</label>
            <label><input type="radio" id="w2F" name="w2" value="false" onChange={handleW2}/>FAILED</label>
            </div>        
        )
    } else if (w2 === 'Fail') {
        return (        
            <div>
            <label><input type="radio" id="w2T" name="w2" value="true" onChange={handleW2}/>PASS</label>
            <label><input type="radio" id="w2F" name="w2" value="false" checked={true} onChange={handleW2}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="w2T" name="w2" value="true" onChange={handleW2}/>PASS</label>
            <label><input type="radio" id="w2F" name="w2" value="false" onChange={handleW2}/>FAILED</label>
            </div>        
        )
    }       
}
function W3() {
    const w3 = getW3();
    if (w3 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w3T" name="w3" value="true" checked={true} onChange={handleW3}/>PASS</label>
            <label><input type="radio" id="w3F" name="w3" value="false" onChange={handleW3}/>FAILED</label>
            </div>        
        )
    } else if (w3 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="w3T" name="w3" value="true" onChange={handleW3}/>PASS</label>
            <label><input type="radio" id="w3F" name="w3" value="false" checked={true} onChange={handleW3}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="w3T" name="w3" value="true" onChange={handleW3}/>PASS</label>
            <label><input type="radio" id="w3F" name="w3" value="false" onChange={handleW3}/>FAILED</label>
            </div>        
        )
    }       
}
function W4() {
    const w4 = getW4();
    if (w4 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w4T" name="w4" value="true" checked={true} onChange={handleW4}/>PASS</label> 
            <label><input type="radio" id="w4F" name="w4" value="false" onChange={handleW4}/>FAILED</label>
            </div>        
        )
    } else if (w4 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="w4T" name="w4" value="true" onChange={handleW4}/>PASS</label> 
            <label><input type="radio" id="w4F" name="w4" value="false" checked={true} onChange={handleW4}/>FAILED</label>
            </div>        
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="w4T" name="w4" value="true" onChange={handleW4}/>PASS</label> 
            <label><input type="radio" id="w4F" name="w4" value="false" onChange={handleW4}/>FAILED</label>
            </div>        
        )
    }       
}
function W5() {     
    const w5 = getW5(); 
    if (w5 === 'Pass') {    
        return (
            <div>
            <label><input type="radio" id="w5T" name="w5" value="true" checked={true} onChange={handleW5}/>PASS</label> 
            <label><input type="radio" id="w5F" name="w5" value="false" onChange={handleW5}/>FAILED</label>
            </div>        
        )
    } else if (w5 === 'Fail') {         
        return (
            <div>           
            <label><input type="radio" id="w5T" name="w5" value="true" onChange={handleW5}/>PASS</label>        
            <label><input type="radio" id="w5F" name="w5" value="false" checked={true} onChange={handleW5}/>FAILED</label>
            </div>
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w5T" name="w5" value="true" onChange={handleW5}/>PASS</label>

            <label><input type="radio" id="w5F" name="w5" value="false" onChange={handleW5}/>FAILED</label>
            </div>
        )   
    }   
}
function W6() { 
    const w6 = getW6();
    if (w6 === 'Pass') {
        return (    
            <div>
            <label><input type="radio" id="w6T" name="w6" value="true" checked={true} onChange={handleW6}/>PASS</label> 
            <label><input type="radio" id="w6F" name="w6" value="false" onChange={handleW6}/>FAILED</label>
            </div>
        )   
    } else if (w6 === 'Fail') {
        return (    
            <div>
            <label><input type="radio" id="w6T" name="w6" value="true" onChange={handleW6}/>PASS</label>
            <label><input type="radio" id="w6F" name="w6" value="false" checked={true} onChange={handleW6}/>FAILED</label>
            </div>
        )   
    } else {    
        return (

            <div>       
            <label><input type="radio" id="w6T" name="w6" value="true" onChange={handleW6}/>PASS</label>

            <label><input type="radio" id="w6F" name="w6" value="false" onChange={handleW6}/>FAILED</label>
            </div>
        )   
    }
}
function W7() { 
    const w7 = getW7();
    if (w7 === 'Pass') {    
        return (
            <div>
            <label><input type="radio" id="w7T" name="w7" value="true" checked={true} onChange={handleW7}/>PASS</label>
            <label><input type="radio" id="w7F" name="w7" value="false" onChange={handleW7}/>FAILED</label>
            </div>
        )
    } else if (w7 === 'Fail') { 
        return (
            <div>
            <label><input type="radio" id="w7T" name="w7" value="true" onChange={handleW7}/>PASS</label>
            <label><input type="radio" id="w7F" name="w7" value="false" checked={true} onChange={handleW7}/>FAILED</label>
            </div>
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w7T" name="w7" value="true" onChange={handleW7}/>PASS</label>
            <label><input type="radio" id="w7F" name="w7" value="false" onChange={handleW7}/>FAILED</label>
            </div>
        )

    }
}
function W8() { 
    const w8 = getW8();
    if (w8 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w8T" name="w8" value="true" checked={true} onChange={handleW8}/>PASS</label> 
            <label><input type="radio" id="w8F" name="w8" value="false" onChange={handleW8}/>FAILED</label>
            </div>
        )   
    } else if (w8 === 'Fail') {
        return (
            <div>
            <label><input type="radio" id="w8T" name="w8" value="true" onChange={handleW8}/>PASS</label>
            <label><input type="radio" id="w8F" name="w8" value="false" checked={true} onChange={handleW8}/>FAILED</label>
            </div>
        )
    } else {
        return (
            <div>
            <label><input type="radio" id="w8T" name="w8" value="true" onChange={handleW8}/>PASS</label>    

            <label><input type="radio" id="w8F" name="w8" value="false" onChange={handleW8}/>FAILED</label>
            </div>
        )
    }
}
function W9() {
    const w9 = getW9();
    if (w9 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w9T" name="w9"  value="Pass" checked={true} onChange={handleW9}/>PASS</label>
            <label><input type="radio" id="w9F" name="w9"  value="Fail" onChange={handleW9}/>FAILED</label>
            </div>        
        )   
    } else if (w9 === 'Fail') { 
    return (    
            <div>
            <label><input type="radio" id="w9T" name="w9" value="Pass" onChange={handleW9}/>PASS</label>
            <label><input type="radio" id="w9F" name="w9"  value="Fail" checked={true} onChange={handleW9}/>FAILED</label>
            </div>        

    )
}   else {
        return (    
            <div>
            <label><input type="radio" id="w9T" name="w9" value="Pass" onChange={handleW9}/>PASS</label>
            <label><input type="radio" id="w9F" name="w9" value="Fail" onChange={handleW9}/>FAILED</label>
            </div>        
        )
    }   
}   
function W10() {
    const w10 = getW10();
    if (w10 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w10T" name="w10" value="true" checked={true} onChange={handleW10}/>PASS</label>
            <label><input type="radio" id="w10F" name="w10" value="false" onChange={handleW10}/>FAILED</label>
            </div>        
        )   
    } else if (w10 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w10T" name="w10" value="true" onChange={handleW10}/>PASS</label>
            <label><input type="radio" id="w10F" name="w10" value="false" checked={true} onChange={handleW10}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w10T" name="w10" value="true" onChange={handleW10}/>PASS</label>
            <label><input type="radio" id="w10F" name="w10" value="false" onChange={handleW10}/>FAILED</label>
            </div>        
        )
    }   
}   
function W11() {
    const w11 = getW11();
    if (w11 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w11T" name="w11" value="true" checked={true} onChange={handleW11}/>PASS</label>
            <label><input type="radio" id="w11F" name="w11" value="false" onChange={handleW11}/>FAILED</label>
            </div>        
        )   
    } else if (w11 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w11T" name="w11" value="true" onChange={handleW11}/>PASS</label>
            <label><input type="radio" id="w11F" name="w11" value="false" checked={true} onChange={handleW11}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w11T" name="w11" value="true" onChange={handleW11}/>PASS</label>
            <label><input type="radio" id="w11F" name="w11" value="false" onChange={handleW11}/>FAILED</label>
            </div>        
        )
    }   
}   
function W12() {
    const w12 = getW12();
    if (w12 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w12T" name="w12" value="true" checked={true} onChange={handleW12}/>PASS</label>
            <label><input type="radio" id="w12F" name="w12" value="false" onChange={handleW12}/>FAILED</label>
            </div>        
        )   
    } else if (w12 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w12T" name="w12" value="true" onChange={handleW12}/>PASS</label>
            <label><input type="radio" id="w12F" name="w12" value="false" checked={true} onChange={handleW12}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w12T" name="w12" value="true" onChange={handleW12}/>PASS</label>
            <label><input type="radio" id="w12F" name="w12" value="false" onChange={handleW12}/>FAILED</label>
            </div>
        )        
    }   
}   
function W13() {
    const w13 = getW13();
    if (w13 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w13T" name="w13" value="true" checked={true} onChange={handleW13}/>PASS</label>
            <label><input type="radio" id="w13F" name="w13" value="false" onChange={handleW13}/>FAILED</label>
            </div>        
        )   
    } else if (w13 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w13T" name="w13" value="true" onChange={handleW13}/>PASS</label>
            <label><input type="radio" id="w13F" name="w13" value="false" checked={true} onChange={handleW13}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w13T" name="w13" value="true" onChange={handleW13}/>PASS</label>
            <label><input type="radio" id="w13F" name="w13" value="false" onChange={handleW13}/>FAILED</label>
            </div>        
        )
    }   
}   
function W14() {
    const w14 = getW14();
    if (w14 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w14T" name="w14" value="true" checked={true} onChange={handleW14}/>PASS</label>  
            <label><input type="radio" id="w14F" name="w14" value="false" onChange={handleW14}/>FAILED</label>
            </div>        
        )   
    } else if (w14 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w14T" name="w14" value="true" onChange={handleW14}/>PASS</label>  
            <label><input type="radio" id="w14F" name="w14" value="false" checked={true} onChange={handleW14}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w14T" name="w14" value="true" onChange={handleW14}/>PASS</label>  
            <label><input type="radio" id="w14F" name="w14" value="false" onChange={handleW14}/>FAILED</label>
            </div>        
        )
    }   
}   
function W15() {
    const w15 = getW15();
    if (w15 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w15T" name="w15" value="true" checked={true} onChange={handleW15}/>PASS</label>
            <label><input type="radio" id="w15F" name="w15" value="false" onChange={handleW15}/>FAILED</label>
            </div>        
        )   
    } else if (w15 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w15T" name="w15" value="true" onChange={handleW15}/>PASS</label>
            <label><input type="radio" id="w15F" name="w15" value="false" checked={true} onChange={handleW15}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w15T" name="w15" value="true" onChange={handleW15}/>PASS</label>
            <label><input type="radio" id="w15F" name="w15" value="false" onChange={handleW15}/>FAILED</label>
            </div>        
        )
    }   
}   
function W16() {
    const w16 = getW16();
    if (w16 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w16T" name="w16" value="true" checked={true} onChange={handleW16}/>PASS</label>  
            <label><input type="radio" id="w16F" name="w16" value="false" onChange={handleW16}/>FAILED</label>
            </div>        
        )   
    } else if (w16 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w16T" name="w16" value="true" onChange={handleW16}/>PASS</label>  
            <label><input type="radio" id="w16F" name="w16" value="false" checked={true} onChange={handleW16}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w16T" name="w16" value="true" onChange={handleW16}/>PASS</label>  
            <label><input type="radio" id="w16F" name="w16" value="false" onChange={handleW16}/>FAILED</label>
            </div>        
        )
    }   
}   
function W17() {
    const w17 = getW17();
    if (w17 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w17T" name="w17" value="true" checked={true} onChange={handleW17}/>PASS</label>
            <label><input type="radio" id="w17F" name="w17" value="false" onChange={handleW17}/>FAILED</label>
            </div>        
        )   
    } else if (w17 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w17T" name="w17" value="true" onChange={handleW17}/>PASS</label>
            <label><input type="radio" id="w17F" name="w17" value="false" checked={true} onChange={handleW17}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w17T" name="w17" value="true" onChange={handleW17}/>PASS</label>
            <label><input type="radio" id="w17F" name="w17" value="false" onChange={handleW17}/>FAILED</label>
            </div>        
        )
    }   
}   
function W18() {
    const w18 = getW18();
    if (w18 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w18T" name="w18" value="true" checked={true} onChange={handleW18}/>PASS</label>
            <label><input type="radio" id="w18F" name="w18" value="false" onChange={handleW18}/>FAILED</label>
            </div>        
        )   
    } else if (w18 === 'Fail') { 
        return (    
            <div>
            <label><input type="radio" id="w18T" name="w18" value="true" onChange={handleW18}/>PASS</label>
            <label><input type="radio" id="w18F" name="w18" value="false" checked={true} onChange={handleW18}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w18T" name="w18" value="true" onChange={handleW18}/>PASS</label>
            <label><input type="radio" id="w18F" name="w18" value="false" onChange={handleW18}/>FAILED</label>
            </div>        
        )
    }   
}   
function W19() {
    const w19 = getW19();
    if (w19 === 'Pass') {
        return (
            <div>
            <label><input type="radio" id="w19T" name="w19" value="true" checked={true} onChange={handleW19}/>PASS</label>  
            <label><input type="radio" id="w19F" name="w19" value="false" onChange={handleW19}/>FAILED</label>
            </div>        
        )   
    } else if (w19 === 'Fail') { 
        return (
            <div>
            <label><input type="radio" id="w19T" name="w19" value="true" onChange={handleW19}/>PASS</label>  
            <label><input type="radio" id="w19F" name="w19" value="false" checked={true} onChange={handleW19}/>FAILED</label>
            </div>        
        )
    } else {    
        return (
            <div>
            <label><input type="radio" id="w19T" name="w19" value="true" onChange={handleW19}/>PASS</label>  
            <label><input type="radio" id="w19F" name="w19" value="false" onChange={handleW19}/>FAILED</label>
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
function handleW1(event) {
    setW1(convertValue(event.target.value));
    console.log('W1:', event.target.value);
}
function handleW2(event) {
    setW2(convertValue(event.target.value));
    console.log('W2:', event.target.value);
}
function handleW3(event) {
    setW3(convertValue(event.target.value));
    console.log('W3:', event.target.value);
}
function handleW4(event) {
    setW4(convertValue(event.target.value));
    console.log('W4:', event.target.value);
}
function handleW5(event) {
    setW5(convertValue(event.target.value));
    console.log('W5:', event.target.value);
}
function handleW6(event) {
    setW6(convertValue(event.target.value));
    console.log('W6:', event.target.value);
}
function handleW7(event) {      
    setW7(convertValue(event.target.value));
    console.log('W7:', event.target.value);
}
function handleW8(event) {
    setW8(convertValue(event.target.value));
    console.log('W8:', event.target.value);
}
function handleW9(event) {
    setW9(event.target.value);
    console.log('W9:', event.target.value);
}
function handleW10(event) {
    setW10(convertValue(event.target.value));
    console.log('W10:', event.target.value);
}
function handleW11(event) {
    setW11(convertValue(event.target.value));
    console.log('W11:', event.target.value);
}
function handleW12(event) {
    setW12(convertValue(event.target.value));             
    console.log('W12:', event.target.value);
}
function handleW13(event) {
    setW13(convertValue(event.target.value));
    console.log('W13:', event.target.value);
}
function handleW14(event) {
    setW14(convertValue(event.target.value));
    console.log('W14:', event.target.value);
}
function handleW15(event) {
    setW15(convertValue(event.target.value));
    console.log('W15:', event.target.value);
}           
function handleW16(event) {
    setW16(convertValue(event.target.value));
    console.log('W16:', event.target.value);
}
function handleW17(event) {
    setW17(convertValue(event.target.value));
    console.log('W17:', event.target.value);
}
function handleW18(event) {
    setW18(convertValue(event.target.value));
    console.log('W18:', event.target.value);
}
function handleW19(event) {
    setW19(convertValue(event.target.value));
    console.log('W19:', event.target.value);
}    
return (
    <div className="App-page"><h1>Mandatory Wheelchair Requirements Page</h1><table>
        <thead>
            <tr>
                <td>W1</td>
                <W1/>
                <td>Wheelchair Lift Normal/Manual Operation</td>
                <td>W11</td>
                <W11/>
                <td>Door Weather Stripping</td>
            </tr>
            <tr>
                <td>W2</td>
                <W2/>
                <td>Lift Platform (30" x 48") </td>
                <td>W12</td>
                <W12/>  
                <td>Minimum 56” Interior Headroom</td>
            </tr>
            <tr>
                <td>W3</td>
                <W3/>
                <td>Platform Barriers (1 1/2") </td>
                <td>W13</td>
                <W13/>
                <td>Lift Controls (interior and secure)</td>
            </tr>
            <tr>
                <td>W4</td>
                <W4/>
                <td>Lift Handrails(s)</td>
                <td>W14</td>
                <W14/>
                <td>Shoulder Restraint Belt</td>
            </tr>
            <tr>
                <td>W5</td>
                <W5/>
                <td>Lift Platform Loading Barrier</td>
                <td>W15</td>
                <W15/>
                <td>Lap Restraint Belt</td>
            </tr>
            <tr>
                <td>W6</td>
                <W6/>
                <td>Lift Door Height (&lt;22' = 56" / &gt;22' = 68")</td>
                <td>W16</td>
                <W16/>
                <td>Reflective Tape on Lift</td>
            </tr>
            <tr>
                <td>W7</td>
                <W7/>
                <td>Lift Door Height (&lt;22' = 56" / &gt;22' = 68")</td>
                <td>W17</td>
                <W17/>
                <td>Lift Lock in Upright Position</td>
            </tr>
            <tr>
                <td>W8</td>
                <W8/>
                <td>Metal Mesh/Non-skid Plate</td>
                <td>W18</td>
                <W18/>
                <td>Parking Brake and Engine Interlock</td>
            </tr>
            <tr>
                <td>W9</td>
                <W9/>
                <td>Reflective Tape on Lift</td>
                <td>W19</td>
                <W19/>
                <td>Emergency Manual Lift</td>
            </tr>
            <tr>
                <td>W10</td>
                <W10/>
                <td>Convex Mirror</td>
            </tr>
        </thead>
    </table></div>
);
}
