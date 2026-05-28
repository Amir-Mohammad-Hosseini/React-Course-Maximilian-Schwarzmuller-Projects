import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Quantum Mechanical Keyboard',
    price: 149.99,
    description: 'A tactile, hot-swappable mechanical keyboard featuring per-key RGB illumination, aerospace-grade aluminum chassis, and custom macro support for ultimate typing efficiency.'
  },
  {
    id: 'p2',
    title: 'Acoustic Shield ANC Headphones',
    price: 299.50,
    description: 'High-fidelity wireless over-ear headphones with active noise cancellation, perfect for deep-work sessions and blocking out data center noise.'
  },
  {
    id: 'p3',
    title: 'Thermo-Regulating Smart Mug',
    price: 89.00,
    description: 'Keep your coffee at the exact optimal temperature down to the degree. Includes a Bluetooth API for tracking your caffeine intake.'
  },
  {
    id: 'p4',
    title: 'Holographic Desk Display',
    price: 450.00,
    description: 'A next-generation volumetric display for your desk. Render 3D models and data visualizations in real-time without needing VR goggles.'
  },
  {
    id: 'p5',
    title: 'Ergonomic Vertical Mouse',
    price: 59.99,
    description: 'Designed with a 57-degree angle to reduce wrist strain and prevent carpal tunnel syndrome during marathon coding sessions. Features high-precision optical tracking.'
  }
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map((product) => 
            <ProductItem
            key={product.id}
              {...product}
            />
          
          )
        }
      </ul>
    </section>
  );
};

export default Products;
