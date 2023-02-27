def generator_generator():
    code = 'with open("C.py", "w") as f:\n'
    code += """    f.write('print("Hello, World!")\\n')\n"""
    return code


with open("generateur.py", "w") as f:
    f.write(generator_generator())
