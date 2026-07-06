from app.extensions.extensions import db


class BusinessProfile(db.Model):

    __tablename__ = "business_profiles"

    id = db.Column(db.Integer, primary_key=True)

    project_id = db.Column(
        db.Integer,
        db.ForeignKey("projects.id"),
        nullable=False,
        unique=True
    )

    business_name = db.Column(db.String(255))

    business_description = db.Column(db.Text)

    target_customers = db.Column(db.Text)

    services = db.Column(db.Text)

    website_style = db.Column(db.String(255))

    color_theme = db.Column(db.String(255))

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )