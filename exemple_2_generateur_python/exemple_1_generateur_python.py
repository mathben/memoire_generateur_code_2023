import json
from jinja2 import Template

with open("template") as f:
    template = Template(f.read())

with open("uC.json") as f:
    metadata = json.load(f)

resultat = template.render(fonction=metadata.get("fonction"), argument=metadata.get("argument"))

with open("C.py", "w") as f:
    f.write(resultat)
    f.write("\n")

print(resultat)
