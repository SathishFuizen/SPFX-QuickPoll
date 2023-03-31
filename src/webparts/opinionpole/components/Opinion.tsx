// import * as React from "react";
// import { ICamlQuery } from "@pnp/sp/lists";
// import { SPFI } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp";
// import { getSP } from "./pnpConfig";



// const OpinionPole = (props:IOpinionpoleProps) => {
//     const [Opiniondata, setOpinionData] = React.useState<any>();
// const caml: ICamlQuery = {
//     ViewXml:
//       "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
//   };

//   const getOpininonPole = async () => {
//     let _sp: SPFI = getSP(props.context);
//     const list = await _sp.web.lists.getByTitle("OpinionPole");
//     var r = await list.getItemsByCAMLQuery(caml);
//     setOpinionData(r);
//     console.log(Opiniondata);
//   };
// }
// React.useEffect(() => {
//     const execute = async () => {
//       await getOpininonPole();
     
//     };
//     execute();
//   }, []);