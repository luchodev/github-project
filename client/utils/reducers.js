import { actions } from "./consts";

const customTableReducer = (state, action) => {
   switch (action.type) {
      case actions.NEW_DATASOURCE:
         return {
            ...state,
            sourceData: action.payload,
            items: action.payload,
            page: 0,
            filter: "",
         };
      case actions.CHANGE_SORT:
         return {
            ...state,
            order: action.payload.order,
            orderBy: action.payload.orderBy,
         };
      case actions.CHANGE_ROWS_PER_PAGE:
         return {
            ...state,
            rowsPerPage: action.payload.rowsPerPage,
            page: action.payload.page,
         };
      case actions.CHANGE_PAGE:
         return {
            ...state,
            page: action.payload.page,
         };
      case actions.CHANGE_ITEMS:
         return {
            ...state,
            items: action.payload.items,
         };
      case actions.CHANGE_FILTER:
         return {
            ...state,
            filter: action.payload.filter,
         };
      case actions.UPDATE_ITEMS:
         return {
            ...state,
            page: action.payload.page,
            items: action.payload.items,
         };
      default:
         return state;
   }
};

export { customTableReducer };
