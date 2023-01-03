import React, { useState } from "react";
import "../styles/faq.css";
import helpsvg from "../images/woman-ques.jpg";
import {BsFillArrowDownSquareFill } from "react-icons/bs";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
function Faq() {
  const [fclk, setFclk] = useState(false);
  const [sclk, setSclk] = useState(false);
  const [tclk, setTclk] = useState(false);
  const [frclk, setFrclk] = useState(false);
  return (
    <div className="help-bod">
      <div className="help-first">
        <div className="help-write">
          <h1>Help Section</h1>
          <p style={{ fontSize: "20px" }}>
            Contact us or read our FAQ section to know more about SheCan
          </p>
        </div>
        <div className="img-bod">
          <img
            src={helpsvg}
            alt=""
            style={{
              borderRadius: "30px",
              boxShadow:
                "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
            }}
          />
        </div>
      </div>
      <div className="help-second">
        <h1>FAQs</h1>

        <div className="help-box">
          <div className="f-l-h">
            <h2>What is SheCan?</h2>
            {fclk === true ? (
              <BsFillArrowUpSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setFclk(!fclk)}
              />
            ) : (
              <BsFillArrowDownSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setFclk(!fclk)}
              />
            )}
          </div>
          {fclk && (
            <div className="a-c-b">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.{" "}
            </div>
          )}
        </div>
        <div className="help-box">
          <div className="f-l-h">
            <h2> How do I ask a question on SheCan?</h2>
            {sclk === true ? (
              <BsFillArrowUpSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setSclk(!sclk)}
              />
            ) : (
              <BsFillArrowDownSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setSclk(!sclk)}
              />
            )}
          </div>
          {sclk && (
            <div className="a-c-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </div>
          )}
        </div>
        <div className="help-box">
          <div className="f-l-h">
            <h2>How do I write an answer on SheCan?</h2>
            {tclk === true ? (
              <BsFillArrowUpSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setTclk(!tclk)}
              />
            ) : (
              <BsFillArrowDownSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setTclk(!tclk)}
              />
            )}
          </div>
          {tclk && (
            <div className="a-c-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </div>
          )}
        </div>
        <div className="help-box">
          <div className="f-l-h">
            <h2> Is this app free to use?</h2>
            {frclk === true ? (
              <BsFillArrowUpSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setFrclk(!frclk)}
              />
            ) : (
              <BsFillArrowDownSquareFill
                size={30}
                style={{ fill: "#f78bd1", cursor: "pointer" }}
                onClick={() => setFrclk(!frclk)}
              />
            )}
          </div>
          {frclk && (
            <div className="a-c-b">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
