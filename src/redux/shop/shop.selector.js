import {createSelector} from "reselect";


const Shopselector = state => state.shop;

export const Collectionselector = createSelector(
    [Shopselector],
    shop => shop.collections
);

export const selectCollection =collectionUrlParam => {
    return createSelector(
        [Collectionselector],
        collections => collections[collectionUrlParam]
    )
    };