import "./CommentCard.scss";
import Card from "react-bootstrap/Card";
function CommentCard() {
  return (
    <>
      <div id="comment-card">
        <Card style={{ width: "80%" }}>
          <Card.Body>
            <Card.Title>Nabízíme</Card.Title>
            <Card.Text>
              -"Nehtové studio bylo pro mě objevem! Profesionální přístup,
              skvělá péče a krásné výsledky. Doporučuji."
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CommentCard;
