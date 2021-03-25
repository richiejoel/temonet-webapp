import React, {
  useState,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
} from "react";

import "./AutoTextArea.scss";

const AutoTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  const [textAreaWidth, setTextAreaWidth] = useState("auto");
  const [parentWidth, setParentWidth] = useState("auto");

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    setParentWidth(
      `${textAreaRef.current!.offsetWidth + textAreaRef.current!.offsetWidth}px`
    );
    setTextAreaWidth(
      `${
        textAreaRef.current!.offsetWidth +
        textAreaRef.current!.offsetWidth +
        textAreaRef.current!.offsetWidth +
        textAreaRef.current!.offsetWidth / 2
      }px`
    );
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setTextAreaWidth("auto");
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setParentWidth(
      `${textAreaRef.current!.offsetWidth + textAreaRef.current!.offsetWidth}px`
    );
    setText(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  //height: textAreaHeight,

  return (
    <div
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        id="input-title-text-new"
        {...props}
        ref={textAreaRef}
        rows={1}
        style={{
          height: textAreaHeight,
          width: textAreaWidth,
        }}
        placeholder="Text Title..."
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default AutoTextArea;
