import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";
// import "tui-image-editor/dist/tui-image-editor.css";

//이미지 에디터
// import ImageEditor from "@toast-ui/react-image-editor";

//이미지
// import zang from "./img/zang.jpg";
// import Editor1 from "./file/Editor1";
// import Viewer1 from "./file/Viewer1";
// import Custom from "./file/Custom";
// import InfinityScroll from "./file/InfinityScroll";
// import { Viewer } from "@toast-ui/react-editor";

import WriteContentPage from "./file/WriteContentPage";

function App() {
  const myTheme = {
    // Theme object to extends default dark theme.
  };
  const editorRef = React.createRef();

  const handleClickButton = () => {
    const editorInstance = editorRef.current.getInstance();

    editorInstance.flipX();
  };

  const handleMousedown = () => {
    console.log("Mouse button is downed!");
  };

  const handleClick = () => {
    editorRef.current.getInstance().exec("Bold");
  };
  // const handleClickButton = () => {
  //   editorRef.current.getRootElement().classList.add("my-editor-root");
  // };
  const handleFocus = () => {
    console.log("focus");
  };
  return (
    <>
      {/* <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        onFocus={handleFocus}
      /> */}
      {/* <Viewer plugins={codeSyntaxHighlight} /> */}
      {/* <button onClick={handleClickButton}>볼드</button> */}

      {/* <ImageEditor
        includeUI={{
          loadImage: {
            path: zang,
            name: "SampleImage",
          },
          theme: myTheme,
          menu: ["shape", "filter"],
          initMenu: "filter",
          uiSize: {
            width: "1000px",
            height: "700px",
          },
          menuBarPosition: "bottom",
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
        onMousedown={handleMousedown}
      />
      <button onClick={handleClickButton}>좌우반전</button> */}
      {/* <Editor1 /> */}
      <WriteContentPage />
      {/* <ContentPage1 /> */}
      {/* <Custom /> */}

      {/* <InfinityScroll /> */}
    </>
  );
}

export default App;
