from app.extensions.extensions import db


class Publish(db.Model):

    __tablename__="publishes"

    id=db.Column(db.Integer,primary_key=True)

    project_id=db.Column(
        db.Integer,
        db.ForeignKey("projects.id"),
        nullable=False
    )

    domain=db.Column(db.String(255))

    status=db.Column(db.String(50))

    published_url=db.Column(db.String(500))

    created_at=db.Column(
        db.DateTime,
        server_default=db.func.now()
    )