import { useCallback, useEffect, useMemo, useState } from "react";
import ChoiceInput from "../components/ChoiceInput";
import { Header, SubmitButton } from "../components/common";
import PagedForm from "../components/PagedForm";
import TextInput from "../components/TextInput";

export default function Questionaire({ data = {}, onSubmit }) {
  const [edits, setEdits] = useState({});

  const hasEdits = useMemo(() => {
    return !!Object.keys(edits).length;
  }, [edits]);

  function handleEdit(key, value) {
    setEdits((prevEdits) => ({ ...prevEdits, [key]: value }));
  }

  function handleParticipantEdit(index, key, value) {
    setEdits((prevEdits) => {
      const clonedEdits = JSON.parse(JSON.stringify(prevEdits));
      if (!clonedEdits.participants) {
        clonedEdits.participants = [];
      }
      if (clonedEdits.participants[index]) {
        clonedEdits.participants[index][key] = value;
      } else {
        clonedEdits.participants[index] = {
          [key]: value
        };
      }
      return clonedEdits;
    });
  }

  const getValue = useCallback(
    (index) => {
      if (edits[index] !== undefined) return edits[index];
      return data[index] || "";
    },
    [edits, data]
  );

  const groupQuestions = [
    <ChoiceInput
      label="Would your group like to preform in the Showcase"
      value={getValue("showcase")}
      options={["Yes", "No"]}
      onChange={(newValue) => handleEdit("showcase", newValue)}
    />,
    <ChoiceInput
      label="Would your group like to preform in the Garibaldi Show"
      value={getValue("garibaldi")}
      options={["Yes", "No"]}
      onChange={(newValue) => handleEdit("garibaldi", newValue)}
    />,
    <ChoiceInput
      label="Are you the registering as a Director?"
      value={getValue("director")}
      onChange={(newValue) => handleEdit("director", newValue)}
      options={["Yes", "No"]}
    />,
    <TextInput
      label="Director's first name."
      value={getValue("directorFirstName")}
      onChange={(newValue) => handleEdit("directorFirstName", newValue)}
    />,
    <TextInput
      label="Director's last name."
      value={getValue("directorLastName")}
      onChange={(newValue) => handleEdit("directorLastName", newValue)}
    />,
    <TextInput
      label="What is the Director's address"
      value={getValue("directorAddress")}
      onChange={(newValue) => handleEdit("directorAddress", newValue)}
    />,
    <TextInput
      label="Please enter Director City"
      value={getValue("directorCity")}
      onChange={(newValue) => handleEdit("directorCity", newValue)}
    />,
    // i made states plural here; is this stupid?
    <TextInput
      label="state"
      value={getValue("directorStates")}
      onChange={(newValue) => handleEdit("directorStates", newValue)}
    />,
    <TextInput
      label="Zip Code"
      value={getValue("directorZipCode")}
      onChange={(newValue) => handleEdit("directorZipCode", newValue)}
    />,
    <TextInput
      label="Director Cell Phone Number"
      value={getValue("directorDaytimePhone")}
      onChange={(newValue) => handleEdit("directorDaytimePhone", newValue)}
    />,
    <TextInput
      label="Director Cell Phone Number"
      value={getValue("directorCellPhone")}
      onChange={(newValue) => handleEdit("directorCellPhone", newValue)}
    />,
    <TextInput
      label="Director Main Phone Number"
      value={getValue("directorDaytimePhone")}
      onChange={(newValue) => handleEdit("directorDaytimePhone", newValue)}
    />,
    <TextInput
      label="Director Email"
      value={getValue("directorEmail")}
      onChange={(newValue) => handleEdit("directorEmail", newValue)}
    />,

    <TextInput
      label="Alternate Contact's first name."
      value={getValue("alternateContactFirstName")}
      onChange={(newValue) => handleEdit("alternateContactFirstName", newValue)}
    />,
    <TextInput
      label="Alternate's last name."
      value={getValue("alternateContactLastName")}
      onChange={(newValue) => handleEdit("alternateContactLastName", newValue)}
    />,
    <TextInput
      label="What is the the Alternate Contact's address"
      value={getValue("alternateContactAddress")}
      onChange={(newValue) => handleEdit("alternateContactAddress", newValue)}
    />,
    <TextInput
      label="Please enter Alternate Contacts City"
      value={getValue("alternateContactCity")}
      onChange={(newValue) => handleEdit("alternateContactCity", newValue)}
    />,
    // i made states plural here; is this stupid?
    <TextInput
      label="Please Input Alternate State"
      value={getValue("alternateContactStates")}
      onChange={(newValue) => handleEdit("alternateContactStates", newValue)}
    />,
    <TextInput
      label="Please Input ALternate  Zip Code"
      value={getValue("alternateContactZipCode")}
      onChange={(newValue) => handleEdit("alternateContactZipCode", newValue)}
    />,
    <TextInput
      label="Please Enter Alternate Contact Cell Phone Number"
      value={getValue("alternateContactCellPhone")}
      onChange={(newValue) => handleEdit("alternateContactCellPhone", newValue)}
    />,
    <TextInput
      label="Please Enter Alternate Contact Main Phone Number"
      value={
        edits.alternateContactDaytimePhone ||
        data.alternateContactDaytimePhone ||
        ""
      }
      onChange={(newValue) =>
        handleEdit("alternateContactDaytimePhone", newValue)
      }
    />,
    <TextInput
      label="Please Enter Alternate Contacts Email"
      value={getValue("alternateContactEmail")}
      onChange={(newValue) => handleEdit("alternateContactEmail", newValue)}
    />
  ];

  function createParticipantPage(index) {
    const participantsEdits = edits.participants
      ? edits.participants[index]
      : undefined;
    const participantsData = data.participants
      ? data.participants[index]
      : undefined;

    return {
      elements: [
        <TextInput
          label="First Name"
          value={
            participantsEdits?.firstName || participantsData?.firstName || ""
          }
          onChange={(newValue) =>
            handleParticipantEdit(index, "firstName", newValue)
          }
        />,
        <TextInput
          label="Last Name"
          required
          value={
            participantsEdits?.lastName || participantsData?.lastName || ""
          }
          onChange={(newValue) =>
            handleParticipantEdit(index, "lastName", newValue)
          }
        />,
        <TextInput
          label="Age"
          value={participantsEdits?.age || participantsData?.age || ""}
          onChange={(newValue) => handleParticipantEdit(index, "age", newValue)}
        />,
        <ChoiceInput
          label="Gender"
          value={participantsEdits?.gender || participantsData?.gender || ""}
          onChange={(newValue) =>
            handleParticipantEdit(index, "gender", newValue)
          }
          options={["male", "female"]}
        />,
        <ChoiceInput
          label="Grade"
          options={[
            "elementary",
            "middle school",
            "high school",
            "college",
            "N/A"
          ]}
          value={participantsEdits?.grade || participantsData?.grade || ""}
          onChange={(newValue) =>
            handleParticipantEdit(index, "grade", newValue)
          }
        />,
        <ChoiceInput
          label="Class"
          options={[
            "vihuela",
            "guitar",
            "guitaron",
            "trumpet",
            "dance",
            "harp",
            "violin",
            "voice"
          ]}
          value={
            participantsEdits?.instrument || participantsData?.instrument || ""
          }
          onChange={(newValue) =>
            handleParticipantEdit(index, "instrument", newValue)
          }
        />,
        <ChoiceInput
          label="Skill Level"
          options={["I", "II", "III", "IV", "Expert"]}
          value={
            participantsEdits?.skillLevel || participantsData?.skillLevel || ""
          }
          onChange={(newValue) =>
            handleParticipantEdit(index, "skillLevel", newValue)
          }
        />,
        <ChoiceInput
          label="Ethnicity"
          options={[
            "African American",
            "Hispanic",
            "Mexican American",
            "Native American",
            "White",
            "Other"
          ]}
          value={
            participantsEdits?.ethnicity || participantsData?.ethnicity || ""
          }
          onChange={(newValue) =>
            handleParticipantEdit(index, "ethnicity", newValue)
          }
        />
      ],
      validate() {
        return true;
      }
    };
  }

  const pages = [
    {
      elements: [
        <ChoiceInput
          label="Group or Individual"
          required
          value={getValue("groupOrIndividual")}
          onChange={(newValue) => handleEdit("groupOrIndividual", newValue)}
          options={["Individual", "School Group", "Community Group"]}
          width= {3}
        />,
        <ChoiceInput
          label="Workshoptype"
          required
          value={getValue("workshopType")}
          onChange={(newValue) => handleEdit("workshopType", newValue)}
          options={["Folkloro", "Mariachi"]}
          width={3/2}
        />,
        <TextInput
          label="Phone"
          value={getValue("phone")}
          onChange={(newValue) => handleEdit("phone", newValue)}
          type="tel"
        />,

        <TextInput
          label="address"
          value={getValue("address")}
          onChange={(newValue) => handleEdit("address", newValue)}
          width= {1}
        />,
        <TextInput
          label="city"
          value={getValue("city")}
          onChange={(newValue) => handleEdit("city", newValue)}
        />,
        <TextInput
          label="state"
          value={getValue("states")}
          onChange={(newValue) => handleEdit("states", newValue)}
        />,
        <TextInput
          label="Zip Code"
          value={getValue("zipCode")}
          onChange={(newValue) => handleEdit("zipCode", newValue)}
        />,
        ...(getValue("groupOrIndividual").includes("Group")
          ? groupQuestions
          : [])
      ],
      validate: () => true
    },
    {
      elements: [
        <TextInput
          label="First Name"
          required
          value={getValue("firstName")}
          onChange={(newValue) => handleEdit("firstName", newValue)}
        />,
        <TextInput
          label="Last Name"
          required
          value={getValue("lastName")}
          onChange={(newValue) => handleEdit("lastName", newValue)}
        />,
        <TextInput
          label="Age"
          required
          value={getValue("age")}
          onChange={(newValue) => handleEdit("age", newValue)}
        />,
        <ChoiceInput
          label="Gender"
          required
          value={getValue("gender")}
          onChange={(newValue) => handleEdit("gender", newValue)}
          options={["male", "female"]}
        />,
        <ChoiceInput
          label="Grade"
          required
          options={[
            "elementary",
            "middle school",
            "high school",
            "college",
            "N/A"
          ]}
          value={getValue("grade")}
          onChange={(newValue) => handleEdit("grade", newValue)}
        />,
        <ChoiceInput
          label="Class"
          required
          options={[
            "vihuela",
            "guitar",
            "guitaron",
            "trumpet",
            "dance",
            "harp",
            "violin",
            "voice"
          ]}
          value={getValue("instrument")}
          onChange={(newValue) => handleEdit("instrument", newValue)}
        />,
        <ChoiceInput
          label="Skill Level"
          required
          options={["I", "II", "III", "IV", "Expert"]}
          value={getValue("skillLevel")}
          onChange={(newValue) => handleEdit("skillLevel", newValue)}
        />,
        <ChoiceInput
          label="Ethnicity"
          required
          options={[
            "African American",
            "Hispanic",
            "Mexican American",
            "Native American",
            "White",
            "Other"
          ]}
          value={getValue("ethnicity")}
          onChange={(newValue) => handleEdit("ethnicity", newValue)}
        />
      ],
      validate: () => true
    }
  ];

  if (getValue("groupOrIndividual").includes("Group")) {
    pages.push(
      ...(data.participants?.map((e, i) => createParticipantPage(i)) || [])
    );
    pages.push(createParticipantPage(data.participants?.length || 0));
  }

  async function handleSubmit(saving) {
    onSubmit(edits);
    setEdits({});
    if (!saving) {
      alert("Form Submitted Successfully.");
    } else {
      alert("Form Saved Successfully. You may continue working on this later.");
    }
  }

  return (
    <>
      <Header>Registration</Header>
      <PagedForm pages={pages} onSubmit={handleSubmit} />
      {hasEdits && <SubmitButton onClick={() => handleSubmit(true)}>Save</SubmitButton>}
    </>
  );
}
