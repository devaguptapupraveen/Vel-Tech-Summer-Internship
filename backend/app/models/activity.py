from app.extensions.extensions import db


class Activity(db.Model):

    __tablename__="activities"

    id=db.Column(db.Integer,primary_key=True)

    user_id=db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    activity=db.Column(db.Text)

    created_at=db.Column(
        db.DateTime,
        server_default=db.func.now()
    )