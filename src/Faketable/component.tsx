import * as React from 'react';
// import { parse } from 'papaparse';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Grid, Headline } from './styles';

export type OwnProps = {
};

export type StateProps = {
};

export type DispatchProps = {
  // downloadAssets(): Action<void>;
};

export interface OutputProps {
  draggable: boolean;
  versionModalOpen: boolean;
  onDragStart: React.DragEventHandler<HTMLDivElement>;
  onDragEnd: React.DragEventHandler<HTMLDivElement>;
  onDrop: React.DragEventHandler<HTMLDivElement>;
}

export type EventHandlers = {
  onDragStart: React.DragEventHandler<HTMLDivElement>;
  onDragEnd: React.DragEventHandler<HTMLDivElement>;
  onDrop: React.DragEventHandler<HTMLDivElement>;
};


export type State = {
  result: string;
};

export type Props = RouteComponentProps<{ projectId?: string }>
  & OwnProps
  & StateProps
  & DispatchProps;

export default class Faketable extends React.PureComponent<Props, State> {
  state = {
    result: '',
  };

  files: FileList | [] = [];

  componentDidMount() {
    const inputElement: any = document.getElementById('input') || <div>no file found</div>;
    inputElement.addEventListener('drop', handleFiles, false);
    
    function handleFiles() {
      console.log(inputElement);
    }
  }

  // renderData() {
  //   if (document.getElementById('input')) {
  //     // @ts-ignore
  //     const fileInput = document.getElementById('input').files[0];
  //     const parsedResults = parse(fileInput, {
  //       worker: true,
  //       step: function(results) {
  //         console.log('Row: ', results.data);
  //       },
  //     });
  //     return (
  //       parsedResults.data.forEach(datum => (
  //         <Cell>
  //           {datum}
  //         </Cell>
  //       ))
  //     );
  //   }
  // }

  ref: React.RefObject<HTMLInputElement> = React.createRef();

  onDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files instanceof FileList) {
      const [file] = Array.from(e.dataTransfer.files);
      console.log(file);
      const reader = new FileReader();
      // return (
      //   parsedResults.data.forEach(item => (
      //     <Cell>
      //       {item}
      //     </Cell>
      //   ))
      // );
      reader.onload = (e) => {
        // @ts-ignore
        console.log('e.target.result', e.target.result);
        // @ts-ignore
        this.setState({ result: e.target.result });
      }
      console.log(file);
      reader.readAsText(file);
      // readFile('./top-1m.csv', (err, data) => {
      //   if (err) throw err;
      //   console.log(data);
      // });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Headline>Faketable Data</Headline>
          <form>
            <input onDrop={this.onDrop} id="input" type="file">
            
            </input>
          </form>
          <Grid>
            {/* {this.renderData()} */}
            {/* <Cell>Id</Cell>
            <Cell>Full Name</Cell>
            <Cell>Country</Cell>
            <Cell>Created at</Cell>
            <Cell>Email</Cell>
            <Cell>0</Cell>
            <Cell>Aaron Kris</Cell>
            <Cell>Philippines</Cell>
            <Cell>1991-05-23T14:19:51</Cell>
            <Cell>Ophelia_Mitchell@karley.name</Cell>
            <Cell>1</Cell>
            <Cell>Simeon McLaughlin</Cell>
            <Cell>Singapore</Cell>
            <Cell>2012-03-07T00:08:36</Cell>
            <Cell>Sabrina_Barton@torey.net</Cell>
            <Cell>2</Cell>
            <Cell>Kelsie Shanahan</Cell>
            <Cell>Brazil</Cell>
            <Cell>1985-03-10T20:13:04</Cell>
            <Cell>Karianne@salvatore.biz</Cell> */}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
