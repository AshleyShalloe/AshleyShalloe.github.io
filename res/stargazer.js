'use strict'

function highlightMatchMismatch(){
    for (var i=0; i<document.getElementsByClassName("query_data_row").length; i++){
        var ref_data_row = document.getElementsByClassName("query_data_row")[i].parentElement.getElementsByClassName("ref_data_row")[0]
        for (var j=0; j<document.getElementsByClassName("query_data_row")[i].cells.length; j++){
            var refbase = ref_data_row.cells[j].getElementsByClassName("base")[0].innerText
            var querybase = document.getElementsByClassName("query_data_row")[i].cells[j].innerText
            // if all gaps, then condense to a single gap
            if (querybase.replaceAll("-", "").length == 0){
                querybase = "-"
            }
            if (refbase == querybase){
                document.getElementsByClassName("query_data_row")[i].cells[j].classList.add("match")
            }
            else{
                document.getElementsByClassName("query_data_row")[i].cells[j].classList.add("mismatch")
            }
        }
    }
}

var codon_to_amino_acid_dict = {
    'TTT' : 'F', 'TTC' : 'F', 'TTA' : 'L', 'TTG' : 'L',
    'CTT' : 'L', 'CTC' : 'L', 'CTA' : 'L', 'CTG' : 'L',
    'ATT' : 'I', 'ATC' : 'I', 'ATA' : 'I', 'ATG' : 'M',
    'GTT' : 'V', 'GTC' : 'V', 'GTA' : 'V', 'GTG' : 'V',
    'TCT' : 'S', 'TCC' : 'S', 'TCA' : 'S', 'TCG' : 'S',
    'CCT' : 'P', 'CCC' : 'P', 'CCA' : 'P', 'CCG' : 'P',
    'ACT' : 'T', 'ACC' : 'T', 'ACA' : 'T', 'ACG' : 'T',
    'GCT' : 'A', 'GCC' : 'A', 'GCA' : 'A', 'GCG' : 'A',
    'TAT' : 'Y', 'TAC' : 'Y', 'TAA' : '*', 'TAG' : '*',
    'CAT' : 'H', 'CAC' : 'H', 'CAA' : 'Q', 'CAG' : 'Q',
    'AAT' : 'N', 'AAC' : 'N', 'AAA' : 'K', 'AAG' : 'K',
    'GAT' : 'D', 'GAC' : 'D', 'GAA' : 'E', 'GAG' : 'E',
    'TGT' : 'C', 'TGC' : 'C', 'TGA' : '*', 'TGG' : 'W',
    'CGT' : 'R', 'CGC' : 'R', 'CGA' : 'R', 'CGG' : 'R',
    'AGT' : 'S', 'AGC' : 'S', 'AGA' : 'R', 'AGG' : 'R',
    'GGT' : 'G', 'GGC' : 'G', 'GGA' : 'G', 'GGG' : 'G'
}

codon_to_amino_acid_dict["---"] = "-"

var global_aliases = {
    "spike": "s", "s": "spike",
    "envelope": "e", "e": "envelope",
    "membrane": "m", "m": "membrane",
    "nucleocapsid": "n", "n": "nucleocapsid"
}

function resolve_ambiguous_cds(cds, aa_pos, features_dict){
    var cds = cds.toLowerCase()

    if (cds in features_dict){
        if (features_dict[cds].length == 3){
            cds, aa_pos = resolve_ambiguous_cds(features_dict[cds][2], features_dict[cds][0]+aa_pos-1, features_dict)
        }
        return [cds, aa_pos]
    }

    if ((cds in global_aliases) && (global_aliases[cds] in features_dict)){
        return [global_aliases[cds], aa_pos]
    }

    if (parseInt(cds[0])){
        cds = "orf" + cds
        if (cds in features_dict){
            return [cds, aa_pos]
        }
    }

    var prefix = cds.slice(0,-2)
    var count = 0
    var potential = [] // [key for key in features_dict if key.startswith(prefix)]
    
    for (var key in features_dict){
        if (key.startsWith(prefix)){
            potential.push(key)
        }
    }

    for (var k in potential){
        var key = potential[k]
        var aa_length = (features_dict[key][1] + 1 - features_dict[key][0])/3
        if (count <= aa_pos < aa_length){
            return [key, aa_pos]
        }
        aa_pos -= aa_length
        aa_pos = parseInt(aa_pos)
        if (aa_pos < 0){
            return [cds, None]
        }
    }

    return cds, None
}

function get_nuc_position_from_aa_description(cds, aa_pos, features_dict){
    `
    given a CDS (eg. S) and the number of an amino acid in it, get the
    1-based start position of that codon in ref coordinates
    nuc_pos is an integer which is 1-based start pos of codon
    `
    // if (aa_pos is None or cds not in features_dict.keys()){
    //     console.error("I don't know about cds: %s \n" % cds)
    //     console.error("please use one of: %s" % ",".join(features_dict.keys()))
    // }

    var cds_tuple = features_dict[cds]
    var nuc_pos = cds_tuple[0] + ((aa_pos - 1) * 3)

    // if (nuc_pos > cds_tuple[1]){
    //     console.error("invalid amino acid position for cds %s : %d" % (cds, aa_pos))
    // }

    return parseInt(nuc_pos)
}

function variant_to_variant_record(l, refseq, features_dict){
    `
    convert a variant in one of the following formats
    snp:T6954C
    nuc:T6954C
    del:11288:9
    aa:orf1ab:T1001I
    aa:orf1ab:T1001del
    aa:orf1ab:T1001 # this is for ambiguous AA change, NOT DELETION
    to a dict
    `
    // console.log("Parsing variant", l)
    var info = {}

    if (l.includes("#")){
        l = l.split("#")[0].strip()
        if (l == ""){
            return info
        }
    }
    var lsplit = l.split(":")

    if (l.includes("+")){
        var m = l.match(/[aa:]*(?<cds>\w+):(?<pos>\d+)\+(?<alt_allele>[a-zA-Z]+)/)
        // if (!m){
        //     console.error("Warning: couldn't parse the following string: %s\n" % l)
        // }
        info = m.groups
        info["type"] = "ins"
        info["ref_allele"] = ""
        if (!(info["cds"] in ["snp", "nuc"])){
            var [cds, pos] = resolve_ambiguous_cds(info["cds"], info["pos"], features_dict)
            info["ref_start"] = parseInt(get_nuc_position_from_aa_description(cds, pos, features_dict))
            info["name"] = `${info["cds"]}:${info["ref_allele"]}${info["pos"]}+${info["alt_allele"]}` // cds:refpos+alt
        }
        else{
            info["ref_start"] = info["pos"]
            info["name"] = l
        }
        console.log("Warning: found variant of type insertion, which will be ignored during typing")
    }
    else if (["snp", "nuc"].includes(lsplit[0])){
        info = {"name": l, "type": "snp"}
        m = l.slice(4).match(/(?<ref_allele>[ACGTUN]+)(?<ref_start>\d+)(?<alt_allele>[AGCTUN]*)/)
        // if (!m){
        //     console.error("Warning: couldn't parse the following string: %s\n" % l)
        // }
        info = Object.assign(info, m.groups) // seems more straightforward than destructuring, no?
        info["ref_start"] = parseInt(info["ref_start"])
        var ref_allele_check = refseq[info["ref_start"] - 1]

        if ((info["ref_allele"] != '?') && (info["ref_allele"] != ref_allele_check)){
            console.error(
                `variants file says reference nucleotide at position ${info["ref_start"]} is ${info["ref_allele"]}, but reference sequence has ${ref_allele_check}, context ${refseq.slice(info["ref_start"] - 4,info["ref_start"] + 3)}`
            )
        }
    }

    else if (lsplit[0] == "del"){
        var length = parseInt(lsplit[2])
        info = {
            "name": l, 
            "type": lsplit[0], 
            "ref_start": parseInt(lsplit[1]), 
            "length": length,
            "ref_allele": refseq.slice(parseInt(lsplit[1]) - 1, parseInt(lsplit[1]) + length - 1), 
            "space": "nuc"
        }
    }

    else{
        var m = l.match(/[aa:]*(?<cds>\w+):(?<ref_allele>[a-zA-Z-*]+)(?<aa_pos>\d+)(?<alt_allele>[a-zA-Z-*]*)/)
        // if (!m){
        //     console.error("Warning: couldn't parse the following string: %s\n" % l)
        //     return info
        // }

        info = m.groups
        info["aa_pos"] = parseInt(info["aa_pos"])
        info["name"] = `${info["cds"]}:${info["ref_allele"]}${info["aa_pos"]}${info["alt_allele"]}` // cds:refposalt
        info["type"] = "aa"

        var [cds, aa_pos] = resolve_ambiguous_cds(info["cds"], info["aa_pos"], features_dict)
        var ref_start = get_nuc_position_from_aa_description(cds, aa_pos, features_dict)

        var ref_allele = refseq.slice(ref_start - 1, ref_start - 1 + (3*(info["ref_allele"]).length))
        // ref_allele_check = ref_allele.translate() // would presumably translate if SeqIO were a thing here
        // if ((info["ref_allele"] != '?') && (info["ref_allele"] != ref_allele_check)){
        //     console.error(
        //         `variants file says reference amino acid in CDS ${cds} at position ${aa_pos} is ${info["ref_allele"]} but reference sequence has ${ref_allele_check}`
        //     )
        // }

        info["cds"] = cds
        info["aa_pos"] = aa_pos
        info["ref_start"] = parseInt(ref_start)
        if (['del', '-'].includes(info["alt_allele"])){
            info["type"] = "del"
            info["space"] = "aa"
            info["length"] = info["ref_allele"].length
            // these fields aren't used for anything here, so aren't implemented
            info["before"] = "something" // str(Seq(refseq[ref_start - 4:ref_start - 1]).translate())
            info["after"] = "somethingElse" // str(Seq(refseq[ref_start - 1 + 3*info["length"]:ref_start - 1 + 3*info["length"]+3]).translate())
        }
        else{
            info["fuzzy"] = info["alt_allele"] == ''
        }

    //print("Found variant %s of type %s" % (info["name"], info["type"]))
    }
    return info
}

function generateFeaturesDict(reference_json){
    `
    Use sarsCov2Ref from SARS-CoV-2.js as reference_json
    `
    var features_dict = {}
    var feature_types = ["genes", "proteins"]
    for (var f in feature_types){
        var feature = feature_types[f]
        if (feature in reference_json){
            for (var item in reference_json[feature]){
                var item_name = item.toLowerCase()
                if ("name" in reference_json[feature][item]){
                    item_name = reference_json[feature][item]["name"].toLowerCase()
                }
                if ((item_name in features_dict) || ((item_name in global_aliases) && (global_aliases[item_name] in features_dict))){
                    continue
                }

                if ("coordinates" in reference_json[feature][item]){
                    if ("from" in reference_json[feature][item]["coordinates"]){
                        var start = parseInt(reference_json[feature][item]["coordinates"]["from"])
                        var end = parseInt(reference_json[feature][item]["coordinates"]["to"])
                    }
                    else if ("start" in reference_json[feature][item]["coordinates"]){
                        var start = parseInt(reference_json[feature][item]["coordinates"]["start"])
                        var end = parseInt(reference_json[feature][item]["coordinates"]["end"])
                    }

                    if ("gene" in reference_json[feature][item]){
                        features_dict[item_name] = [start, end, reference_json[feature][item]["gene"]]
                    }
                    else{
                        features_dict[item_name] = [start, end]
                        // console.log("Found reference feature", item_name, "with coordinates", features_dict[item_name])
                    }
                }
            }
        }
    }
    return features_dict
}

function translate_triplets(input_nts){
    var return_string = ""
    var codon = ""
    for (var x=0; x < (input_nts.length - 1); x+=3){
        codon = input_nts.slice(x,x+3)
        return_string += codon in codon_to_amino_acid_dict ? codon_to_amino_acid_dict[codon]: "X"
    }
    return return_string
}