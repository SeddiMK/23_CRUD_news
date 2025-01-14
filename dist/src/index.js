import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { App } from "@/components/App";
import "@/null.css";
import "@/index.css";
var root = ReactDOM.createRoot(document.getElementById("root"));
if (!root) {
    throw new Error("root not found");
}
root.render(_jsx(App, {}));
