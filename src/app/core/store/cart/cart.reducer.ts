import { ICart, ICartProduct } from '../../models/order';
import { CartActions } from './cart.actions';
import * as EVENTS from './cart.events';

export const CART_FEATURE_KEY = 'cart';

export interface ICartState {
    mineCart: ICart;
}

export interface ICartPartialStore {
    readonly [CART_FEATURE_KEY]: ICartState;
}

const initialState: ICartState = {
    mineCart: {
        products: [],
    },
};

export function cartReducer(state: ICartState = initialState, action: CartActions): ICartState {
    let cartProducts: ICartProduct[] = Object.assign([], state.mineCart.products);
    const letFindIndex = (set = cartProducts, wantedId: string): number => set.findIndex((x) => x._id === wantedId);
    const deleteCartProduct = (set: ICartProduct[], index: number): ICartProduct[] => set.filter((item) => item !== set[index]);
    switch (action.type) {
        case EVENTS.CART_ADD_PRODUCT_RECEIVED: {
            const productToAdd: ICartProduct = action.cartProduct;
            const foundProductIndex = letFindIndex(cartProducts, productToAdd._id);
            if (foundProductIndex !== -1) {
                const existingProduct = cartProducts[foundProductIndex];
                cartProducts[foundProductIndex] = { ...existingProduct, amount: existingProduct.amount + productToAdd.amount };
            } else {
                cartProducts.push(productToAdd);
            }
            return Object.assign({}, state, { mineCart: { products: cartProducts } });
        }
        case EVENTS.CART_REDUCE_PRODUCT_RECEIVED: {
            const toReduce = action.productId;
            const foundProductIndex = letFindIndex(cartProducts, toReduce);
            if (foundProductIndex !== -1) {
                if (cartProducts[foundProductIndex].amount > 1) {
                    cartProducts[foundProductIndex] = {
                        ...cartProducts[foundProductIndex],
                        amount: cartProducts[foundProductIndex].amount - 1,
                    };
                } else {
                    cartProducts = deleteCartProduct(cartProducts, foundProductIndex);
                }
            }
            return Object.assign({}, state, { mineCart: { products: cartProducts } });
        }
        case EVENTS.CART_DELETE_PRODUCT_RECEIVED: {
            const toDelete = action.productId;
            const foundProductIndex = letFindIndex(cartProducts, toDelete);
            if (foundProductIndex !== -1) {
                cartProducts = deleteCartProduct(cartProducts, foundProductIndex);
            }
            return Object.assign({}, state, { mineCart: { products: cartProducts } });
        }
        default:
            return state;
    }
}
