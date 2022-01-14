import { toCamelCase } from 'src/libs/functions';

export default function TextField({ label, placeholder, register }: Props) {
  return <input
    className='shadow appearance-none border rounded w-full m-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    label={label}
    placeholder={placeholder || label}
    aria-label={label}
    {...register(toCamelCase(label))}
  />;
}

type Props = {
  label: string;
  placeholder?: string;
  register: any;
}
