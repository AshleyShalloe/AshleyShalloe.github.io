#!/usr/bin/env python3
## imports
import yaml
import json
from glob import glob

## helper functions
def safe_load_yaml(path):
    with open(path) as infile:
        return yaml.safe_load(infile)

## convert yaml to json strings
in_yaml = glob("variant_definitions/variant_yaml/*.yml") + glob("res/*.yml")
out_json = [json.dumps(safe_load_yaml(x), indent=2) for x in in_yaml]

## write out to file
with open("variant_definitions.js", "w") as outfile:
    outfile.write("var variant_definitions = [")
    outfile.write(",\n".join(out_json))
    outfile.write("\n]")