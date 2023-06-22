import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  image: yup.string(),
  company_id: yup.string().nullable().required(),
});
