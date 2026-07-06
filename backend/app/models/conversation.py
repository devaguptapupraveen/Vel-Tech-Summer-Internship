from app.extensions.extensions import db


class Conversation(db.Model):

    __tablename__="conversations"

    id=db.Column(db.Integer,primary_key=True)

    project_id=db.Column(

        db.Integer,

        db.ForeignKey("projects.id"),

        nullable=False

    )

    role=db.Column(

        db.String(20),

        nullable=False

    )

    message=db.Column(

        db.Text,

        nullable=False

    )

    created_at=db.Column(

        db.DateTime,

        server_default=db.func.now()

    )