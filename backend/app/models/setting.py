from app.extensions.extensions import db


class Setting(db.Model):

    __tablename__="settings"

    id=db.Column(db.Integer,primary_key=True)

    user_id=db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    theme=db.Column(db.String(50))

    language=db.Column(db.String(50))

    notifications=db.Column(
        db.Boolean,
        default=True
    )