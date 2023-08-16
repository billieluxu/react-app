import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  const schema = z.object({
    name: z.string().min(3, "Minimum 3 characters"),
    age: z
      .number({ invalid_type_error: "age field is quired" })
      .min(18, "Age must be above 18"),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  //   const [person, setPerson] = useState({ name: "", age: "" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        <input
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          {...register("name")}
          id="name"
          //   value={person.name}
          //   ref={nameRef}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {errors.age && <p className="text-danger">{errors.age.message}</p>}

        <input
          //   onChange={(event) =>
          //     setPerson({ ...person, age: parseInt(event.target.value) })
          //   }
          {...register("age", { valueAsNumber: true })}
          id="age"
          //   value={person.age}
          //   ref={ageRef}
          type="number"
          className="form-control"
        />
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
