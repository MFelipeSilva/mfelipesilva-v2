import { useTranslation } from "react-i18next";

import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  width: 25.2vw;
  max-width: 480px;
  min-width: 400px;
  gap: 37px;
  flex-direction: column;

  .error {
    border: 1px solid #ff0000 !important;
  }

  & > label {
    display: flex;
    gap: 0.7em;
    flex-direction: column;

    & > input {
      width: 100%;
      height: 66px;
      outline: none;
      padding: 0 10px;
      border: 1px solid #000;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 300;
      font-family: "Lexend", sans-serif;

      ::placeholder,
      ::-webkit-input-placeholder {
        color: #343a40;
      }
      :-ms-input-placeholder {
        color: #343a40;
      }
    }

    & > textarea {
      width: 100%;
      height: 161px;
      outline: none;
      padding: 10px;
      resize: none;
      border: 1px solid #000;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 300;
      font-family: "Lexend", sans-serif;

      ::placeholder,
      ::-webkit-input-placeholder {
        color: #343a40;
      }
      :-ms-input-placeholder {
        color: #343a40;
      }
    }

    & > span {
      font-size: 13px;
      color: #ff0000;
    }
  }

  & > button {
    width: 100%;
    height: 66px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    border-radius: 8px;
    background-color: #000;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 1280px) {
    max-width: none;
    min-width: 0;
    width: 100%;
  }
`;

export const Form = () => {
  const { t } = useTranslation();

  const createFormSchema = z.object({
    name: z.string().min(3, t("contact.form.errors.name")),
    email: z
      .string()
      .min(1, t("contact.form.errors.minEmail"))
      .email(t("contact.form.errors.errorEmail")),
    message: z.string().min(6, t("contact.form.errors.message")),
  });

  type CreateFormData = z.infer<typeof createFormSchema>;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  });

  const sendForm = async (data: CreateFormData) => {
    try {
      await fetch("https://formspree.io/f/meqylyna", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      reset();
    } catch (error) {
      error;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendForm)}>
      <label>
        <input
          type="text"
          placeholder={t("contact.form.name")}
          {...register("name")}
          className={errors && errors.name === undefined ? "" : "error"}
        ></input>
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label>
        <input
          type="email"
          placeholder={t("contact.form.email")}
          {...register("email")}
          className={errors && errors.email === undefined ? "" : "error"}
        ></input>
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label>
        <textarea
          placeholder={t("contact.form.message")}
          {...register("message")}
          className={errors && errors.message === undefined ? "" : "error"}
        ></textarea>
        {errors.message && <span>{errors.message.message}</span>}
      </label>

      <button type="submit">{t("contact.button")}</button>
    </StyledForm>
  );
};
