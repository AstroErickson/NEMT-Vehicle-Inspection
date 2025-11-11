import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { getInspectionType, getMake, getMileage, getProviderName, getComplaintNumber, getProviderRepresentative, getVehicleLicensePlate, getVehicleNumber, getVehicleType, getVin, getYear, getModel } from '../data/providerData'; // Assuming you have a data file for provider information
import { getInspectionResult, getInspectionPictures, getNoPicturesReason, getProviderSignature, getSignatureDate, getTransdevSignature, getTransdevSignatureDate, getReinspectionDate, getProviderSignatureUrl, getTransdevSignatureUrl } from '../data/resultsData'; // Assuming you have a data file for results information    
import { getC1, getC2, getC3, getC4, getC5, getC6, getC7, getC8, getC9, getC10, getC11, getC12, getC13, getC14 } from '../data/generalConditionData'; // Assuming you have a data file for general condition information    
import { getRegistration, getInsurance, getState } from '../data/mandatorySafetyData'; // Assuming you have a data file for mandatory safety information    
import { getS1, getS2, getS3, getS4, getS5, getS6, getS7, getS8, getS9, getS10, getS11, getS12, getS13, getS14 } from '../data/mandatorySafetyData'; // Assuming you have a data file for mandatory safety information  
import { getW1, getW2, getW3, getW4, getW5, getW6, getW7, getW8, getW9, getW10, getW11, getW12, getW13, getW14, getW15, getW16, getW17, getW18, getW19 } from '../data/mandatoryWheelchairData'; // Assuming you have a data file for wheelchair information
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';


const createTableRow = (value) => {
  let tableColStyle = {
    width: "100%",
  };

  return (
    <View style={tableRowStyle} fixed>
      <View style={tableColStyle}>
        <Text style={tableCellStyle}>{value}</Text>
      </View>
    </View>
  );
};
const pageStyle = {
  paddingTop: 16,
  paddingHorizontal: 40,
  paddingBottom: 56,
};
const tableRowStyle = {
  flexDirection: "row",
};
const tableCellStyle = {
  textAlign: "center",
  margin: 5,
  fontSize: 10,
};
const styles = StyleSheet.create({
  page: {
    paddingTop: 16,
    paddingHorizontal: 40,
    paddingBottom: 56,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  leftText: { textAlign: "left" },
  rightText: { textAlign: "right" },
});
const saveFile = () => {
  // This does the trick!
  pdf(<VehicleDocument />)
    .toBlob()
    .then((blob) => saveAs(blob, "VehcileDocument.pdf"));
};

const ProviderSignature = ({ signature }) => (
  <Image
    src={signature}
    style={{ width: 200, height: 50, border: '1px solid black', marginTop: 5 }}
  />
);

const TransdevSignature = ({ signature }) => (
  <Image
    src={signature}
    style={{ width: 200, height: 50, border: '1px solid black', marginTop: 5 }}
  />
);

// Removed TypeScript interface declaration as it's not valid in JavaScript
const VehicleDocument = () => {
  const signatureCellStyleLeft = {
    textAlign: "left",
    margin: 5,
    fontSize: 10,
  };
    const signatureCellStyleRight = {
    textAlign: "right",
    margin: 5,
    fontSize: 10,
  };

  return (
    <Document style={{ width: '100%', height: '500px', backgroundColor: '#61dafb', color: 'black' }}>
      <Page style={pageStyle}>
        <div className="min-h-screen bg-gray-50">
          {/* Menu Bar */}
          <div className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <div
              style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                padding: '4px',
              }}
            >

            </div>
          </div>
          <View style={styles.section}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>Vehicle Inspection Checklist</Text>
            <br />
            {createTableRow('Provider Name: ' + getProviderName() + '  Provider Representative: ' + getProviderRepresentative())}
            <br />
            {createTableRow('Complaint Number: ' + getComplaintNumber() + ' Inspection Date: ' + getReinspectionDate())}
            <br />
            {createTableRow('Inspection Type: ' + getInspectionType() + ' Vehicle Type: ' + getVehicleType())}
            <br />
            {createTableRow('Vehicle License Plate: ' + getVehicleLicensePlate() + ' VIN: ' + getVin() + ' Mileage: ' + getMileage())}
            <br />
            {createTableRow('Vehicle #: ' + getVehicleNumber() + 'Make: ' + getMake() + ' Model: ' + getModel() + ' Year: ' + getYear())}
            <br />
          </View>
          <View style={styles.section}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>Mandatory Safety Requirements</Text>
            <br />
            {createTableRow('S1: ' + getS1() + ' Mirrors (side, rearview, interior )' + ' S8: ' + getS8() + ' Horn (operational)')}
            <br />
            {createTableRow('S2: ' + getS2() + ' Windshield (free of obstruction) / Wipers ' + ' S9 : ' + getS9() + ' Windows (must be fully functional)')}
            <br />
            {createTableRow('S3: ' + getS3() + ' Tires (treads, lugs, inflation) ' + ' S10: ' + getS10() + ' Signage (Business name/Phone/PUC number both sides)')}
            <br />
            {createTableRow('S4: ' + getS4() + ' Lights (head, brake, turn signal, hazards)' + ' S11: ' + getS11() + ' Tire Tread (check all 4 tires)')}
            <br />
            {createTableRow('S5: ' + getS5() + ' Seat Belts for Each Passenger Extensions' + ' S12: ' + getS12() + ' Registration Exp Date: ' + getRegistration() + '')}
            <br />
            {createTableRow('S6: ' + getS6() + ' A/C & Heating' + ' S13: ' + getS13() + ' Insurance Exp Date: ' + getInsurance())}
            <br />
            {createTableRow('S7: ' + getS7() + ' Operational Radio/Phone/Tablet ' + ' S14: ' + getS14() + ' State Sticker Exp Date: ' + getState())}
            <br />
          </View>

          <View style={styles.section}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>Mandatory Wheelchair Requirements</Text>
            <br />
            {createTableRow('W1: ' + getW1() + ' Wheelchair Lift Normal/Manual Operation' + ' W11: ' + getW11() + ' Door Weather Stripping')}
            <br />
            {createTableRow('W2: ' + getW2() + ' Lift Platform (30" x 48") ' + ' W12: ' + getW12() + ' Minimum 56” Interior Headroom')}
            <br />
            {createTableRow('W3: ' + getW3() + ' Platform Barriers (1 1/2") ' + ' W13: ' + getW13() + ' Lift Controls (interior and secure)')}
            <br />
            {createTableRow('W4: ' + getW4() + ' Lift Handrails(s)' + ' W14: ' + getW14() + ' Shoulder Restraint Belt')}
            <br />
            {createTableRow('W5: ' + getW5() + ' Lift Platform Loading Barrier' + ' W15: ' + getW15() + 'Lap Restraint Belt')}
            <br />
            {createTableRow('W6: ' + getW6() + ' Lift Door Height (<22 = 56" / >22 = 68")' + ' W16: ' + getW16() + '4-Point Floor Securement Tie Down')}
            <br />
            {createTableRow('W7: ' + getW7() + ' Reflective Tape on Lift ' + ' W17: ' + getW17() + ' Lift Lock in Upright Position')}
            <br />
            {createTableRow('W8: ' + getW8() + ' Metal Mesh/Non-skid Plate' + ' W18: ' + getW18() + ' Parking Brake and Engine Interlock')}
            <br />
            {createTableRow('W9: ' + getW9() + ' Reflective Tape on Lift ' + ' W19: ' + getW19() + ' Emergency Manual Lift')}
            <br />
            {createTableRow('W10: ' + getW10() + ' Convex Mirror')}
            <br />
          </View>
          <View style={styles.section}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>General Condition:</Text>
            <br />
            {createTableRow('C1: ' + getC1() + ' Exterior Decals' + ' C8: ' + getC8() + ' Emergency Triangles/Flares/Reflectors')}
            <br />
            {createTableRow('C2: ' + getC2() + ' General Interior Cleanliness' + ' C9: ' + getC9() + ' First Aid Kit (check expiration)')}
            <br />
            {createTableRow('C3: ' + getC3() + ' General Exterior Cleanliness' + ' C10: ' + getC10() + ' Biohazard/COVID Kit')}
            <br />
            {createTableRow('C4: ' + getC4() + ' Upholstery/Flooring/Floor Space ' + ' C11: ' + getC11() + ' Flashlight')}
            <br />
            {createTableRow('C5: ' + getC5() + ' Walls and Windows' + ' C12: ' + getC12() + ' Fire Extinguisher')}
            <br />
            {createTableRow('C6: ' + getC6() + ' Overhead and Interior Lighting' + ' C13: ' + getC13() + ' Map or GPS')}
            <br />
            {createTableRow('C7: ' + getC7() + ' Smoking or Eating / Wear Seatbelts Signs' + ' C14: ' + getC14() + ' Incident Accident Form/Medical Waiver')}
            <br />
          </View>
          <View style={styles.section}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>Inspection Results:</Text>
            
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
            <Text>Results: {getInspectionResult()}</Text>
            <Text>Pictures: {getInspectionPictures()}</Text>
            <Text> None (state reason) {getNoPicturesReason()}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
            <Text style={signatureCellStyleLeft}>Provider Signature: {getProviderSignature()} Date: {getSignatureDate()}</Text>
            <Text style={signatureCellStyleRight}>Transdev Signature: {getTransdevSignature()} Date: {getTransdevSignatureDate()}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
            <Text style={ styles.leftText }>Providers Signature:</Text>
            <Text style={ styles.rightText }>Transdev's Signature:</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
            <ProviderSignature signature={getProviderSignatureUrl()} />
            <TransdevSignature signature={getTransdevSignatureUrl()} />
          </View>
        </div>
      </Page>
    </Document>
  );
};

const GenerateVehiclePDF = () => {
  const fileUrl = 'http://localhost:3000/sample.pdf';
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;


  const pageStyle = {
    paddingTop: 16,
    paddingHorizontal: 40,
    paddingBottom: 56,
  };
  const tableStyle = {
    display: "table",
    width: "auto",
  };
  return (
    <div>
      <PDFViewer>
        <VehicleDocument />
      </PDFViewer>

      <div>
        <button onClick={saveFile}>Save File</button>
      </div>
    </div>
  );

}

export default GenerateVehiclePDF;
