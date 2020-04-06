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
    let cartProducts: ICartProduct[] = state.mineCart.products;
    const findIndex = (set: ICartProduct[], wantedId: string): number => set.findIndex((x) => x._id === wantedId);
    const deleteCartProduct = (set: ICartProduct[], index: number): ICartProduct[] => set.filter((item) => item !== set[index]);
    switch (action.type) {
        case EVENTS.CART_ADD_PRODUCT_RECEIVED: {
            const productToAdd: ICartProduct = action.cartProduct;
            const foundProductIndex = findIndex(cartProducts, productToAdd._id);
            if (foundProductIndex) {
                const existingProduct = cartProducts[foundProductIndex];
                cartProducts[foundProductIndex] = { ...existingProduct, amount: existingProduct.amount + productToAdd.amount };
            } else {
                cartProducts.push(productToAdd);
            }
            return Object.assign({}, state, { mineCart: { product: cartProducts } });
        }
        case EVENTS.CART_REDUCE_PRODUCT_RECEIVED: {
            const toReduce = action.productId;
            const foundProductIndex = findIndex(cartProducts, toReduce);
            if (foundProductIndex) {
                if (cartProducts[foundProductIndex].amount > 1) {
                    cartProducts[foundProductIndex].amount--;
                } else {
                    cartProducts = deleteCartProduct(cartProducts, foundProductIndex);
                }
            }
            return Object.assign({}, state, { mineCart: { product: cartProducts } });
        }
        case EVENTS.CART_DELETE_PRODUCT_RECEIVED: {
            const toDelete = action.productId;
            const foundProductIndex = findIndex(cartProducts, toDelete);
            if (foundProductIndex) {
                cartProducts = deleteCartProduct(cartProducts, foundProductIndex);
            }
            return Object.assign({}, state, { mineCart: { product: cartProducts } });
        }
        default:
            return state;
    }
}
