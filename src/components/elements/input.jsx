import React from 'react';
import styled from 'styled-components';

const Input = () => {
    return (
        <StyledWrapper>
            <input type="text" name="text" className="input" placeholder="Type your text" />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .input {
   background-color: #383838;
   border: 1ex solid;
   border-top-width: 1.7em;
   margin: 0;
   padding: 0;
   color: #383838;
   word-wrap: break-word;
   outline: 7px solid #383838;
   height: 30px;
   font-size: 17px;
   text-align: center;
   transition: all 1s;
   max-width: 190px;
   font-weight: bold;
   font-family: 'Courier New', Courier, monospace;
  }

  .input:hover {
   border-top-width: 0.2em;
   background-color: #f1e8e8;
  }

  .input:focus {
   border-top-width: 0.2em;
   background-color: #f1e8e8;
  }`;

export default Input;
