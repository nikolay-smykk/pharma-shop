import React from 'react'
import {Grid} from '@material-ui/core'
import { motion } from 'framer-motion';

import Product from '../Product/Product'
import useStyles from './styles'

import {ProductList} from '../../mocs/product'


const Products = () => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>

            
            <Grid container justify="center" spacing={4}>
                { ProductList.map(product =>
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: product.id/2,
                            
                        }}
                        >
                    <Product product={product}/>
                    </motion.div>
                </Grid>
            )}
            </Grid>
            </div>
        </main>
    )
}

export default Products
