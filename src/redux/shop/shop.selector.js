import {createSelector} from "reselect";


const Shopselector = state => state.shop;

export const Collectionselector = createSelector(
    [Shopselector],
    shop => shop.collections
);


export const selectCollection = collectionUrlParam =>
  createSelector([Collectionselector], collections => {
    return collections.find(collection => {
      return collection.routeName === collectionUrlParam
    })
  });