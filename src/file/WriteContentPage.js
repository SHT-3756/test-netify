import Prism from "prismjs";
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import "prismjs/themes/prism.css";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import React from "react";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

function WriteContentPage() {
  const editorRef = React.createRef();
  const onChangeEditorTextHandler = () => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <div>
      <Editor
        previewStyle="tab"
        // previewStyle="vertical"
        height="70vh"
        initialEditType="wysiwyg"
        initialValue="마크다운으로 내용을 입력하세요."
        ref={editorRef}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        onChange={onChangeEditorTextHandler}
      />

      <button variant="primary" type="submit" className="submitBtn">
        Post
      </button>
      <button variant="primary" className="cancelBtn">
        Cancel
      </button>
    </div>
  );
}

export default WriteContentPage;
