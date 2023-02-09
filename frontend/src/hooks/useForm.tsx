import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const onResetForm = () => {
    setForm(initState);
  };

  return {
    form,
    handleChange,
    ...form,
    onResetForm
  };
};

export default useForm;
