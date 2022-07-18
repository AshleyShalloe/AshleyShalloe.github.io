import json
from glob import glob
from pathlib import Path

## read in files
file_list = glob("constellations/*.json")
print(len(file_list), "json files detected")
json_dict = {j["label"]: j for j in [json.loads(Path(fl).read_text()) for fl in file_list]}
print(len(json_dict), "json files loaded")

## format for output
out_json = json.dumps(json_dict, indent=2)

## write out to file
with open("constellations.js", "w") as outfile:
    outfile.write("var constellationsArray = ")
    outfile.write(out_json)
    outfile.write("\n")
print("output written to constellations.js")
