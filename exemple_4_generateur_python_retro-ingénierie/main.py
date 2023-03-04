#!/usr/bin/python3
import ast

with open("C.py", "r") as f:
    code = f.read()

tree = ast.parse(code)
node = tree.body[0]

if (
    isinstance(node, ast.Expr)
    and isinstance(node.value, ast.Call)
    and isinstance(node.value.func, ast.Name)
):
    fct_arg = ""
    for arg in node.value.args:
        if isinstance(arg, ast.Str):
            fct_arg = arg.s
            break
    result = f"""{node.value.func.id}("{fct_arg}")\n"""

with open("C.py", "w") as f:
    f.write(result)

print(result)
