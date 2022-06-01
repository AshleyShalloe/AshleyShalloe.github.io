from urllib.parse import urlencode
from urllib.request import urlopen
import base36
import json

class Compressy(object):
    '''
    You can't fit the entire SARS-CoV-2 genome into a URL parameter. You just can't.
    Not even with compression. Even if we just encode the differences from the reference!
    
    Can't be done*
    
    Instead, since we know that our web application only cares about specific positions,
    we can just encode that and shove it in a URL parameter.
    
    Suddenly we're looking at <300 positions instead of 29903, which helps matters greatly.
    
    Usage: 
        foobar = Compressy(seq_id="foobar", seq="CATCATCAT)
        foobar.link
    
    *I couldn't figure it out
    '''
    def __init__(self, *, seq_id, seq):
        self.website = "https://ashleyshalloe.github.io/undefined.html"
        self.var_defs = (compressy_var_defs if "compressy_var_defs" in globals() else self.__get_var_defs()) ## use the global if we have it, or generate it if we don't
        self.defining_positions = self.__get_set_of_defining_positions(self.var_defs)
        self.input_seq_id = seq_id
        self.input_seq = seq
        self.encode = self.__generate_base36_string(self.defining_positions, self.input_seq)
        self.encode_url = self.__generate_url_params(self.input_seq_id, self.encode)
        self.link = self.website + "?" + self.encode_url
    
    def __get_var_defs(self):
        '''
        retrieve variant definitions and load into dictionary
        '''
        ## is this going to download a webpage every single loop? Maybe don't do that
        ## maybe cache it in a global
        global compressy_var_defs
        var_defs = urlopen("https://raw.githubusercontent.com/AshleyShalloe/AshleyShalloe.github.io/main/res/variant_definitions.js") 
        var_defs = "".join([x.decode("utf-8").strip() for x in var_defs])
        var_defs = var_defs.replace("var variant_definitions = ", "") ## remove the javascript variable declaration
        var_defs = json.loads(var_defs)
        compressy_var_defs = var_defs
        return var_defs
    
    def __get_set_of_defining_positions(self, var_defs):
        '''
        get the set of lineage defining positions
        '''
        set_of_defining_positions = []

        for x in var_defs:
            positions_in_def = [y["one-based-reference-position"] for y in x["variants"] if y["type"] == "SNP"]
            mnp_positions_in_def = [list(range(y["one-based-reference-position"], y["one-based-reference-position"]+len(y["reference-base"]))) for y in x["variants"] if y["type"] == "MNP"]
            for mpid in mnp_positions_in_def:
                for m in mpid:
                    positions_in_def.append(m)
            set_of_defining_positions = list(set(set_of_defining_positions + positions_in_def))
        
        set_of_defining_positions.sort()
        return set_of_defining_positions
    
    def __generate_base36_string(self, set_of_defining_positions, input_seq):
        '''
        generates a string of base36 encoded positions, delimited with the nucleotide at that position
        '''
        pos_base_dict = {}

        for pos in set_of_defining_positions:
            pos_base_dict[pos] = input_seq[pos-1]
            

        b36_pos_base_dict = {}

        for k,v in pos_base_dict.items():
            b36_pos_base_dict[base36.dumps(k)] = v

        outstring = ""

        for k, v in b36_pos_base_dict.items():
            outstring += k
            outstring += v

        return outstring
    
    def __generate_url_params(self, input_seq_id, base36_encoded_string):
        '''
        generates the final ?id=foo&seq=bar string
        '''
        return urlencode({"id": input_seq_id, "seq": base36_encoded_string})