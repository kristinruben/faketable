import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Cell, Container, Grid, Headline } from './styles';

export type OwnProps = {
};

export type StateProps = {
};

export interface OutputProps {
  onDrop: React.DragEventHandler<HTMLDivElement>;
}

export type State = {
  currentPage: number;
  recordsCount: number;
  result: ReadonlyArray<ReadonlyArray<string>>;
};

export type Props = RouteComponentProps<{}>
  & OwnProps
  & StateProps;

export default class Faketable extends React.PureComponent<Props, State> {
  state = {
    currentPage: 2,
    recordsCount: 0,
    result: [['']],
  };

  files: FileList | [] = [];

  componentDidMount() {
    const inputElement: any = document.getElementById('input') || <div>no file found</div>;
    inputElement.addEventListener('drop', handleFiles, false);
    
    function handleFiles() {
      console.log(inputElement);
    }
  }

  componentDidUpdate() {
    if (this.state.result.length > 0) {
      this.fetchSites(this.state.result);
    }
  }

  componentWillUnmount() {
    const inputElement: any = document.getElementById('input') || <div>no file found</div>;
    inputElement.removeEventListener('drop');
  }

  

  ref: React.RefObject<HTMLInputElement> = React.createRef();

  onDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files instanceof FileList) {
      const [file] = Array.from(e.dataTransfer.files);
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        // @ts-ignore
        const formattedResult = e.target.result
          .split('\n')
          .map((element: string) => element.split(','))
          .splice(0, 500);
        console.log('formattedResult: ', formattedResult);
        this.setState({ result: formattedResult });
        this.setState({ recordsCount: formattedResult.length });
        // this.setState({ currentPageNumber:  })
      }
      reader.readAsText(file);
      console.log('this.state', this.state);
    }
  }

  fetchSites = (result: any) => {
    result.map((row: any) => fetch(`https://${row[1]}`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
      })
      .then(myJSON => {
        console.log(JSON.stringify(myJSON));
      })
      .catch(error => console.log(error))
      );
    }

  renderHeaders() {
    return (
      <React.Fragment>
        <Cell>
          Rank
        </Cell>
        <Cell>
          Site
        </Cell>
        <Cell>
          HTTP Response Code
        </Cell>
      </React.Fragment>
    );
  }


  renderContents() {
    const PAGE_SIZE: number = 50;
    const { currentPage, result } = this.state;
    const currentPageStartPosition = (currentPage * PAGE_SIZE) - PAGE_SIZE;
    const currentPageEndPosition = currentPageStartPosition + PAGE_SIZE;

    const resultsForCurrentPage = result.slice(currentPageStartPosition, currentPageEndPosition);
    return resultsForCurrentPage.map((row, index) => (
      <React.Fragment key={index}>
        <Cell>
          {row[0]}
        </Cell>
        <Cell>
          {row[1]}
        </Cell>
        <Cell>
          woot
        </Cell>
      </React.Fragment>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Headline>Faketable</Headline>
          <form>
            <input onDrop={this.onDrop} id="input" type="file" />
          </form>
          <Grid>
            {this.renderHeaders()}
            {this.renderContents()}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}
