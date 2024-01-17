import { Field } from '../interface/filed.interface';

export const mockDataFiled: Field[] = [
  {
    name: 'name',
    dataType: 'text',
    title: 'Имя',
  },
  {
    name: 'secondName',
    dataType: 'text',
    title: 'Фамилия',
  },
  {
    name: 'age',
    title: 'Возраст',
    dataType: 'number',
  },
  {
    name: 'registry',
    dataType: 'date',
    title: 'Дата регистрации',
  },
  {
    name: 'admin',
    dataType: 'checkbox',
    title: 'Является ли пользователь админом',
  },
];

export const mockDataValue: Record<string, unknown> = {
  name: 'Алексей',
  secondName: 'Бобров',
  age: 27,
  registry: new Date(),
  admin: true,
};
