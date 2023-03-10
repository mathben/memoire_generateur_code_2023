import os
import re
import subprocess

filename = "main.py"
dirname = os.path.join(os.path.dirname(__file__), filename)
# Décrémentation du chiffre sur le nom du répertoire de destination
dirname_to = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    re.sub(
        r"(\d+)",
        lambda m: str(int(m.group(1)) - 1),
        os.path.basename(os.path.dirname(__file__)),
    ).strip("_évolué"),
    filename,
)

subprocess.run(["diff", dirname, dirname_to])
