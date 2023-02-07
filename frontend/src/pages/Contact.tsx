import { FormEvent, useState } from 'react';
import Container from '../components/Container';
import useForm from '../hooks/useForm';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Error {
  field: string;
  message: string;
}

const Contact = () => {
  const [errors, setErrors] = useState<Error[]>([]);

  const { form, handleChange } = useForm<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = form;

  const sendEmail = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formKeys = Object.keys(form) as Array<keyof typeof form>;
    const newErrors: Error[] = [];

    formKeys.forEach((field) => {
      if (form[field] === '') {
        newErrors.push({
          field,
          message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        });
      }
    });

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);

    /** TO DO send email */
  };

  return (
    <section className="bg-palePink w-full">
      <Container>
        <div className="w-full h-[1066px] pt-[102px]">
          <div className="w-full h-full">
            <h1 className="text-4.5xl font-bold">Contact</h1>
            <div className="px-11 mt-4 w-full h-full flex justify-center ">
              <div className="w-full">
                <h2 className="text-2.5xl w-full">Have a question? Send us a message</h2>
                <form
                  className="w-full  mt-16 text-2.5xl"
                  onSubmit={sendEmail}
                >
                  <div className="w-full flex flex-row justify-between gap-x-12">
                    <div className="relative w-full">
                      <input
                        type={'text'}
                        className="p-3 w-full h-[4.2rem] rounded border-2 border-black rounded-md bg-palePink"
                        placeholder={'Name'}
                        name={'name'}
                        value={name}
                        onChange={handleChange}
                      />
                      {
                        <div className="absolute -bottom-7 left-0 text-base text-red">
                          {errors.find((error) => error.field === 'name')?.message || null}
                        </div>
                      }
                    </div>
                    <div className="relative w-full">
                      <input
                        type={'email'}
                        className="p-3 w-full h-[4.2rem] rounded border-2 border-black rounded-md bg-palePink"
                        placeholder={'Email'}
                        name={'email'}
                        value={email}
                        onChange={handleChange}
                      />
                      {
                        <div className="absolute -bottom-7 left-0 text-base text-red">
                          {errors.find((error) => error.field === 'email')?.message || null}
                        </div>
                      }
                    </div>
                  </div>
                  <div className="relative w-full mt-10">
                    <input
                      type={'text'}
                      className="p-3 w-full h-[4.2rem] rounded border-2 border-black rounded-md bg-palePink"
                      placeholder={'Subject'}
                      name={'subject'}
                      value={subject}
                      onChange={handleChange}
                    />
                    {
                      <div className="absolute -bottom-7 left-0 text-base text-red">
                        {errors.find((error) => error.field === 'subject')?.message || null}
                      </div>
                    }
                  </div>

                  <div className="relative w-full mt-10">
                    <textarea
                      className="p-3 w-full h-[23rem] rounded border-2 border-black rounded-md bg-palePink"
                      placeholder={'Message'}
                      name={'message'}
                      value={message}
                      onChange={handleChange}
                    />
                    {
                      <div className="absolute -bottom-6 left-0 text-base text-bold text-red">
                        {errors.find((error) => error.field === 'message')?.message || null}
                      </div>
                    }
                  </div>

                  <div className="w-full mt-10 text-white">
                    <input
                      type={'submit'}
                      className="p-3 w-full h-[5rem] rounded rounded-md bg-blueDark"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="box-border w-full h-[49rem] border border-[2.5px] border-grey rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.300203244893!2d-58.46197998417577!3d-34.57126976329002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d9ca1ded77%3A0xf196efb54eb631d0!2sCap.%20Gral.%20Ram%C3%B3n%20Freire%201609%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1675630330397!5m2!1ses!2sar"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
