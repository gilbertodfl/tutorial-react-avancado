import React, { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é Obrigatória")
    .min(6, "Mínimo 6 caracteres"),
});

export function Login() {
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
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    //Recupera usuários salvos localstorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //Verifica se existe usuário - email senha
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      //Se existir rediriciona p página principal/HOME
      setMessage("");
      alert("Login realizo com sucesso!");
      navigate("/");
    } else {
      // não existe - redirecionar para tela registro uma mensagem
      navigate("/register", {
        state: { message: "Crie uma conta para continuar" },
      });
    }

    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {message && <p className="text-red-500">{message}</p>}

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
          autoComplete="current-password"
          register={register}
          error={errors.password}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Entrar
        </button>

        <p className="mt-4 text-center text-sm">
          Não tem conta?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Registre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
