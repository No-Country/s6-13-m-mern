import { type ChangeEvent, useState } from 'react'

// Todo tiraba error la version de antes, tipar bien o ignorar
const useForm = (initState: any) => {
  const [form, setForm] = useState(initState)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target

    setForm({ ...form, [name]: value })
  }

  return {
    form,
    handleChange,
    ...form,
  }
}

export default useForm
