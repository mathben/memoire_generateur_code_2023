#!/usr/bin/python3
import json

from jinja2 import Template

with open("template") as f:
    template = Template(f.read())

with open("uC.json") as f:
    metadata = json.load(f)

result = template.render(
    fonction=metadata.get("fonction"), argument=metadata.get("argument")
)

with open("C.py", "w") as f:
    f.write(result)
    f.write("\n")

print(result)
