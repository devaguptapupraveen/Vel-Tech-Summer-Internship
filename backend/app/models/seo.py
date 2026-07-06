from app.extensions.extensions import db


class SEO(db.Model):

    __tablename__="seo"

    id=db.Column(

        db.Integer,

        primary_key=True

    )

    project_id=db.Column(

        db.Integer,

        db.ForeignKey("projects.id"),

        nullable=False

    )

    meta_title=db.Column(db.String(255))

    meta_description=db.Column(db.Text)

    keywords=db.Column(db.Text)

    open_graph=db.Column(db.Text)

    structured_data=db.Column(db.Text)