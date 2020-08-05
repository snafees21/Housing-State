import { Wizard, WizardStep } from './utils/multiStepForm';
import { TextInput } from './utils/inputs';
import Page1 from './post/form/page1';

const test = () => {
  return (
    <Wizard
      initialValues={{
        building_num: '',
        street: '',
        city: '',
        state: '',
        zip_code: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <WizardStep>
        <Page1 />
      </WizardStep>
    </Wizard>
  );
};

export default test;
