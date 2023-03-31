
// import * as React from 'react'
import { LeafPoll, Result } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'
// import { ISPList } from '../OpinionpoleWebPart'


import * as React from "react";
// import { ICamlQuery } from "@pnp/sp/lists";
// import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
// import { getSP } from "./pnpConfig";


// import {
//   SPHttpClient,
//   SPHttpClientResponse  
// } from '@microsoft/sp-http';
// import { IOpinionpoleProps } from './IOpinionpoleProps';

// Persistent data array (typically fetched from the server)
const resData = [
  { id: 0, text: 'Answer 1', votes: 0 },
  { id: 1, text: 'Answer 2', votes: 0 },
  { id: 2, text: 'Answer 3', votes: 0 }
]


// import * as React from "react";
// import { ICamlQuery } from "@pnp/sp/lists";
// import { SPFI } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp";
// import { getSP } from "./pnpConfig";



const Poleelement = (props:any) => {

 
  
  
  
    
  
  
  
  // Object keys may vary on the poll type (see the 'Theme options' table below)
  const customTheme = {
    textColor: 'black',
    mainColor: '#00B87B',
    backgroundColor: 'rgb(255,255,255)',
    alignment: 'center'
  }
  
  // function _getListData(): Promise<ISPList>
  //   {
  //    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('OpinionPole')/Items?$select=QuestionId,QuestionName,Choices",
  //        SPHttpClient.configurations.v1
  //    )
  //    .then((response: SPHttpClientResponse) =>
  //        {
  //         console.log(response.json());
  //        return response.json();
  //         console.log(response.json())
  //        });
  //    }
     
  
  function vote(item: Result, results: Result[]) {
    console.log(item);
    console.log(results);
    console.log(props.opdata);
    
    // Here you probably want to manage
    // and return the modified data to the server.
  }
  
    // React.useEffect(()=>{_getListData()},[])
    
  return (
    <LeafPoll
      type='multiple'
      question='What you wanna ask?'
      results={resData}
      theme={customTheme}
      onVote={vote}
      isVoted={false}
    />
  )
}
export default Poleelement;


