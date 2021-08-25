import { PersonalInfoSubFormConfig } from '../../models';

export const personalInfoSubFormFields: PersonalInfoSubFormConfig = {
  nameInfoFields: [
    {
      label: 'Given Name',
      name: 'first'
    },
    {
      label: 'Surname',
      name: 'last'
    }
  ],
  birthInfoFields: [
    {
      label: 'gender',
      name: 'gender'
    },
    {
      label: 'Date of Birth',
      name: 'dateOfBirth',
      type: 'date'
    },
    {
      label: 'age',
      name: 'age'
    }
  ],
  parentNameInfoFields: [
    {
      // tslint:disable-next-line: quotemark
      label: "Father's given name",
      name: 'first'
    },
    {
      // tslint:disable-next-line: quotemark
      label: "Father's surname",
      name: 'last'
    }
  ],
  titleFields: [
    {
      label: 'title',
      name: 'title',
      options: [
        {
          label: 'Mister',
          value: 'mr'
        },
        {
          value: 'ms',
          label: 'Miss'
        },
        {
          value: 'mrs',
          label: 'Missis'
        }
      ]
    }
  ],
  relationshipFields: [
    {
      label: 'Relationship to insured',
      name: 'relationshipToInsured',
      options: [
        {
          label: 'Spouse',
          value: 'spouse'
        },
        {
          label: 'Parent',
          value: 'parent'
        }
      ]
    }
  ]
};
