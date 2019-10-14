/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions } from "mst-gql"

import { BookModel, BookModelType } from "./BookModel"
import { bookModelPrimitives, BookModelSelector } from "./BookModel.base"


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Book', () => BookModel]], ['Book']))
  .props({
    books: types.optional(types.map(types.late(() => BookModel)), {})
  })
  .actions(self => ({
    queryBooks(variables?: {  }, resultSelector: string | ((qb: BookModelSelector) => BookModelSelector) = bookModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ books: BookModelType[]}>(`query books { books {
        ${typeof resultSelector === "function" ? resultSelector(new BookModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  }))
