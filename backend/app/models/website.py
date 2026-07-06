from app.extensions.extensions import db


class Website(db.Model):

    __tablename__="websites"

    id=db.Column(

        db.Integer,

        primary_key=True

    )

    project_id=db.Column(

        db.Integer,

        db.ForeignKey("projects.id"),

        nullable=False

    )

    html=db.Column(db.Text)

    css=db.Column(db.Text)

    javascript=db.Column(db.Text)

    json_schema=db.Column(db.Text)

    created_at=db.Column(

        db.DateTime,

        server_default=db.func.now()

    )