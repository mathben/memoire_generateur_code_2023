import json

with open("uC.json") as f:
    metadata = json.load(f)

resultat = f"{metadata.get('fonction')}({metadata.get('argument')})"

with open("C.py", "w") as f:
    f.write(resultat)
    f.write("\n")

print(resultat)
