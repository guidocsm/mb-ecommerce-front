'use client'

import { Button } from "@/components/common/Button";
import { QualificationHeader } from "@/components/qualification/QualificationHeader";
import { useNavigation } from "@/hooks/useNavigation";
import { ROUTES } from "@/routes/routes";

export default function QualificationLogin() {
  const { navigateTo } = useNavigation()
  
  return (
    <>
      <QualificationHeader 
        text="Bienvenido de nuevo"
      />
      <form className="qualification-login-form">
        <label className="qualification-login-form__field" htmlFor="email">
          <span>Correo electrónico</span>
          <input 
            name="email" 
            type="text" 
            placeholder="manolitos@gmail.com"
          />
          <span className="qualification-create-account">¿Aún no tienes cuenta?</span>
        </label>
        <label className="qualification-login-form__field" htmlFor="password">
          <span>Contraseña</span>
          <input 
            name="password"
            type="password" 
          />
        </label>
      </form>
      <label className="form-options" htmlFor="saveEmail">
        <div>
          <input className="form-options__input" type="checkbox" name="saveEmail" />
          <span className="form-options__label">Recordarme</span>
        </div>
        <span className="reset-password">¿Has olvidado tu contraseña?</span>
      </label>
      <div className="qualification-login-form__login">
        <Button 
          text="Iniciar sesión"
        />
      </div>
      <span onClick={() => navigateTo(ROUTES.START_ORDER)} className="qualification-login-guest">Haz tu pedido como invitado</span>
    </>
  )
}