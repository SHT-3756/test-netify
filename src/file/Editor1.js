import Prism from "prismjs";
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import "prismjs/themes/prism.css";

// import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import React from "react";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import tuiEditor from "tui-editor";

const editorRef = React.createRef();

// function youtubePlugin() {
//   editorRef.codeBlockManager.setReplacer(
//     "youtube",
//     (code) => `play youtube id: ${code}`
//   );
// }
// 유튜브 플러그인 시작
function youtubePlugin() {
  Editor.codeBlockManager.setReplacer("youtube", (youtubeId) => {
    // Indentify multiple code blocks
    const wrapperId = `yt${Math.random().toString(36).substr(2, 10)}`;

    // Avoid sanitizing iframe tag
    setTimeout(renderYoutube.bind(null, wrapperId, youtubeId), 0);

    return `<div id="${wrapperId}"></div>`;
  });
}

function renderYoutube(wrapperId, youtubeId) {
  const el = document.querySelector(`#${wrapperId}`);

  el.innerHTML = `<div class="toast-ui-youtube-plugin-wrap"><iframe src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

tuiEditor.defineExtension("myExt", (instance) => {
  instance.setMarkdown("# Hello");
});
tuiEditor.defineExtension("youtube", () => {
  tuiEditor.codeBlockManager.setReplacer(
    "yotube",
    (code) => `play youtube id: ${code}`
  );
});
const editor = new tuiEditor({
  el: document.querySelector("#editor"),
  initialEditType: "markdown",
  previewStyle: "vertical",
  height: "500px",
  exts: ["myExt", "yotube"],
});

// 유튜브 플러그인 끝
function Editor1() {
  return (
    <>
      {/* <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[
          colorSyntax,
          // youtubePlugin,
          [codeSyntaxHighlight, { highlighter: Prism }],
        ]}
      /> */}
      <div id="editor">ddd</div>
    </>
  );
}

export default Editor1;

//npm install -g @toast-ui/doc 를 설치
