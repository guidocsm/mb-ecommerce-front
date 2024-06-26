import { MainTitle } from '@/components/common/MainTitle';
import '@/scss/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="start-order-section">
      <MainTitle
        text="Haz tu pedido"
      />
      <div className="qualification-container">
        {children}
      </div>
    </main>
    <section className="start-order-secondary-section"> 
    </section>
    </div>
  );
}
