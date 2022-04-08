import React from "react";

// import "codemirror/lib/codemirror.css";
// codemirror 스타일
// import "highlight.js/styles/github.css";
// code block highlight 스타일
import "tui-editor/dist/tui-editor.css";
// 에디터 기본 UI 스타일
import "tui-editor/dist/tui-editor-contents.css";
// 에디터 콘텐츠 영역 스타일
import Editor from "tui-editor";

const editor = new Editor({
  // 에디터 인스턴스 생성
  el: document.querySelector("#customEditor"),
  initialEditType: "markdown",
  previewStyle: "vertical",
  height: "500px",
});
function Custom() {
  return <div id="customEditor"></div>;
}

export default Custom;
