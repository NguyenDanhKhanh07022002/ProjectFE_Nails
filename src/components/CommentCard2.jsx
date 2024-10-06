import React from "react";
import Card from "react-bootstrap/Card";

const CommentCard2 = () => {
    return (
        <div>
            <>
                <div id="comment-card">
                    <Card style={{ width: "80%" }}>
                        <Card.Body>
                        <Card.Title>EVA M.</Card.Title>
                            <Card.Text>
                                “Jsem nadšená z návštěvy. Postarali se o každý detail. Moje
                                nehty nikdy nevypadaly líp. Určitě se brzy vrátím.”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </>
        </div>
    );
};

export default CommentCard2;