import React, {useState, useEffect} from 'react'
import { DataGrid, GridRowId } from '@material-ui/data-grid';
import TabPanel from '../tab-panel/tab-panel.component';

import { AntTab, AntTabs } from '../auth/auth.styles';
import {
    Window
} from './products.styles'
import { useInfoFromBackend } from '../../hooks/useInfoFromBackend.hook';
import ControlledSelectionGrid from './table.component'

const Products = () => {
    const [value, setValue] = useState(1);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

    const loadProducts = useInfoFromBackend('http://localhost:3001/products');

    const [forSubscribersProducts, setForSubscribersProducts] = useState([])
    const [forAllProducts, setForAllProducts] = useState([])
    const [userProducts, setUserProducts] = ([])

    const handleAddProduct = (id) => {
        // setUserProducts(id)
        console.log(id)
    }
  
    useEffect(() => {
        if(loadProducts.data){
            const fsp = [];
            const fap = []
            loadProducts.data.map(item => 
                {
                    if(item.forSubscribers){
                        fsp.push(item)
                    }
                    else {
                        fap.push(item)
                    }
                }
            )
            setForSubscribersProducts(fsp)
            setForAllProducts(fap)
        }
    }, [loadProducts.data])

    return (
        <div>
        {
            loadProducts.isLoading?
            <div>Loading...</div>
            :
            <Window>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example" centered>
                    <AntTab label="Products for subscribers"/>
                    <AntTab label="Products for all customers"/>
                </AntTabs>
                <TabPanel value={value} index={0}>
                    <ControlledSelectionGrid rows={forSubscribersProducts} userProducts={userProducts} handleAddProduct={handleAddProduct}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ControlledSelectionGrid rows={forAllProducts} userProducts={userProducts} handleAddProduct={handleAddProduct}/> 
                </TabPanel>
            </Window>
        }
        </div>
    )
}

export default Products