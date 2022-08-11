import React, { useCallback, useState } from "react";

interface IFormState {
  email: string;
  password: string;
  stayLoggedIn: boolean;
}

function App() {

  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
    stayLoggedIn: false,
  });

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {email, password} = formState;
    if(!email || !password) {

      window.alert("Preencha todos os campos")

      setisLoggedIn(false);

      return;
    }

    setisLoggedIn(true)
  },[formState]);

  const handleChangeInput  = useCallback((event: React.FormEvent<HTMLInputElement>) => { 

    const targetInput = event.currentTarget;

    const {name, value, type, checked} = targetInput;

    const finalValue = type === "checkbox" ? checked : value;

    setFormState({...formState, [name]: finalValue,
    });
  },
  [formState]
  );

  if(isLoggedIn){
    return (  
    <div className="container mt-5">
    <p className="fs-1 mb-5">Bem vindo</p>
    </div>
    )
  }

  return (
    <div className="container">
      <p className="fs-1 mb-5">Entrar</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Entrar no email"
            required
            value={formState.email}
            onChange={handleChangeInput}
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca compartilhe a sua senha com ninguem.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            placeholder="Digite a senha"
            value={formState.password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="stayLoggedIn"
            checked={formState.stayLoggedIn}
            onChange={handleChangeInput}
            name="stayLoggedIn"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Mantenha-me Logado
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
