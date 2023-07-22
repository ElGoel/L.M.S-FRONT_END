import { ICattle } from '@/interfaces';
import * as Yup from 'yup';

/**
 * ? Yup Validation Schema
 */
const cattleSchema: Yup.ObjectSchema<ICattle> = Yup.object().shape({
  id: Yup.number(),
  number: Yup.number()
    .typeError('El número debe ser un valor numérico')
    .required('El numero es obligatorio'),
  initWeight: Yup.number()
    .typeError('El peso inicial debe ser un valor numérico')
    .required('El peso inicial es obligatorio')
    .min(0, 'El peso inicial no puede ser negativo'),
  quarterlyWeight: Yup.number()
    .typeError('El peso trimestral debe ser un valor numérico')
    .required('El peso trimestral es obligatorio')
    .min(0, 'El peso trimestral no puede ser negativo')
    .test(
      'is-greater-than-init',
      'El peso trimestral debe ser mayor o igual que el peso inicial',
      function (value) {
        return !value || value >= this.parent.initWeight;
      }
    ),
  ageGroup: Yup.string().required('El grupo etareo es obligatorio'),
  registerDate: Yup.string().nullable(),
  register: Yup.string()
    .matches(/^[A-Za-z]+$/, 'El registrador debe contener solo caracteres')
    .required('El registrador es requerido'),
  isDelete: Yup.boolean(),
  BreedId: Yup.string().required('La raza es obligatoria'),
  LotId: Yup.number().required(),
});

export default cattleSchema;
