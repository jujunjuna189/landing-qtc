import { createContext, useContext, useEffect, useState } from "react";
import { deleteProductApi, getProductApi } from "../../helpers";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState({});

    const getProduct = async () => {
        await getProductApi({}).then((res) => {
            setProduct(res);
        });
    }

    const deleteProduct = async ({ id }) => {
        await deleteProductApi({ id: id }).then((res) => {
            getProduct();
        });
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <ProductContext.Provider value={{ product, getProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export const UseProductContext = () => {
    return useContext(ProductContext);
}