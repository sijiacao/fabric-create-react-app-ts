import * as React from "react";

import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Breadcrumb } from "office-ui-fabric-react/lib/Breadcrumb";
// import * as exampleStylesImport from "office-ui-fabric-react/lib/common/_exampleStyles.scss";
// const exampleStyles: any = exampleStylesImport;
// import { autobind } from "office-ui-fabric-react/lib/Utilities";

class App extends React.Component<any, any> {
  // constructor(props) {
  //   super(props);
  //   this._onBreadcrumbItemClicked = this._onBreadcrumbItemClicked.bind(this);
  // }

  // _onBreadcrumbItemClicked(evt<any>) {
  //   console.log(`Breadcrumb ${evt.name} been clicked!`);
  // }

  render() {
    return (
      <Fabric className="App">
        <DefaultButton onClick={() => alert("clicked")}> Hi </DefaultButton>
        <div style={{ display: "inline-block" }}>
          <Breadcrumb
            items={[
              {
                text: "Files",
                key: "Files"
                // onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 1",
                key: "f1"
                // onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 2",
                key: "f2"
                // onClick: this._onBreadcrumbItemClicked
              },
              {
                text: "This is folder 3",
                key: "f3"
                // onClick: this._onBreadcrumbItemClicked
              }
              // {
              //   text: "This is folder 4",
              //   key: "f4",
              //   onClick: this._onBreadcrumbItemClicked
              // },
              // {
              //   text: "This is folder 5",
              //   key: "f5",
              //   onClick: this._onBreadcrumbItemClicked,
              //   isCurrentItem: true
              // }
            ]}
            // Returning undefined to OnReduceData tells the breadcrumb not to shrink
            // onReduceData={this._returnUndefined}
            maxDisplayedItems={3}
            ariaLabel={"Website breadcrumb"}
          />
        </div>
      </Fabric>
    );
  }
}

export default App;
