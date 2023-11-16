'use client';
/* todos mis componentes dentro de un use client seran clients por defecto tambien */
import Users from '@/components/Users';

//no se puede usar metadata con use "use client"
/* export const metadata = {
  title: 'Mi pagina especial Home',
}; */

export default function HomePage() {
  // server component
  return (
    <section>
      {/* client component */}
      <Users />
    </section>
  );
}
