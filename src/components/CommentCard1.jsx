import React from "react";
import Card from "react-bootstrap/Card";

const CommentCard1 = () => {
  return (
      <>
        <div id="comment-card">
          <Card style={{ width: "80%" }}>
            <Card.Body>
            <Card.Title>TATÁNA Z.</Card.Title>
              <Card.Text>
                “Milý a vstřícný personál (manželé). Každá návštěva je radost a
                výsledky jsou vždycky parádní.” KORNÉLIE M.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
  );
};

export default CommentCard1;