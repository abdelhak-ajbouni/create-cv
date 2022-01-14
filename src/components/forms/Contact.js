import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Select, MenuItem, Box } from '@mui/material';

import TextField from '../common/TextField';
import Button from '../common/Button';

export default function Contact({ }) {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState({});

  return (
    <form onSubmit={handleSubmit((data) => setResult(data))}>
      <Box sx={{ display: "flex" }}>
        <TextField register={register} label="Full name" />
        <TextField register={register} label="Email" />
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField register={register} label="Phone number" />
        <TextField register={register} label="Linkedin" />
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField register={register} label="Website" />
        <Select {...register("category")} label="State">
          <MenuItem value="">Tunis</MenuItem>
          <MenuItem value="">Sfax</MenuItem>
        </Select>
      </Box>
      <Button type="submit" loading={false}>Save</Button>
    </form>
  );
}


