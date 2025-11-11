import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GeneralCondition from './pages/GeneralCondition';
import Results from './pages/Results';
import Provider from './pages/Provider';
import MandatorySafetyRequirements from './pages/MandatorySafetyRequires';
import MandatoryWheelchairRequirements from './pages/MandatoryWheelchairRequirements';
import GenerateVehiclePDF from './pages/GenerateVehiclePDF';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
 
  const navigate = useNavigate();
  const handleProviderClick = () => {   
    console.log('Provider button clicked');
    navigate('/provider');
  };
  const handleGeneralConditionClick = () => {
    console.log('General Condition button clicked');
    navigate('/general-condition');
  };
  const handleResultsClick = () => {
    console.log('Results button clicked');
    navigate('/results');
  };
  const handleMandatorySafetyRequirementsClick = () => {
    console.log('Mandatory Safety Requirements button clicked');
    navigate('/mandatory-safety-requirements');
  };
  const handleMandatoryWheelchairRequirementsClick = () => {
    console.log('Mandatory Wheelchair Requirements button clicked');
    navigate('/mandatory-wheelchair-requirements');
  };  
  const handleGeneratePdf = async () => {
    console.log('Generate PDF button clicked');
    //await handleVehicleService()
    navigate('/generate-pdf');
  };


  return (
    <div className="App">
      <header className="App-header">
      <h1>Vehicle Inspection Checklist</h1>
      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={handleProviderClick}>Provider</button>
        <button onClick={handleMandatorySafetyRequirementsClick}>Mandatory Saftety Requirements</button>
        <button onClick={handleMandatoryWheelchairRequirementsClick}>Mandatory Wheelchair Requirements</button>
        <button onClick={handleGeneralConditionClick}>General Condition</button>
        <button onClick={handleResultsClick}>Results</button>
      </div>
      <br />
      <div><button onClick={handleGeneratePdf}>Generate PDF</button>
      </div>

      </header>
      <br />

      <div className="App-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general-condition" element={<GeneralCondition />} />
          <Route path="/results" element={<Results />} />
          <Route path="/provider" element={<Provider />} />
          <Route path="/mandatory-safety-requirements" element={<MandatorySafetyRequirements />} />
          <Route path="/mandatory-wheelchair-requirements" element={<MandatoryWheelchairRequirements />} />
          <Route path="/generate-pdf" element={<GenerateVehiclePDF/>} />
        </Routes>   
        </div>
      <footer className="App-footer">  
        <table><tbody><tr>
        <td align="left">© 2025 Vehicle Inspection Checklist</td><td align="right">Created by Tom Erickson of <a href="internetsoftwareworks.com">Internet Software Works</a></td>
     </tr><tr>
        <td align="left">Version 1.0.0 Licensed under <a href="https://www.apache.org/licenses/LICENSE-2.0.txt">Apache License 2.0</a></td>
     </tr>
     </tbody></table>
     </footer>
     </div>
  );
};

export default App;
