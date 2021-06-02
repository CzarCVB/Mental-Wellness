import { useRef } from "react";
import "./QBar.css";

const QBar = (props) => {

    const searchInputRef = useRef();

  return (
    <div id="cover">
      <form id = "formz" method="get">
        <div class="tb">
          <div class="td">
            <input id = "inputz" type="text" placeholder="Search" required ref = {searchInputRef}/>
          </div>
          <div class="td" id="s-cover">
            <button id = "buttonz" type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QBar;
