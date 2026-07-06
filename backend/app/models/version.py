from app.extensions.extensions import db


class Version(db.Model):

    __tablename__="versions"

    id=db.Column(

        db.Integer,

        primary_key=True

    )

    project_id=db.Column(

        db.Integer,

        db.ForeignKey("projects.id"),

        nullable=False

    )

    version=db.Column(

        db.Integer,

        default=1

    )

    data=db.Column(

        db.Text

    )

    created_at=db.Column(

        db.DateTime,

        server_default=db.func.now()

    )