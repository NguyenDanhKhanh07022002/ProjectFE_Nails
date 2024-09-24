import "./CommentCard.scss";
import Card from "react-bootstrap/Card";
function CommentCard() {
  return (
    <>
      <div id="comment-card">
        <Card style={{ width: "80%" }}>
          <Card.Body>
            <Card.Title>Eva Scalet</Card.Title>
            <Card.Text>
              -"I když jsou noví. Umí. Doporučuji všem kamarádkám."
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CommentCard;
