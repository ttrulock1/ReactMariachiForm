import { useState } from "react";
import ChoiceInput from "../components/ChoiceInput";
import PagedForm from "../components/PagedForm";
import TextInput from "../components/TextInput";

export default function groupQuestions(){
    const [director, setDirector] = useState("");
    const [showcase, setShowcase] = useState("");
    const [garibaldi, setGaribaldi] = useState("");

    const [directorFirstName, setDirectorFirstName] = useState("");
    const [directorLastName, setDirectorLastName] = useState("");

    const [directorAddress, setDirectorAddress]= useState("");
    const [directorCity, setDirectorCity] = useState("");
    const [directorStates, setDirectorStates] = useState("");
    const [directorZipCode, setDirectorZipCode] = useState("");

    const [directorDaytimePhone, setDirectorDaytimePhone]= useState("");
    const [directorCellPhone, setDirectorCellPhone] = useState("");
    const [directorEmail, setDirectorEmail]= useState("");
    const [alternateContactFirsttName, setAlternateContactFirstName] = useState("");
    const [alternateContactLastName, setAlternateContactLastName] = useState("");
    const [alternateContactAddress, setAlternateContactAddress]= useState("");
    const [alternateContactCity, setAlternateContactCity] = useState("");
    const [alternateContactStates, setAlternateContactStates] = useState("");
    const [alternateContactZipCode, setAlternateContactZipCode] = useState("");
const [alternateContactFirsttName, setAlternateContactFirstName] = useState("");
    const [alternateContactLastName, setAlternateContactLastName] = useState("");
    const [alternateContactDaytimePhone, setAlternateContactDaytimePhone]= useState("");
    const [alternateContactCellPhone, setAlternateContactCellPhone]= useState("");
    const [alternateContactEmail, setAlternateContactEmail]= useState("");



    const questions= [{
        elements:[
            <ChoiceInput
                label="Would your group like to preform in the Showcase"
                value={showcase}
                options={[
                "Yes",
                "No"
                ]}
                onChange={setShowcase}    
            />,
            <ChoiceInput
                label="Would your group like to preform in the Garibaldi Show"
                value={garibaldi}
                options={[
                "Yes",
                "No"
                ]}
                onChange={setGaribaldi}    
            />,        
            <ChoiceInput
                label="Are you the registering as a Director?"
                value={director}
                options={[
                "Yes",
                "No"
                ]}
                onChange={setDirector}    
            />,
            <TextInput
                label="Director's first name."
                value={directorFirstName}
                onChange={setDirectorFirstName}    
            />, 
            <TextInput
                label="Director's last name."
                value={directorLastName}
                onChange={setDirectorLastName}    
            />, 
            <TextInput
                label="What is the Director's address"
                value={directorAddress}
                onChange={setDirectorAddress}
            />,
            <TextInput
                label="Please enter Director City"
                value={directorCity}
                onChange={setDirectorCity}
            />,       
            // i made states plural here; is this stupid?
            <TextInput
                label="state"
                value={directorStates}
                onChange={setDirectorStates}
            />,
            <TextInput
                label="Zip Code"
                value={directorZipCode}
                onChange={setDirectorZipCode}
            />,
            <TextInput
                label="Director Cell Phone Number"
                value={directorDaytimePhone}
                onChange={setDirectorDaytimePhone}
            />,
            <TextInput
                label="Director Cell Phone Number"
                value={directorCellPhone}
                onChange={setDirectorCellPhone}
            />,
            <TextInput
                label="Director Main Phone Number"
                value={DirectorDaytimelPhone}
                onChange={setDirectorDaytimePhone}
            />,
            <TextInput
                label="Director Email"
                value={directorEmail}
                onChange={setDirectorEmail}
            />,




            <TextInput
                label="Alternate Contact's first name."
                value={alternateContactFirsttName}
                onChange={setAlternateContactFirstName}    
            />, 
            <TextInput
                label="Alternate's last name."
                value={alternateContactLastName}
                onChange={setAlternateContactLastName}    
            />, 
            <TextInput
                label="What is the the Alternate Contact's address"
                value={alternateContactAddress}
                onChange={setAlternateContactAddress}
            />,
            <TextInput
                label="Please enter Alternate Contacts City"
                value={alternateContactCity}
                onChange={setAlternateContactCity}
            />,       
            // i made states plural here; is this stupid?
            <TextInput
                label="Please Input Alternate State"
                value={alternateContactStates}
                onChange={setAlternateContactStates}
            />,
            <TextInput
                label="Please Input ALternate  Zip Code"
                value={alternateContactZipCode}
                onChange={setAlternateContactZipCode}
            />,
            <TextInput
                label="Please Enter Alternate Contact Cell Phone Number"
                value={alternateContactCellPhone}
                onChange={setAlternateContactCellPhone}
            />,
            <TextInput
                label="Please Enter Alternate Contact Main Phone Number"
                value={alternateContactDaytimePhone}
                onChange={setAlternateContactDaytimePhone}
            />,
            <TextInput
                label="Please Enter Alternate Contacts Email"
                value={alternateContactEmail}
                onChange={setAlternateContactEmail}
            />,
                ],
            validate: () => true
    }
    ]
}