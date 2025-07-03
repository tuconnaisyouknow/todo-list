import { useState } from "react";

export default function App() {
  return (
    <>
      <LegoBox>
        <Lego />
        <Lego color="red" size="md" />
        <Lego color="green" size="lg" counter={true} />
      </LegoBox>
      <br />
      <LegoBox>
        <Lego color="green" size="lg" />
        <Lego color="red" size="md" />
        <Lego />
      </LegoBox>
    </>
  )
}

const COLORS = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
};

const SIZE = {
  sm: "w-16",
  md: "w-32",
  lg: "w-64",
};

function LegoBox(props) {
  return <div className="p-4 flex flex-col gap-4">{props.children}</div>
}

function Lego({color = "blue", size = "sm", counter = false, onClick}) {
  const [value, setValue] = useState(0)

  return (
    <div 
      className={`h-16 flex items-center justify-center rounded-md ${COLORS[color]} ${SIZE[size]}`}
      onClick={() => {
        onClick?.("Test");
        if (counter) {
          setValue(value + 1);
        }
      }}
    >
      {counter ? value : null}
    </div>
  );
}
