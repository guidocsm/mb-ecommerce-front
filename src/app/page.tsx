'use client'

import { Button } from "@/components/common/Button";
import { MainTitle } from "@/components/common/MainTitle";
import { ROUTES } from "@/routes/routes";
import Link from "next/link";

export default function Home() {  
  return (
    <>
      <main className="main-section-home">
        <MainTitle 
          text="No hay secretos."
        />
        <MainTitle 
          text="Solo calidad."
          className="quality-text"
        />
        <p>Cada día elaboramos a mano, uno a uno, nuestros productos.</p>
        <div className="main-section-home__start-order-btn">
          <Link href={ROUTES.START_ORDER}>
            <Button
              text="Iniciar pedido"
            />
          </Link>
        </div>
      </main>
      <section className="secondary-section-home">
        <h2>Consigue premios</h2>
        <p>Únete a nuestro club, hazte con tu <strong>tarjeta de fidelización</strong> y <strong>acumula puntos</strong>.</p>
        <div className="secondary-section-home__join-club-btn">
          <Button
            text="Únete al MB Club"
          />
        </div>
      </section>
    </>
  );
}
