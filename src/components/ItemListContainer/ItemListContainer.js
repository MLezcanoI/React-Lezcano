import { useState, useEffect, useCallback } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading,  setLoading] = useState(true);
    const { categoryId } = useParams();

    const fetchProducts = useCallback (async () => {
        setLoading(true);

        try {
            const collectionRef = collection(db, "products");
            const response = await (categoryId
                ? getDocs(query(collectionRef, where("category", "==", categoryId)))
                : getDocs(collectionRef));

            const productsAdapted = response.docs ? response.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            }) : [];

            setProducts(productsAdapted);
        } catch (error) {
            console.error('error al obtener datos:', error.message );
        } finally {
            setLoading(false);
        }
    }, [categoryId, setLoading]);

    // Llama a fetchProducts al montar el componente y cuando categoryId cambia
    useEffect(() => {
        fetchProducts();
    }, [categoryId, fetchProducts]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
