#!/usr/bin/python3
import json

with open("uC.json") as f:
    metadata = json.load(f)

result = f"{metadata.get('fonction')}({metadata.get('argument')})\n"

with open("C.py", "w") as f:
    f.write(result)

print(result)
