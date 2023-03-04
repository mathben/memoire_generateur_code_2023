#!/usr/bin/python3
filename = "C.py"

with open(filename, "r") as f:
    s_code = f.read()


def generator_generator(s_code):
    s_code = s_code.replace("\n", "\\n")
    code = f'with open("{filename}", "w") as f:\n'
    code += f"""    f.write('{s_code}')\n"""
    return code


with open("generateur.py", "w") as f:
    f.write(generator_generator(s_code))
