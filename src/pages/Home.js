import '../App.css';
export default function Home() {
return (
    <div className="App-page">
    <h2>Welcome to the Vehicle Inspection App</h2>
    <br/>
    <b>Disclaimer</b> 
    <p>
    This application is intended for use as a vehicle inspection and documentation tool to support Non-Emergency Medical Transportation (NEMT) operations. It is designed to help drivers and operators record vehicle inspection results and generate digital reports.
    </p>
    <p>This app does not replace any federal, state, or local safety regulations, and completion of an inspection within this application does not guarantee vehicle safety or compliance with Department of Transportation (DOT), state NEMT program requirements, or other regulatory standards. Users are solely responsible for ensuring that vehicles meet all applicable laws, licensing, and inspection requirements.
    </p>
    <p> 
    By using this application, you acknowledge that all inspection results are self-reported and that the application’s creators and providers are not liable for any errors, omissions, or consequences resulting from its use.
    </p>
    <br/>
    <h2>How This App Works</h2>
    <br/>
    <p>
    This app provides a simple, step-by-step process for conducting vehicle inspections and generating reports:
    </p>
    <br/>
    Step 1: Select or click on the Provder button.
    <br/>
    Step 2: Complete the required information about the vehicle and inspection details.
    <br/>
    Step 3: Click and complete the information in the Mandatory Saftety, Mandatory Wheelchair and General Conditon buttons.
    <br/>
    Step 4: Click and complete the results of inspection button.
    <br/>
    Step 5: Click the Generate PDF button this will create a PDF of the inspection report.
    <br/>
    <p>
    This tool provides an organized, digital record of vehicle inspections to improve accountability, streamline reporting, and support NEMT providers in delivering safe and reliable transportation services.
    </p>
    <br/>
    <p>This app is provided "as is" without any warranties, express or implied. Use at your own risk.</p>
    <br/>
    <p>For questions or support, please contact the app developer.</p>
    </div>
);
}

