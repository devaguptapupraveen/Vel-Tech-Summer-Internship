from app.extensions.extensions import db


class Asset(db.Model):

    __tablename__="assets"

    id=db.Column(

        db.Integer,

        primary_key=True

    )

    project_id=db.Column(

        db.Integer,

        db.ForeignKey("projects.id"),

        nullable=False

    )

    name=db.Column(

        db.String(255)

    )

    file_type=db.Column(

        db.String(100)

    )

    path=db.Column(

        db.String(500)

    )

    created_at=db.Column(

        db.DateTime,

        server_default=db.func.now()

    )