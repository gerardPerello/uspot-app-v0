import Main from './src/components/Main';

export default function App() {
  console.log("Hola")
  return (
    //Las vistas son lo que se usa para crear interfaz de usuario, lo mas parecido a nu div en html. Los textos no pueden ir sueltos,
    //Tienen que ir dentro de un Text, si no se queja.
    //La diferencia con un div es que tienen el flexbox incorporado por defecto.
    //TextInput ==> INPUT
    //Toyuchable.... TODO LOS BOTONES.
      <Main/>
  );
}

