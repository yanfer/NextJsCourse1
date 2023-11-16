import Link from 'next/link';

export const metadata = {
  title: 'Tienda oficial',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: 'tienda, online, ecommerce',
};

/* para miniaturas en enlaces para celular, ver tambien OpenGraph en nextjs documentation */
export default function TiendaLayout({ children }) {
  return (
    <>
      <h3>Seccion Tienda</h3>
      <ul>
        <Link href="/tienda/categorias">Categorias</Link>
        <li>Productos</li>
      </ul>
      {children}
    </>
  );
}
