import { useState } from 'react';
import { useForm } from "react-hook-form";

import TextField from '../common/TextField';
import Button from '../common/Button';

export default function Contact({ }) {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState({});

  return (
    <form onSubmit={handleSubmit((data) => setResult(data))}>
      <div>
        <TextField register={register} label="Full name" />
        <TextField register={register} label="Email" />
      </div>
      <div>
        <TextField register={register} label="Phone number" />
        <TextField register={register} label="Linkedin" />
      </div>
      <div>
        <TextField register={register} label="Website" />
        {/* <Select {...register("category")} label="State">
          <MenuItem value="">Tunis</MenuItem>
          <MenuItem value="">Sfax</MenuItem>
        </Select> */}
      </div>
      <Button loading={true}>Save</Button>
    </form>
  );
}


