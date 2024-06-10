import React from "react";

function GuessStatus({currentStatus, answer}){
  return (
    <>
        {
          currentStatus === "winner" ?
          <div class="happy banner">
          <p>
            Grattis, du vann med ordet: {answer}
          </p>
        </div>
        : 
        <div class="sad banner">
          <p>
            Tyvärr, du förlorade! Rätt svar var: {answer}
          </p>
        </div>}
      </>
  );
}

export default GuessStatus;