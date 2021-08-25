import { IdentificationInfoSubFormConfig } from '../../models';

export const identificationInfoSubFormConfig: IdentificationInfoSubFormConfig = {
  idTypeFields: [
    {
      label: 'ID Type',
      name: 'type',
      options: [
        {
          label: 'Passport',
          value: 'passport',
          row: 0
        },
        {
          label: 'national id',
          value: 'national_id',
          row: 0
        }
      ]
    }
  ],
  idInformationFields: [
    {
      label: 'ID Number',
      name: 'number'
    },
    {
      label: 'Issue Date',
      name: 'issueDate',
      type: 'date'
    }
  ]
};
