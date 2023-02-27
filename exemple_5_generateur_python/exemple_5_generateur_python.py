import ast

with open("C.py", "r") as f:
    code = f.read()

tree = ast.parse(code)
node = tree.body[0]

if isinstance(node, ast.Expr) and isinstance(node.value, ast.Call) and isinstance(node.value.func, ast.Name):
    args = []
    for arg in node.value.args:
        if isinstance(arg, ast.Str):
            args.append(arg.s)
    resultat = f"""{node.value.func.id}("{'", "'.join(args)}")\n"""

with open("C.py", "w") as f:
    f.write(resultat)
