import os
import re
import shutil
import subprocess


def generator_generator(s_code):
    s_code = s_code.replace("\n", "\\n")
    code = f'with open("{filename}", "w") as f:\n'
    code += f"""    f.write('{s_code}')\n"""
    return code


# # Copier
filename_generateur = "generateur.py"
filename = "C.py"
dirname = os.path.dirname(__file__)
# Incrémentation du chiffre sur le nom du répertoire de destination
dirname_to = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    re.sub(
        r"(\d+)",
        lambda m: str(int(m.group(1)) + 1),
        os.path.basename(os.path.dirname(__file__)),
    ),
)
base_dirname_to = os.path.basename(dirname_to)
filename_to = os.path.join(dirname_to, filename)
main_to = os.path.join(dirname_to, os.path.basename(__file__))
filename_generateur_to = os.path.join(dirname_to, filename_generateur)
print(f"Copié '{dirname_to}'")
shutil.copytree(dirname, dirname_to, dirs_exist_ok=True)
# # Étudier
print("Étudier")
# ## Lire
with open(filename_to, "r") as f:
    code = f.read()
# ## Documentation
README_file = os.path.normpath(
    os.path.join(os.path.dirname(__file__), "..", "README.md")
)
with open(README_file, "r") as f:
    str_update = f"\n[{base_dirname_to}]({base_dirname_to}) est une copie!\n"
    doc = f.read()
    if str_update not in doc:
        doc += str_update
with open(README_file, "w") as f2:
    f2.writelines(doc)
# # Modifier
print("Modifier")
with open(filename_generateur, "w") as f:
    f.write(generator_generator(code))
subprocess.run(["black", dirname_to], check=True)
subprocess.run(["isort", "--profile", "black", "-l", "79", dirname_to], check=True)
# # Utiliser
print("Utiliser")
subprocess.run(["python3", filename_generateur_to], cwd=dirname_to, check=True)
output = subprocess.check_output(["python3", main_to], cwd=dirname_to)
print(output.decode("utf-8"))
