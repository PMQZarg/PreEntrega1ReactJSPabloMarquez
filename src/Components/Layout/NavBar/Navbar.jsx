


import CartWidget from "../../Common/CartWidget/CartWidget"

export const Navbar = () => {
  return (
    <div className="navbar">
      <h4>Logo</h4>
      <img src="https://res.cloudinary.com/diwok5a0s/image/upload/v1695773085/Logo_PMQZ4_100x100_ywhdbd.png" />
      <ul>
        <li>Clases/Cursos</li>
        <li>Tutoriales</li>
        <li>Producción</li>
        <li>Consultoría</li>
        <li>Music Track Delivery</li>
      </ul>  
      {/*WIDGET CARRITO*/}
      <CartWidget/>
    </div>
  );
};
