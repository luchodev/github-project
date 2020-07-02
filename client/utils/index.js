const customTableHeadCells = [
   {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Nombre",
   },
   {
      id: "description",
      numeric: false,
      disablePadding: false,
      label: "Descripción",
   },
   {
      id: "language",
      numeric: false,
      disablePadding: false,
      label: "Lenguaje",
   },
   { id: "url", numeric: false, disablePadding: false, label: "Url" },
   {
      id: "defaultBranch",
      numeric: false,
      disablePadding: false,
      label: "Branch (default)",
   },
];

const stableSort = (array, comparator) => {
   const stabilizedThis = array.map((el, index) => [el, index]);
   stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
   });
   return stabilizedThis.map((el) => el[0]);
};

const getComparator = (order, orderBy) => {
   return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
};

const descendingComparator = (a, b, orderBy) => {
   if (a[orderBy] === null) {
      return 1;
   }
   if (b[orderBy] === null) {
      return -1;
   }
   if (b[orderBy] < a[orderBy]) {
      return -1;
   }
   if (b[orderBy] > a[orderBy]) {
      return 1;
   }
   return 0;
};

export { customTableHeadCells, stableSort, getComparator };
