import { useState } from "react";

export const Calculator = () => {
  const [value, setValue] = useState("");

  const handleButtonOperation = (e) => {
    e.preventDefault();

    if (value === "") return;

    if (!value.includes(e.target.value)) {
      setValue(value + e.target.value);
    }
  };

  const handleButtonChange = (e) => {
    e.preventDefault();
    setValue(value + e.target.value);
  };

  const handleActionOperation = (e) => {
    e.preventDefault();
    if (!isNaN(value)) return;
    const operation = operationSelect();
    toDoOperation(operation);
  };

  const toDoOperation = (operation) => {
    const values = value.split(operation);

    const [num1, num2] = values;

    switch (operation) {
      case "x":
        setValue(`${Number(num1) * Number(num2)}`);
        break;

      case "+":
        setValue(`${Number(num1) + Number(num2)}`);

        break;

      case "-":
        setValue(`${Number(num1) - Number(num2)}`);

        break;

      case "/":
        setValue(`${Number(num1) / Number(num2)}`);

        break;

      case "%":
        setValue(`${Number(num1) % Number(num2)}`);

        break;

      default:
        break;
    }
  };

  const operationSelect = () => {
    if (value.includes("x")) return "x";
    if (value.includes("+")) return "+";
    if (value.includes("-")) return "-";
    if (value.includes("/")) return "/";
    if (value.includes("%")) return "%";
  };

  const handleInputClean = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div>
      <h2 className="text-center font-black text-white text-3xl pt-5 italic">
        Calculadora App
      </h2>
      <div className="flex justify-center">
        <div className="mt-10 md:w-96 mb-10">
          <form className="pt-5 mb-10 text-white border rounded-2xl shadow-lg bg-gray-600">
            <div className="mb-5 h-14 text-center">
              <input
                className="h-14 w-full pt-6 text-right pr-10 bg-gray-600 text-white text-3xl"
                disabled
                placeholder="0"
                value={value}
              />
            </div>

            <div>
              <div className="flex justify-center">
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"clean"}
                  onClick={handleInputClean}
                >
                  AC
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"-"}
                  onClick={handleButtonOperation}
                >
                  +/-
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"%"}
                  onClick={handleButtonOperation}
                >
                  %
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"/"}
                  onClick={handleButtonOperation}
                >
                  /
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={7}
                  onClick={handleButtonChange}
                >
                  7
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={8}
                  onClick={handleButtonChange}
                >
                  8
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={9}
                  onClick={handleButtonChange}
                >
                  9
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"x"}
                  onClick={handleButtonOperation}
                >
                  x
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={4}
                  onClick={handleButtonChange}
                >
                  4
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={5}
                  onClick={handleButtonChange}
                >
                  5
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={6}
                  onClick={handleButtonChange}
                >
                  6
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"-"}
                  onClick={handleButtonOperation}
                >
                  -
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={1}
                  onClick={handleButtonChange}
                >
                  1
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={2}
                  onClick={handleButtonChange}
                >
                  2
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={3}
                  onClick={handleButtonChange}
                >
                  3
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"+"}
                  onClick={handleButtonOperation}
                >
                  +
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  className="m-3 rounded-full w-40 h-16 bg-slate-700 font-black shadow-xl"
                  value={0}
                  onClick={handleButtonChange}
                >
                  0
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"."}
                  onClick={handleButtonOperation}
                >
                  .
                </button>
                <button
                  className="m-3 rounded-full w-16 h-16 bg-slate-700 font-black shadow-xl"
                  value={"="}
                  onClick={handleActionOperation}
                >
                  =
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
