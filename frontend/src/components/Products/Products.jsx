import React from 'react'
import Grid from "@material-ui/core"

import Product from './Product/Product'

const products = [
    { id:1, name:"some1", description:"some1 description"},
    { id:2, name:"some2", description:"some2 description"},
    { id:3, name:"some3", description:"some3 description"},
    { id:4, name:"some4", description:"some4 description"},
    
]



const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((el) =>(
                    <Grid item key={el.id} xs={12} sm={6} md={4} lg={3}>
                        <Product/>
                    </Grid>
                ) )}
            </Grid>
        </main>
    )
}

export default Products
