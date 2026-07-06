from .system_prompt import SYSTEM_PROMPT
from .business_prompt import BUSINESS_PROMPT
from .ui_prompt import UI_PROMPT
from .branding_prompt import BRANDING_PROMPT
from .animation_prompt import ANIMATION_PROMPT
from .content_prompt import CONTENT_PROMPT
from .features_prompt import FEATURES_PROMPT
from .seo_prompt import SEO_PROMPT
from .code_prompt import CODE_PROMPT
from .final_prompt import FINAL_PROMPT


MASTER_PROMPT = f"""
{SYSTEM_PROMPT}

{BUSINESS_PROMPT}

{UI_PROMPT}

{BRANDING_PROMPT}

{ANIMATION_PROMPT}

{CONTENT_PROMPT}

{FEATURES_PROMPT}

{SEO_PROMPT}

{CODE_PROMPT}

{FINAL_PROMPT}
"""