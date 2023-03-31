// import * as React from 'react';
// import styles from './Opinionpole.module.scss';
import { IOpinionpoleProps } from './IOpinionpoleProps';
// import { escape } from '@microsoft/sp-lodash-subset';

// export default class Opinionpole extends React.Component<IOpinionpoleProps, {}> {
//   public render(): React.ReactElement<IOpinionpoleProps> {
//     const {
//       description,
//       isDarkTheme,
//       environmentMessage,
//       hasTeamsContext,
//       userDisplayName
//     } = this.props;

//     return (
//       <section >
        
       
//       </section>
//     );
//   }
// }
import * as React from 'react'
import Poleelement from './Poleelement'
import { SPFI } from '@pnp/sp';
import { getSP } from './pnpConfig';
import { ICamlQuery } from '@pnp/sp/lists';

const Opinionpole = (props:IOpinionpoleProps) => {
  const [Opiniondata, setOpinionData] = React.useState<any>()
  const caml: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title' /><FieldRef Name='QuestionId' /><FieldRef Name='QuestionName' /><FieldRef Name='Choices' /></ViewFields></View>",
  };
 

  const getOpininonPole = async () => {
    let _sp: SPFI = getSP(props.context);
    const list = await _sp.web.lists.getByTitle("OpinionPole");
    var r = await list.getItemsByCAMLQuery(caml);
    setOpinionData(r);
    console.log(Opiniondata);
  };
  React.useEffect(() => {
    const execute = async () => {
      await getOpininonPole();
     
    };
    execute();
  }, []);
  return (
    <div>
      <Poleelement opdata={Opiniondata}/>
    </div>
  )
}

export default Opinionpole;
