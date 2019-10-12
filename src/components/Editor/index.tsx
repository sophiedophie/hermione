import * as React from 'react';
import EditorJS from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';

const initialData = {
  time: new Date(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Enter your title here",
        level: 1
      }
    },
    {
      type: "paragraph",
      data: {
        text:
          "Please share how you thought from the book."
      }
    },
  ],
};

export default (props) => {
  const [data, setData] = React.useState('');
  return (
    <EditorJS
      data={initialData}
      tools={EDITOR_JS_TOOLS}
    />
  );
};
