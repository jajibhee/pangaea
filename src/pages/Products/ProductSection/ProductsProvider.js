// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import AuthProvider from "../../../shared/providers/AuthProvider/AuthProvider";
// import { formatWord } from "../../../shared/utils/fx";
// import { GET } from "../../../core/config/Api";
// import { withToastManager } from "react-toast-notifications";
// import {
//   addProduct,
//   fetchProducts,
//   editProduct,
// } from "../../../store/actions/product/product";

// type ProductsProviderProps = {
//   currentPage: any,
//   limit: string,
//   fetchProducts?: any,
//   editProduct?: any,
//   addProduct?: any,
//   render: any,
//   total: any,
//   items: any,
//   totalPages: any,
//   toastManager?: any,
// };

// function ProductsProvider(props: ProductsProviderProps) {
//   const { items, currentPage, limit, total, totalPages } = props;
//   const [countryList, setCountryList] = useState();
//   const [loading, setLoading] = useState(false);
//   const [state, setState] = useState({
//     loading: false,
//     totalPages: totalPages,
//     limit: limit,
//     currentPage: currentPage,
//     searchTerm: "",
//     search: false,
//     list: "",
//     searchDropdown: false,
//     countryList: "",
//   });

//   const [inputValues, setInputValues] = useState({
//     name: "",
//     unit: "",
//     rate: "",
//     walletDiscount: "",
//     cashDiscount: "",
//     country: "",
//     currency: "",
//   });

//   const toastMessage = (message: string, type: string) => {
//     props.toastManager.add(message, {
//       appearance: type,
//     });
//   };

//   useEffect(() => {
//     document.title = "Kobo Care | Products";
//     setLoading(true);
//     props
//       .fetchProducts(`product/global?limit=${limit}&page=${state.currentPage}`)
//       .then((res: any) => {
//         setLoading(false);
//       })
//       .catch((err: any) => {
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     GET(`route/country`).then((res: any) => {
//       setCountryList(res.data.data.countries);
//     });
//   }, []);

//   useEffect(() => {
//     if (inputValues.country) {
//       //only call getCurrency when a country is being set to state
//       getCurrency();
//     }
//   }, [inputValues.country]);

//   const getCurrency = () => {
//     countryList &&
//       countryList.map((currency: any) => {
//         if (currency.country === inputValues.country) {
//           console.log(currency.currency);
//           setInputValues({ ...inputValues, currency: currency.currency });
//         }
//       });
//   };

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setInputValues({ ...inputValues, [name]: value });
//   };

//   const handleAddProduct = (e: any) => {
//     e.preventDefault();

//     const data = {
//       name: inputValues.name,
//       unit: inputValues.unit,
//       rate: parseInt(inputValues.rate, 10),
//       walletDiscount: parseInt(inputValues.walletDiscount, 10),
//       cashDiscount: parseInt(inputValues.cashDiscount, 10),
//       country: inputValues.country,
//       currency: inputValues.currency,
//     };

//     props.addProduct(`product/global`, data).then((res: any) => {
//       toastMessage("Product successfully created", "success");
//       setInputValues({
//         ...inputValues,
//         name: "",
//         unit: "",
//         rate: "",
//         walletDiscount: "",
//         cashDiscount: "",
//         country: "",
//         currency: "",
//       });
//     });
//   };

//   const tableHeadings: any[] = [
//     {
//       key: "name",
//       title: "Product",
//     },
//     {
//       key: "unit",
//       title: "Unit of measure",
//     },

//     {
//       key: "walletDiscount",
//       title: "Wallet Discount",
//     },

//     {
//       key: "cashDiscount",
//       title: "Cash Discount",
//     },

//     {
//       key: "country",
//       title: "Country",
//       formatter: (data: any) => {
//         return (
//           <>
//             <div className="tableText text-left">
//               {" "}
//               {formatWord(data.country) ?? "N/A"}
//             </div>
//             <h4 className="bold">{data.currency ?? "N/A"}</h4>
//           </>
//         );
//       },
//     },
//   ];

//   //search
//   useEffect(() => {
//     if (state.searchTerm !== "") {
//       props
//         .fetchProducts(
//           `product/global/search?searchTerm=${state.searchTerm}&limit=${limit}&page=${state.currentPage}`
//         )

//         .then((res: any) => {
//           setState({ ...state, loading: false });
//         })
//         .catch((err: any) => {
//           setState({ ...state, loading: false });
//         });
//     }
//     // eslint-disable-next-line
//   }, [state.searchTerm]);

//   const onSearch = (e: any) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value, search: true, loading: true });
//   };

//   // pagination
//   useEffect(() => {
//     props
//       .fetchProducts(`product/global?limit=${limit}&page=${state.currentPage}`)
//       .then((res: any) => {
//         setState({ ...state, loading: false });
//       })
//       .catch((err: any) => {
//         // handleError(err);
//         setState({ ...state, loading: false });
//       });
//     // eslint-disable-next-line
//   }, [state.currentPage]);

//   const next = () => {
//     setState({ ...state, currentPage: currentPage + 1 });
//   };

//   const prev = (e: any) => {
//     setState({ ...state, currentPage: currentPage - 1 });
//   };

//   return props.render({
//     state,
//     handleAddProduct,
//     setState,
//     setInputValues,
//     countryList,
//     prev,
//     next,
//     onSearch,
//     handleChange,
//     loading,
//     inputValues,
//     tableHeadings,
//     items,
//     limit,
//     total,
//     totalPages,
//   });
// }

// ProductsProvider.defaultProps = {
//   limit: 30,
//   currentPage: 1,
// };

// const mapStateToProps = (state: any) => {
//   return {
//     items: state.product.products,
//     currentPage: state.product.products.currentPage,
//     limit: state.product.products.limit,
//     total: state.product.products.total,
//     totalPages: state.product.products.totalPages,
//   };
// };

// export default connect(mapStateToProps, {
//   addProduct,
//   fetchProducts,
//   editProduct,
// })(AuthProvider(withToastManager(ProductsProvider)));
