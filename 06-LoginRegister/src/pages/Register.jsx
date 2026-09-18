import React, { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é Obrigatória")
    .min(6, "Mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não conferem")
    .required("Confirmação é Obrigatória"),
});

export function Register() {
  const [message, setMessage] = useState("");

  //Hook de navegação entre páginas
  const navigate = useNavigate();

  //Hook para acessar dados de rota anterior/atuais
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    //Recupera os usuários salvos no localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    //Verificar se o email já registrado
    const exists = users.find((user) => user.email === data.email);
    if (exists) {
      //Se já existir, exibe uma mensagem de erro e interrompe o cadastro
      setMessage("Email já está cadastrado");
      return;
    }

    //Adicionar o novo usuário
    users.push({ name: data.name, email: data.email, password: data.password });

    // Salvar a lista atualizada no localStorage
    localStorage.setItem("users", JSON.stringify(users));

    //Exibe alerta de sucesso e redirecionar para a tela de login
    alert("Conta criada com sucesso!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {message && <p className="text-red-500">{message}</p>}

        <InputField
          label="Nome"
          id="name"
          type="text"
          name="name"
          autoComplete="username"
          register={register}
          error={errors.name}
        />

        <InputField
          label="Email"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          register={register}
          error={errors.email}
        />

        <InputField
          label="Senha"
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          register={register}
          error={errors.password}
        />

        <InputField
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          register={register}
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Registrar
        </button>

        <p className="mt-4 text-center text-sm">
          Já tem conta?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  );
}
