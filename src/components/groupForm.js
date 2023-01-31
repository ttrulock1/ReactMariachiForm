import groupOrIndividual from "../pages/SignUp";

export default function RenderGroupQuestions(){
    if (groupOrIndividual === 'School Group' ||         
        groupOrIndividual === 'Commuity Group') {
      return <GroupQuestions />;
    }
    return 
  };

