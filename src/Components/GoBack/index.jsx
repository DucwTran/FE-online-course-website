import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export function GoBack(props) {
  const { target } = props;
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="mb-[30px]"
        type="primary"
        onClick={() => {
          navigate(target ? target : -1);
        }}
      >
        Back
      </Button>
    </div>
  );
}
