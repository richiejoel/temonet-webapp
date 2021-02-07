import React, { useState } from "react";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import INITIAL_CONTENT from "./contentExample";
require("megadraft/dist/css/megadraft.css");

function Example() {
  const [editorState, setEditorState] = useState(
    editorStateFromRaw(INITIAL_CONTENT)
  );

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <MegadraftEditor
      editorState={editorState}
      onChange={onChange}
      placeholder="Start typing"
      // readOnly={true}
    />
  );
}

/*class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(INITIAL_CONTENT) };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    return (
      <MegadraftEditor
        editorState={this.state.editorState}
        onChange={this.onChange}
        placeholder="Start typing"
        // readOnly={true}
      />
    );
  }
}*/

export default Example;
