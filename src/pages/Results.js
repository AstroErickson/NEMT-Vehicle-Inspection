import React from 'react';
import { useState, useRef } from 'react';
import { setInspectionResult, setInspectionPictures, setNoPicturesReason, setProviderSignature, setSignatureDate, setTransdevSignature, setTransdevSignatureDate, setReinspectionDate } from '../data/resultsData'; // Assuming you have a data file for results information
import { getInspectionResult, getInspectionPictures, getNoPicturesReason, getProviderSignature, getSignatureDate, getTransdevSignature, getTransdevSignatureDate, getReinspectionDate } from '../data/resultsData'; // Assuming you have a data file for results information
import { setProviderSignatureUrl, setTransdevSignatureUrl } from '../data/resultsData';
import SignatureCanvas from "react-signature-canvas";
import '../App.css';

export default function Results() {
    const [providerSignature, setProviderSignatureState] = useState(getProviderSignature());
    const [transdevSign, setTransdevSign] = useState(getTransdevSignature());
    const [prosigndate, setProsigndate] = useState(getSignatureDate());
    const [transdevsigndate, setTransdevsigndate] = useState(getTransdevSignatureDate());
    const [nopicreason, setNopicreason] = useState(getNoPicturesReason());
    const sigCanvas = useRef(null);
    const sigCanvas2 = useRef(null);
    const [signature, setSignature] = useState(null);
    const [signature2, setSignature2] = useState(null);

    const clear = () => sigCanvas.current.clear();
    const clear2 = () => sigCanvas2.current.clear();
    const saveSignature = () => setSignature(sigCanvas.current.toDataURL());
    const saveSignature2 = () => setSignature2(sigCanvas2.current.toDataURL());


    function Pictures() {
        const pics = getInspectionPictures();
        if (pics === 'exterior') {
            return (
                <div>
                    <label><input type="radio" name="pics" value="exterior" checked={true} onChange={handleInspectionPictures} />Exterior</label>
                    <br />
                    <label><input type="radio" name="pics" value="interior" onChange={handleInspectionPictures} />Interior</label>
                </div>
            )
        } else if (pics === 'interior') {
            return (
                <div>
                    <label><input type="radio" name="pics" value="exterior" onChange={handleInspectionPictures} />Exterior</label>
                    <br />
                    <label><input type="radio" name="pics" value="interior" checked={true} onChange={handleInspectionPictures} />Interior</label>
                </div>
            )
        } else {
            return (
                <div>
                    <label><input type="radio" name="pics" value="exterior" onChange={handleInspectionPictures} />Exterior</label>
                    <br />
                    <label><input type="radio" name="pics" value="interior" onChange={handleInspectionPictures} />Interior</label>
                </div>
            )
        }
    }
    function InspectionResults() {
        const result = getInspectionResult();
        if (result === 'pass') {
            return (
                <div>
                    <label><input type="radio" name="inspection" value="pass" checked={true} onChange={handleInspectionResult} />Pass</label>
                    <br />
                    <label><input type="radio" name="inspection" value="provisional" onChange={handleInspectionResult} />Provisional</label> <input type="date" id="reinspectondate" name="reinspectondate" value={getReinspectionDate()} onChange={handleReinspectionDate} />
                    <br />
                    <label><input type="radio" name="inspection" value="fail" onChange={handleInspectionResult} />Fail</label>
                </div>
            )
        } else if (result === 'provisional') {
            return (
                <div>
                    <label><input type="radio" name="inspection" value="pass" onChange={handleInspectionResult} />Pass</label>
                    <br />
                    <label><input type="radio" name="inspection" value="provisional" checked={true} onChange={handleInspectionResult} />Provisional</label> <input type="date" id="reinspectondate" name="reinspectondate" value={getReinspectionDate()} onChange={handleReinspectionDate} />
                    <br />
                    <label><input type="radio" name="inspection" value="fail" onChange={handleInspectionResult} />Fail</label>
                </div>
            );
        } else if (result === 'fail') {
            return (
                <div>
                    <label><input type="radio" name="inspection" value="pass" onChange={handleInspectionResult} />Pass</label>
                    <br />
                    <label><input type="radio" name="inspection" value="provisional" onChange={handleInspectionResult} />Provisional</label> <input type="date" id="reinspectondate" name="reinspectondate" value={getReinspectionDate()} onChange={handleReinspectionDate} />
                    <br />
                    <label><input type="radio" name="inspection" value="fail" checked={true} onChange={handleInspectionResult} />Fail</label>
                </div>)
        } else {
            return (
                <div>
                    <label><input type="radio" name="inspection" value="pass" onChange={handleInspectionResult} />Pass</label>
                    <br />
                    <label><input type="radio" name="inspection" value="provisional" onChange={handleInspectionResult} />Provisional</label> <input type="date" id="reinspectondate" name="reinspectondate" value={getReinspectionDate()} onChange={handleReinspectionDate} />
                    <br />
                    <label><input type="radio" name="inspection" value="fail" onChange={handleInspectionResult} />Fail</label>
                </div>
            )
        }
    }
    const handleSaveSignature = () => {
        console.log('Saving signature 1', sigCanvas.current.toDataURL());
        setSignature(sigCanvas.current.toDataURL());
        setProviderSignatureUrl(sigCanvas.current.toDataURL());
    }
    const handleSaveSignature2 = () => {
        console.log('Saving signature 2', sigCanvas2.current.toDataURL());
        setSignature2(sigCanvas2.current.toDataURL());
        setTransdevSignatureUrl(sigCanvas2.current.toDataURL());
    }

    function handleReinspectionDate(event) {
        setReinspectionDate(event.target.value);
        console.log('Reinspection Date:', event.target.value);
    }
    function handleInspectionResult(event) {
        setInspectionResult(event.target.value);
        console.log('Inspection Result:', event.target.value);
    }
    function handleInspectionPictures(event) {
        setInspectionPictures(event.target.value);
        console.log('Inspection Pictures:', event.target.value);
    }
    function handleNoPicturesReason(event) {
        setNoPicturesReason(event.target.value);
        setNopicreason(event.target.value);
        console.log('No Pictures Reason:', event.target.value);
    }
    function handleProviderSignature(event) {
        setProviderSignature(event.target.value);
        setProviderSignatureState(event.target.value);
        console.log('Provider Signature:', event.target.value);
    }
    function handleSignatureDate(event) {
        setSignatureDate(event.target.value);
        setProsigndate(event.target.value);
        console.log('Signature Date:', event.target.value);
    }
    function handleTransdevSignature(event) {
        setTransdevSignature(event.target.value);
        setTransdevSign(event.target.value);
        console.log('Transdev Signature:', event.target.value);
    }
    function handleTransdevSignatureDate(event) {
        setTransdevSignatureDate(event.target.value);
        setTransdevsigndate(event.target.value);
        console.log('Transdev Signature Date:', event.target.value);
    }
    const alignLeft = {
        textAlign: 'left'
    };
    const alignRight = {
        textAlign: 'right'
    };
    return (
        <div className='App-page'><h1>Results Page</h1><br /><h2>Vehicle will be removed from service for any violations and must remain out of service until it passes reinspection</h2><table>
            <thead>
                <tr><td>Inspection results</td><td>Pictures</td></tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <InspectionResults />
                    </td>
                    <td>
                        <Pictures />
                    </td>
                    <td>
                        No Pictures (state reason)<input type="text" name="nopicsreasoninput" value={getNoPicturesReason()} onChange={handleNoPicturesReason} />
                    </td>
                </tr>
                <tr>
                    <td><input type="text" name="providersignature" value={getProviderSignature()} onChange={handleProviderSignature} /></td>
                    <td><input type="date" name="signaturedate" value={getSignatureDate()} onChange={handleSignatureDate} /></td>
                    <td><input type="text" name="transdevsignature" value={getTransdevSignature()} onChange={handleTransdevSignature} /></td>
                    <td><input type="date" name="transdevsignaturedate" value={getTransdevSignatureDate()} onChange={handleTransdevSignatureDate} /></td>
                </tr>
                <tr>
                    <td>Providers Signature Name</td>
                    <td>Signature Date</td>
                    <td>Transdev Signature Name</td>
                    <td>Transdev Signature Date</td>
                </tr>
                <tr>
                    <td>
                            {/* Provider Signature (Left)*/}
                            <div style={{ float:'left'  }}>
                                <h3>Sign Below:</h3>
                                <SignatureCanvas
                                    ref={sigCanvas}
                                    penColor="black"
                                    canvasProps={{
                                        width: 400,
                                        height: 150,
                                        className: "sigCanvas",
                                        style: { border: "2px solid black", borderRadius: "4px" },
                                    }}
                                />
                                <div>
                                    <button onClick={clear}>Clear</button>
                                    <button onClick={handleSaveSignature}>Save Signature</button>
                                </div>
                            </div>
                       
                    </td>
                    <td>
                        {/* Transdev Signature (Right)*/}
                        <div style={{ float: 'right'  }}>
                            <h3>Sign Below:</h3>
                            <SignatureCanvas
                                ref={sigCanvas2}
                                penColor="black"
                                canvasProps={{
                                    width: 400,
                                    height: 150,
                                    className: "sigCanvas",
                                    style: { border: "2px solid black", borderRadius: "4px" },
                                }}
                            />
                            <div>
                                <button onClick={clear2}>Clear</button>
                                <button onClick={handleSaveSignature2}>Save Signature</button>
                            </div>
                        </div>
                  
                </td>
            </tr>
        </tbody>
        </table></div >
    );
}
