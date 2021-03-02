import React from 'react';
import { motion } from 'framer-motion';

import Products from './components/Poducts/Products';

const App = () => {
  return (
    <motion.div animate={{ scale: 0.5 }} transition={{ duration: 2 }}>
      <Products />
    </motion.div>
  );
};

export default App;
