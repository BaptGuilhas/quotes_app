import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaQuoteLeft, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa';
import { CSSTransition, SwitchTransition} from "react-transition-group";

import {shuffle,selectIdxer} from './IdxerSlice';
import {quotesList, bc_liste} from './Quotes.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Idxer.css';
  
export function Idxer() {
  const nodeRef = useRef(null);
    const idx_value = useSelector(selectIdxer);
    const dispatch = useDispatch();

    const divStyle_bckc = {
      backgroundColor: bc_liste[idx_value],
      transition: "background 2s"
    };
    const divStyle_color = {
      color: bc_liste[idx_value],
      transition: "color 2s"
    };

    const h_ref_twitter = "https://twitter.com/intent/tweet?text="+quotesList[idx_value][0]+" - "+quotesList[idx_value][1];

    const mode = "out-in";
    const [state, setState] = useState(true);
    return (
      <div id="main" style={divStyle_bckc}>
        <div id="quote-box" className="container-fluid " >
          <SwitchTransition mode={mode}>
            <CSSTransition
              key={state}
              nodeRef={nodeRef}
              addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames="fade">
              <div ref={nodeRef} className="button-container">
                <p id="text" style={divStyle_color}>
                  <FaQuoteLeft style={divStyle_color}/> {quotesList[idx_value][0]}
                  </p>
                <div id="author">
                  <p style={divStyle_color} id="textp">
                    {quotesList[idx_value][1]}
                  </p>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
          <div className="grid">
            <a id="icons">
              <FaInstagramSquare style={divStyle_color} size={40}/>
            </a>
            <a id="tweet-quote" href={h_ref_twitter} target="_blank">
              <FaTwitterSquare style={divStyle_color} size={40}/>
            </a> 
            <div className="divButton">
              <button
                id="new-quote"
                className="btn btn-default btn-primary"
                style={divStyle_bckc}
                aria-label="Decrement value"
                onClick={() => {
                  dispatch(shuffle());
                  setState((state) => !state);
                  ;}
                }>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }